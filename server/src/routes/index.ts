import express, { Request, Response } from 'express';

import classesRouter from '@modules/classes/infra/http/routes/classes.routes';
import connectionsRouter from '@modules/connections/infra/http/routes/connections.routes';

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
  .use('/connections', connectionsRouter);

export default routes;
