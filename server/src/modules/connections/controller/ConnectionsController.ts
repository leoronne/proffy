import { Request, Response } from 'express';

import AppError from '@shared/errors/AppError';

import CreateConnectionService from '@modules/connections/services/CreateConnectionService';
import ConnectionsRepository from '@modules/connections/repositories/ConnectionsRepository';

class ConnectionsController {
  async store(req: Request, res: Response) {
    try {
      const createConnection = new CreateConnectionService();

      await createConnection.execute(req.body);

      return res.status(201).json();
    } catch (err: any) {
      throw new AppError(err.message, 500);
    }
  }

  async index(req: Request, res: Response) {
    try {
      const connectionsRepo = new ConnectionsRepository();

      const total = await connectionsRepo.count();

      return res.status(200).json({ total });
    } catch (err: any) {
      throw new AppError(err.message, 500);
    }
  }
}

export default new ConnectionsController();
