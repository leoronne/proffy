import { Request, Response } from 'express';

import AppError from '@shared/errors/AppError';

import CreateClassService from '@modules/classes/services/CreateClassService';
import FindClassesService from '@modules/classes/services/FindClassesService';
import ClassesRepository from '@modules/classes/repositories/ClassesRepository';

class ClassesController {
  async store(req: Request, res: Response) {
    try {
      const createClass = new CreateClassService();

      const user_id = await createClass.execute(req.body);

      return res.status(201).json({user_id});
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }

  async index(req: Request, res: Response) {
    try {
      const { week_day, subject, time } = req.query;
      const findClass = new FindClassesService();

      const classes = await findClass.execute(week_day as string, subject as string, time as string);

      return res.status(200).json({classes});
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }

  async getSubjects(req: Request, res: Response) {
    try {
      const findClass = new ClassesRepository();

      const subjects = await findClass.getSubjects();

      return res.status(200).json({subjects});
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }
}

export default new ClassesController();
