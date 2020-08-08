interface IRequest {
    user_id: string;
    filename: string;
}
declare class UploadUserAvatarService {
    execute({ user_id, filename }: IRequest): Promise<void>;
}
export default UploadUserAvatarService;
