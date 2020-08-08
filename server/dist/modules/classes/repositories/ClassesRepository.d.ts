import Knex from 'knex';
interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}
interface ClassesList {
    name: string;
    email: string;
    whatsapp: string;
    avatar: string;
    avatar_url: string;
    bio: string;
    class_id: number;
    subject: string;
    cost: string;
}
declare class ClassesRepository {
    createClass(subject: string, cost: number, user_id: number, trx: Knex.Transaction): Promise<number>;
    createSchedule(schedule: Array<ScheduleItem>, class_id: number, trx: Knex.Transaction): Promise<void>;
    filter(week_day: number, subject: string, timeMin: number): Promise<Array<ClassesList>>;
    getSubjects(): Promise<Array<object>>;
}
export default ClassesRepository;
