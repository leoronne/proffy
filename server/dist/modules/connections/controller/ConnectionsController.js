"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const CreateConnectionService_1 = __importDefault(require("@modules/connections/services/CreateConnectionService"));
const ConnectionsRepository_1 = __importDefault(require("@modules/connections/repositories/ConnectionsRepository"));
class ConnectionsController {
    async store(req, res) {
        try {
            const createConnection = new CreateConnectionService_1.default();
            await createConnection.execute(req.body);
            return res.status(201).json();
        }
        catch (err) {
            throw new AppError_1.default(err.message, 500);
        }
    }
    async index(req, res) {
        try {
            const connectionsRepo = new ConnectionsRepository_1.default();
            const total = await connectionsRepo.count();
            return res.status(200).json({ total });
        }
        catch (err) {
            throw new AppError_1.default(err.message, 500);
        }
    }
}
exports.default = new ConnectionsController();
