"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("@infra/database/connection"));
const ConnectionsRepository_1 = __importDefault(require("@modules/connections/repositories/ConnectionsRepository"));
const UserRepository_1 = __importDefault(require("@modules/users/repositories/UserRepository"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
class CreateConnectionService {
    async execute({ user_id }) {
        const trx = await connection_1.default.transaction();
        const connectionsRepo = new ConnectionsRepository_1.default();
        const userRepo = new UserRepository_1.default();
        try {
            const user = await userRepo.findById(user_id);
            if (!user) {
                throw new AppError_1.default('User not found', 401);
            }
            await connectionsRepo.createConnection(user_id, trx);
            return await trx.commit();
        }
        catch (err) {
            await trx.rollback();
            throw new AppError_1.default(err.message, 500);
        }
    }
}
exports.default = CreateConnectionService;
