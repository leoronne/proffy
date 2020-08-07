import { Request, Response } from 'express';
declare class ConnectionsController {
    store(req: Request, res: Response): Promise<Response<any>>;
    index(req: Request, res: Response): Promise<Response<any>>;
}
declare const _default: ConnectionsController;
export default _default;
