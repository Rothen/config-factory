import * as fs from 'fs';
import * as path from 'path';
import { ConfigModelNew } from './ConfigModelNew';
import { ConfigMetaData } from './meta_data/ConfigMetaData';

export abstract class ConfigFactory {
    private static errors: any[] = [];
    private static configMetaData: ConfigMetaData[] = [];

    public static addConfigMetaData(configMetaData: ConfigMetaData): void {
        this.configMetaData.push(configMetaData);
    }

    public static async load(configClass: new () => ConfigModelNew,
        rootDir: string = './',
        fileName: string = 'config.json'): Promise<ConfigModelNew> {
        this.errors = [];

        try {
            const config: ConfigModelNew = new configClass();
            const file = path.resolve(rootDir, fileName);
            const configContent = JSON.parse(await this.readFile(file));


            this.map(config, configContent);

            return config;
        } catch (e) {
            console.error(e);
        } finally {
            if (this.errors.length > 0) {
                // Do output
            }
        }
        this.configMetaData = [];
    }

    private static map(obj: any, config: any) {
        for (const configMetaData of this.configMetaData) {
            configMetaData.setConfig(config);
        }
    }

    private static isPropertyEnumerable(property: any) {
        const notEnumerable = [
            String.name,
            Number.name,
            Boolean.name
        ];
        return typeof property !== 'undefined' && notEnumerable.indexOf(property.constructor.name) === -1;
    }

    public static async readFile(file: fs.PathLike): Promise<string> {
        try {
            const fileHandler: fs.promises.FileHandle = await fs.promises.open(file, 'r');
            const fileBuffer: Buffer = await fileHandler.readFile();
            const fileContent = fileBuffer.toString('utf8');
            return fileContent;
        } catch (e) {
            console.error(e);
        }
    }
}
