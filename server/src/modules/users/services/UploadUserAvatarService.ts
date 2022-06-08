import knex from '@infra/database/connection';
import storageConfig from '@config/upload';

import UserRepository from '@modules/users/repositories/UserRepository';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';
import S3StorageProvider from '@shared/container/providers/StorageProvider/implementations/S3StorageProvider';

import AppError from '@shared/errors/AppError';

interface IRequest {
  user_id: string;
  filename: string;
}

class UploadUserAvatarService {
  public async execute({ user_id, filename }: IRequest): Promise<void> {
    const trx = await knex.transaction();
    const userRepo = new UserRepository();
    const strProv = storageConfig.driver === 'disk' ? new DiskStorageProvider() : new S3StorageProvider();

    try {
      const user = await userRepo.findById(Number(user_id));

      if (!user) {
        throw new AppError('User not found', 401);
      }

      if (user.avatar) {
        await strProv.deleteFile(user.avatar);
      }

      const hashedFilename = await strProv.saveFile(filename);

      await userRepo.updateAvatar(Number(user_id), hashedFilename, trx)

      return await trx.commit();
    } catch (err: any) {
      await trx.rollback();
      throw new AppError(err.message, 500);
    }
  }
}

export default UploadUserAvatarService;
