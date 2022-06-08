import { Request, Response } from 'express';

import AppError from '@shared/errors/AppError';

interface MulterRequest extends Request {
  file: any;
}

import UploadUserAvatarService from '@modules/users/services/UploadUserAvatarService';

class UserController {
  async uploadAvatar(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const uploadAvatar = new UploadUserAvatarService();

      await uploadAvatar.execute({
        user_id: id,
        //@ts-ignore
        filename: req.file.filename,
      });

      return res.status(201).json();
    } catch (err: any) {
      throw new AppError(err.message, 500);
    }
  }
}

export default new UserController();
