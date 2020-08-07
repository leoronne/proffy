import { Request, Response } from 'express';
declare class ClassesController {
    store(req: Request, res: Response): Promise<Response<any>>;
    index(req: Request, res: Response): Promise<Response<any>>;
    getSubjects(req: Request, res: Response): Promise<Response<any>>;
}
declare const _default: ClassesController;
export default _default;
