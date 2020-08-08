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
declare class FindClassesService {
    execute(week_day: string, subject: string, time: string): Promise<Array<ClassesList>>;
}
export default FindClassesService;
