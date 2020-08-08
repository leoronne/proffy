/* eslint-disable func-names */
import { APP_API_URL, AWS_S3_BUCKET_URL } from '@shared/utils/environment';
import Knex from 'knex';
import knex from '@infra/database/connection';

import storageConfig from '@config/upload';

import AppError from '@shared/errors/AppError';
import ToMinutes from '@shared/utils/convertHour';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

interface ClassesList {
  name: string;
  email: string;
  whatsapp: string;
  avatar: string;
  avatar_url: string;
  bio: string;
  class_id: number;
  subject: string;
  cost: string;
}

class ClassesRepository {
  public async createClass(subject: string, cost: number, user_id: number, trx: Knex.Transaction): Promise<number> {
    try {
      const classes = await trx('classes').insert({ subject, cost, user_id }, 'id');
      const class_id = classes[0];

      return class_id;
    } catch (err) {
      await trx.rollback();
      throw new AppError(err.message, 500);
    }
  }

  public async createSchedule(schedule: Array<ScheduleItem>, class_id: number, trx: Knex.Transaction): Promise<void> {
    try {
      const classSchedule = schedule.map((s: ScheduleItem) => {
        return {
          class_id,
          week_day: s.week_day,
          from: ToMinutes(s.from),
          to: ToMinutes(s.to),
        };
      });

      return await trx('class_schedule').insert(classSchedule);
    } catch (err) {
      await trx.rollback();
      throw new AppError(err.message, 500);
    }
  }

  public async filter(week_day: number, subject: string, timeMin: number): Promise<Array<ClassesList>> {
    try {
      const classes = await knex('classes_vw')
        .whereExists(function () {
          this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('class_schedule.class_id = classes_vw.class_id')
            .whereRaw(`${!isNaN(week_day) ? 'class_schedule.week_day = ??' : `'${week_day}'='??'`}`, [week_day])
            .whereRaw(`${timeMin > 0 ? 'class_schedule.from <= ??' : `${timeMin}=??`}`, [timeMin])
            .whereRaw(`${timeMin > 0 ? 'class_schedule.to > ??' : `${timeMin}=??`}`, [timeMin]);
        })
        .where('classes_vw.subject', 'like', `%${subject}%`);

      const newClass = classes.map(i => {
        return {
          ...i,
          avatar_url: storageConfig.driver === 'disk' ? `${APP_API_URL}/files/${i.avatar}` : `${AWS_S3_BUCKET_URL}${i.avatar}`,
        };
      });
      return newClass;
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }

  public async getSubjects(): Promise<Array<object>> {
    try {
      const classes = await knex('classes').select('subject').distinct();

      const subArrat = classes.map(i => {
        return { value: i.subject, label: i.subject };
      });

      return subArrat;
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }
}

export default ClassesRepository;
