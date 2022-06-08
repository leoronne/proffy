import Knex from 'knex';
import knex from '@infra/database/connection';

import AppError from '@shared/errors/AppError';

interface User {
  email: string;
  name: string;
  whatsapp: string;
  avatar: string;
  bio: string;
}

class UserRepository {
  public async findByEmail(email: string): Promise<User | null> {
    try {
      const user = await knex('users').where('email', email).first();

      return user;
    } catch (err: any) {
      throw new AppError(err.message, 500);
    }
  }

  public async findById(id: number): Promise<User | null> {
    try {
      const user = await knex('users').where('id', id).first();

      return user;
    } catch (err: any) {
      throw new AppError(err.message, 500);
    }
  }

  public async updateAvatar(id: number, hashedFilename: string, trx: Knex.Transaction): Promise<void> {
    try {
      return await trx('users').where('id', id).update({
        avatar: hashedFilename,
      });
    } catch (err: any) {
      await trx.rollback();
      throw new AppError(err.message, 500);
    }
  }

  public async create(email: string, name: string, whatsapp: string, bio: string, trx: Knex.Transaction): Promise<number> {
    try {
      const createdUser = await trx('users').insert({ email, name, whatsapp, bio }, 'id');
      const user_id = createdUser[0];

      return user_id;
    } catch (err: any) {
      await trx.rollback();
      throw new AppError(err.message, 500);
    }
  }
}

export default UserRepository;
