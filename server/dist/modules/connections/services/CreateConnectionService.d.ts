interface IRequest {
    user_id: number;
}
declare class CreateConnectionService {
    execute({ user_id }: IRequest): Promise<void>;
}
export default CreateConnectionService;
