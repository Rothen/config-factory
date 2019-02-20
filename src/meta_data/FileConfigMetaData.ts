import * as fs from 'fs';
import { ConfigMetaData } from './ConfigMetaData';

export class FileConfigMetaData extends ConfigMetaData {
    private pathProperty: string;

    constructor(target: any, property: string, pathProperty: string) {
        super(target, property);
        this.pathProperty = pathProperty;
    }

    protected async processValue(target: any, filePath: string): Promise<string> {
        if (!filePath || filePath.length === 0) {
            throw new Error(`The path config ${this.property} cannot be empty`);
        }

        if (this.pathProperty !== undefined) {
            target[this.pathProperty] = filePath;
        }

        const fileHandler: fs.promises.FileHandle = await fs.promises.open(filePath, 'r');
        const fileBuffer: Buffer = await fileHandler.readFile();
        return fileBuffer.toString('utf8');
    }
}
