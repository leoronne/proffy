import express from 'express';
import { celebrate } from 'celebrate';

import ConnectionsController from '@modules/connections/controller/ConnectionsController';
import ConnectionsValidator from '@modules/connections/infra/http/validator/ConnectionsValidator';

const connectionsRouter = express.Router();

connectionsRouter.post('/', celebrate(ConnectionsValidator.store), ConnectionsController.store).get('/', ConnectionsController.index);

export default connectionsRouter;
