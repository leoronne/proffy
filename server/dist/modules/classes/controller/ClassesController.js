"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const CreateClassService_1 = __importDefault(require("@modules/classes/services/CreateClassService"));
const FindClassesService_1 = __importDefault(require("@modules/classes/services/FindClassesService"));
const ClassesRepository_1 = __importDefault(require("@modules/classes/repositories/ClassesRepository"));
class ClassesController {
    async store(req, res) {
        try {
            const createClass = new CreateClassService_1.default();
            await createClass.execute(req.body);
            return res.status(201).json();
        }
        catch (err) {
            throw new AppError_1.default(err.message, 500);
        }
    }
    async index(req, res) {
        try {
            const { week_day, subject, time } = req.query;
            const findClass = new FindClassesService_1.default();
            const classes = await findClass.execute(week_day, subject, time);
            return res.status(200).json({ classes });
        }
        catch (err) {
            throw new AppError_1.default(err.message, 500);
        }
    }
    async getSubjects(req, res) {
        try {
            const findClass = new ClassesRepository_1.default();
            const subjects = await findClass.getSubjects();
            return res.status(200).json({ subjects });
        }
        catch (err) {
            throw new AppError_1.default(err.message, 500);
        }
    }
}
exports.default = new ClassesController();
