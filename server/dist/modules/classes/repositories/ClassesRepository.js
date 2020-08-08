"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable func-names */
const environment_1 = require("@shared/utils/environment");
const connection_1 = __importDefault(require("@infra/database/connection"));
const upload_1 = __importDefault(require("@config/upload"));
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const convertHour_1 = __importDefault(require("@shared/utils/convertHour"));
class ClassesRepository {
    async createClass(subject, cost, user_id, trx) {
        try {
            const classes = await trx('classes').insert({ subject, cost, user_id }, 'id');
            const class_id = classes[0];
            return class_id;
        }
        catch (err) {
            await trx.rollback();
            throw new AppError_1.default(err.message, 500);
        }
    }
    async createSchedule(schedule, class_id, trx) {
        try {
            const classSchedule = schedule.map((s) => {
                return {
                    class_id,
                    week_day: s.week_day,
                    from: convertHour_1.default(s.from),
                    to: convertHour_1.default(s.to),
                };
            });
            return await trx('class_schedule').insert(classSchedule);
        }
        catch (err) {
            await trx.rollback();
            throw new AppError_1.default(err.message, 500);
        }
    }
    async filter(week_day, subject, timeMin) {
        try {
            const classes = await connection_1.default('classes_vw')
                .whereExists(function () {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('class_schedule.class_id = classes_vw.class_id')
                    .whereRaw(`${!isNaN(week_day) ? 'class_schedule.week_day = ??' : `'${week_day}'='??'`}`, [week_day])
                    .whereRaw(`${timeMin > 0 ? 'class_schedule.from <= ??' : `${timeMin}=??`}`, [timeMin])
                    .whereRaw(`${timeMin > 0 ? 'class_schedule.to > ??' : `${timeMin}=??`}`, [timeMin]);
            })
                .where('classes_vw.subject', 'like', `%${subject}%`);
            const newClass = classes.map(i => {
                return Object.assign(Object.assign({}, i), { avatar_url: upload_1.default.driver === 'disk' ? `${environment_1.APP_API_URL}/files/${i.avatar}` : `${environment_1.AWS_S3_BUCKET_URL}${i.avatar}` });
            });
            return newClass;
        }
        catch (err) {
            throw new AppError_1.default(err.message, 500);
        }
    }
    async getSubjects() {
        try {
            const classes = await connection_1.default('classes').select('subject').distinct();
            const subArrat = classes.map(i => {
                return { value: i.subject, label: i.subject };
            });
            return subArrat;
        }
        catch (err) {
            throw new AppError_1.default(err.message, 500);
        }
    }
}
exports.default = ClassesRepository;
