import knex from '@infra/database/connection';

import ConnectionsRepository from '@modules/connections/repositories/ConnectionsRepository';
import UserRepository from '@modules/users/repositories/UserRepository';

import AppError from '@shared/errors/AppError';

interface IRequest {
  user_id: number;
}

class CreateConnectionService {
  public async execute({ user_id }: IRequest): Promise<void> {
    const trx = await knex.transaction();
    const connectionsRepo = new ConnectionsRepository();
    const userRepo = new UserRepository();

    try {
      const user = await userRepo.findById(user_id);

      if (!user) {
        throw new AppError('User not found', 401);
      }

      await connectionsRepo.createConnection(user_id, trx);

      return await trx.commit();
    } catch (err: any) {
      await trx.rollback();
      throw new AppError(err.message, 500);
    }
  }
}

export default CreateConnectionService;
