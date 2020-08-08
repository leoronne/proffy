import IStorageProvider from '../models/IStorageProvider';
declare class DiskStorageProvider implements IStorageProvider {
    saveFile(file: string): Promise<string>;
    deleteFile(file: string): Promise<void>;
}
export default DiskStorageProvider;
