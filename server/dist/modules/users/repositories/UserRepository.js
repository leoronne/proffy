"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("@infra/database/connection"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
class UserRepository {
    async findByEmail(email) {
        try {
            const user = await connection_1.default('users').where('email', email).first();
            return user;
        }
        catch (err) {
            throw new AppError_1.default(err.message, 500);
        }
    }
    async findById(id) {
        try {
            const user = await connection_1.default('users').where('id', id).first();
            return user;
        }
        catch (err) {
            throw new AppError_1.default(err.message, 500);
        }
    }
    async updateAvatar(id, hashedFilename, trx) {
        try {
            return await trx('users').where('id', id).update({
                avatar: hashedFilename,
            });
        }
        catch (err) {
            await trx.rollback();
            throw new AppError_1.default(err.message, 500);
        }
    }
    async create(email, name, whatsapp, bio, trx) {
        try {
            const createdUser = await trx('users').insert({ email, name, whatsapp, bio }, 'id');
            const user_id = createdUser[0];
            return user_id;
        }
        catch (err) {
            await trx.rollback();
            throw new AppError_1.default(err.message, 500);
        }
    }
}
exports.default = UserRepository;
