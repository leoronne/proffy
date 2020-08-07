"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassesRepository_1 = __importDefault(require("@modules/classes/repositories/ClassesRepository"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const convertHour_1 = __importDefault(require("@shared/utils/convertHour"));
class FindClassesService {
    async execute(week_day, subject, time) {
        const classRepo = new ClassesRepository_1.default();
        try {
            const timeMin = time ? convertHour_1.default(time) : 0;
            return await classRepo.filter(Number(week_day), subject ? subject : '', timeMin);
        }
        catch (err) {
            throw new AppError_1.default(err.message, 500);
        }
    }
}
exports.default = FindClassesService;
