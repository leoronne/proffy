import Knex from 'knex';
import knex from '@infra/database/connection';

import AppError from '@shared/errors/AppError';

class ConnectionsRepository {
  public async createConnection(user_id: number, trx: Knex.Transaction): Promise<void> {
    try {
      return await trx('connections').insert({ user_id });
    } catch (err: any) {
      await trx.rollback();
      throw new AppError(err.message, 500);
    }
  }

  public async count(): Promise<number> {
    try {
      const connections = await knex('connections').count('* as total');

      const { total } = connections[0];

      return Number(total);
    } catch (err: any) {
      throw new AppError(err.message, 500);
    }
  }
}

export default ConnectionsRepository;
