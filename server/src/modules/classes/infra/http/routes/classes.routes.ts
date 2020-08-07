import express from 'express';
import { celebrate } from 'celebrate';

import ClassesController from '@modules/classes/controller/ClassesController';
import ClassesValidator from '@modules/classes/infra/http/validator/ClassesValidator';

const classesRouter = express.Router();

classesRouter
  .post('/', celebrate(ClassesValidator.store), ClassesController.store)
  .get('/', celebrate(ClassesValidator.index), ClassesController.index)
  .get('/subjects', ClassesController.getSubjects);

export default classesRouter;
