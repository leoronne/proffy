"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const UploadUserAvatarService_1 = __importDefault(require("@modules/users/services/UploadUserAvatarService"));
class UserController {
    async uploadAvatar(req, res) {
        try {
            const { id } = req.params;
            const uploadAvatar = new UploadUserAvatarService_1.default();
            await uploadAvatar.execute({
                user_id: id,
                filename: req.file.filename,
            });
            return res.status(201).json();
        }
        catch (err) {
            throw new AppError_1.default(err.message, 500);
        }
    }
}
exports.default = new UserController();
