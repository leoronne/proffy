import Knex from 'knex';
interface User {
    email: string;
    name: string;
    whatsapp: string;
    avatar: string;
    bio: string;
}
declare class UserRepository {
    findByEmail(email: string): Promise<User | null>;
    findById(id: number): Promise<User | null>;
    create(email: string, name: string, whatsapp: string, avatar: string, bio: string, trx: Knex.Transaction): Promise<number>;
}
export default UserRepository;
