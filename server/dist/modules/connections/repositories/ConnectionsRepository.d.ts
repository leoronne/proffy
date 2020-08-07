import Knex from 'knex';
declare class ConnectionsRepository {
    createConnection(user_id: number, trx: Knex.Transaction): Promise<void>;
    count(): Promise<number>;
}
export default ConnectionsRepository;
