interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}
interface IRequest {
    email: string;
    name: string;
    whatsapp: string;
    avatar: string;
    bio: string;
    subject: string;
    cost: number;
    schedule: Array<ScheduleItem>;
}
declare class CreateClassService {
    execute({ email, name, whatsapp, avatar, bio, subject, cost, schedule }: IRequest): Promise<void>;
}
export default CreateClassService;
