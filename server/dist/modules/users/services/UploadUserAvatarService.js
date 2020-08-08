"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("@infra/database/connection"));
const upload_1 = __importDefault(require("@config/upload"));
const UserRepository_1 = __importDefault(require("@modules/users/repositories/UserRepository"));
const DiskStorageProvider_1 = __importDefault(require("@shared/container/providers/StorageProvider/implementations/DiskStorageProvider"));
const S3StorageProvider_1 = __importDefault(require("@shared/container/providers/StorageProvider/implementations/S3StorageProvider"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
class UploadUserAvatarService {
    async execute({ user_id, filename }) {
        const trx = await connection_1.default.transaction();
        const userRepo = new UserRepository_1.default();
        const strProv = upload_1.default.driver === 'disk' ? new DiskStorageProvider_1.default() : new S3StorageProvider_1.default();
        try {
            const user = await userRepo.findById(Number(user_id));
            if (!user) {
                throw new AppError_1.default('User not found', 401);
            }
            if (user.avatar) {
                await strProv.deleteFile(user.avatar);
            }
            const hashedFilename = await strProv.saveFile(filename);
            await userRepo.updateAvatar(Number(user_id), hashedFilename, trx);
            return await trx.commit();
        }
        catch (err) {
            await trx.rollback();
            throw new AppError_1.default(err.message, 500);
        }
    }
}
exports.default = UploadUserAvatarService;
