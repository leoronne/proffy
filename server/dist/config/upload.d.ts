import { StorageEngine } from 'multer';
interface IStorageConfig {
    driver: 's3' | 'disk';
    tmpfolder: string;
    uploadsFolder: string;
    multer: {
        storage: StorageEngine;
    };
}
declare const _default: IStorageConfig;
export default _default;
