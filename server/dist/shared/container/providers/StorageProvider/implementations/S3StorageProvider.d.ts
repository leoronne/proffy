import IStorageProvider from '../models/IStorageProvider';
declare class S3StorageProvider implements IStorageProvider {
    private client;
    constructor();
    saveFile(file: string): Promise<string>;
    deleteFile(file: string): Promise<void>;
}
export default S3StorageProvider;
