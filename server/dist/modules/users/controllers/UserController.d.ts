import { Request, Response } from 'express';
declare class UserController {
    uploadAvatar(req: Request, res: Response): Promise<Response<any>>;
}
declare const _default: UserController;
export default _default;
