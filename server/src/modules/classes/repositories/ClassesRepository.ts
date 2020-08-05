/* eslint-disable func-names */
import Knex from 'knex';
import knex from '@infra/database/connection';

import AppError from '@shared/errors/AppError';
import ToMinutes from '@shared/utils/convertHour';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

interface ClassesList {
  id: number;
  subject: string;
  cost: number;
  user_id: number;
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
            .whereRaw('class_schedule.week_day = ??', [week_day])
            .whereRaw('class_schedule.from <= ??', [timeMin])
            .whereRaw('class_schedule.to > ??', [timeMin]);
        })
        .where('classes_vw.subject', '=', subject);

      return classes;
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }
}

export default ClassesRepository;
