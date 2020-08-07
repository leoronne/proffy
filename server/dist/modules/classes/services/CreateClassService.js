"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("@infra/database/connection"));
const ClassesRepository_1 = __importDefault(require("@modules/classes/repositories/ClassesRepository"));
const UserRepository_1 = __importDefault(require("@modules/users/repositories/UserRepository"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
class CreateClassService {
    async execute({ email, name, whatsapp, avatar, bio, subject, cost, schedule }) {
        const trx = await connection_1.default.transaction();
        const classRepo = new ClassesRepository_1.default();
        const userRepo = new UserRepository_1.default();
        try {
            const user = await userRepo.findByEmail(email);
            if (user) {
                throw new AppError_1.default('User already registered', 401);
            }
            const user_id = await userRepo.create(email, name, whatsapp, avatar, bio, trx);
            const class_id = await classRepo.createClass(subject, cost, user_id, trx);
            await classRepo.createSchedule(schedule, class_id, trx);
            return await trx.commit();
        }
        catch (err) {
            await trx.rollback();
            throw new AppError_1.default(err.message, 500);
        }
    }
}
exports.default = CreateClassService;
