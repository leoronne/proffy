import express from 'express';
import multer from 'multer';
import { celebrate } from 'celebrate';

import uploadConfig from '@config/upload';

import UsersController from '@modules/users/controllers/UserController';
import UserValidator from '@modules/users/infra/http/validator/UserValidator';

const userRouter = express.Router();
const upload = multer(uploadConfig.multer);

userRouter.patch('/avatar/:id', upload.single('avatar'), celebrate(UserValidator.uploadAvatar), UsersController.uploadAvatar);

export default userRouter;
