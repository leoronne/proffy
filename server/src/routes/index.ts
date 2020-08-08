import express, { Request, Response } from 'express';

import uploadConfig from '@config/upload';

import classesRouter from '@modules/classes/infra/http/routes/classes.routes';
import connectionsRouter from '@modules/connections/infra/http/routes/connections.routes';
import usersRouter from '@modules/users/infra/http/routes/user.routes';

const routes = express.Router();

const Development = [
  'Proffy - NLW #2',
  {
    'Made by': 'Leonardo Ronne',
    GitHub: 'https://github.com/leoronne',
  },
];

routes
  // Copyright
  .get('/', (req: Request, res: Response) => {
    res.status(200).send({
      Development,
    });
  })
  .use('/classes', classesRouter)
  .use('/user', usersRouter)
  .use('/connections', connectionsRouter)
  .use('/files', express.static(uploadConfig.uploadsFolder));

export default routes;
