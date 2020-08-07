"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("@infra/database/connection"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
class ConnectionsRepository {
    async createConnection(user_id, trx) {
        try {
            return await trx('connections').insert({ user_id });
        }
        catch (err) {
            await trx.rollback();
            throw new AppError_1.default(err.message, 500);
        }
    }
    async count() {
        try {
            const connections = await connection_1.default('connections').count('* as total');
            const { total } = connections[0];
            return Number(total);
        }
        catch (err) {
            throw new AppError_1.default(err.message, 500);
        }
    }
}
exports.default = ConnectionsRepository;
