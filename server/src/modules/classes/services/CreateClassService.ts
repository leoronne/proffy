import knex from '@infra/database/connection';

import ClassesRepository from '@modules/classes/repositories/ClassesRepository';
import UserRepository from '@modules/users/repositories/UserRepository';

import AppError from '@shared/errors/AppError';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

interface IRequest {
  email: string;
  name: string;
  whatsapp: string;
  avatar: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: Array<ScheduleItem>;
}

class CreateClassService {
  public async execute({ email, name, whatsapp, avatar, bio, subject, cost, schedule }: IRequest): Promise<void> {
    const trx = await knex.transaction();
    const classRepo = new ClassesRepository();
    const userRepo = new UserRepository();

    try {
      const user = await userRepo.findByEmail(email);

      if (user) {
        throw new AppError('User already registered', 401);
      }

      const user_id = await userRepo.create(email, name, whatsapp, avatar, bio, trx);

      const class_id = await classRepo.createClass(subject, cost, user_id, trx);

      await classRepo.createSchedule(schedule, class_id, trx);

      return await trx.commit();
    } catch (err) {
      await trx.rollback();
      throw new AppError(err.message, 500);
    }
  }
}

export default CreateClassService;
