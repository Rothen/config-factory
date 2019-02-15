import * as fs from 'fs';
import * as path from 'path';
import { ObjectConfigMetaData } from './meta_data/ObjectConfigMetaData';
import { ConfigMetaData } from './meta_data/ConfigMetaData';

export abstract class ConfigFactory {
    private static errors: any[] = [];
    private static configMetaData: any = {};

    public static addConfigMetaData(configMetaData: ConfigMetaData): void {
        const className = configMetaData.target.constructor.name;
        const propertyName = configMetaData.property;
        if (this.metaDataExists(className, propertyName)) {
            return;
        }

        if (!this.configMetaData.hasOwnProperty(className)) {
            this.configMetaData[className] = {};
        }

        if (!this.configMetaData[className].hasOwnProperty(propertyName)) {
            this.configMetaData[className][propertyName] = configMetaData;
        }
    }

    public static async load<T>(configClass: new () => T,
        rootDir: string = './',
        fileName: string = 'config.json'): Promise<T> {
        this.errors = [];

        try {
            const config: T = new configClass();
            const file = path.resolve(rootDir, fileName);
            const configContent = JSON.parse(await this.readFile(file));

            await this.map(config, configContent);

            return config;
        } catch (e) {
            console.error(e);
        } finally {
            this.configMetaData = [];
            if (this.errors.length > 0) {
                // Do output
            }
        }
    }

    private static async map(obj: any, config: any): Promise<void> {
        for (const propertyName in obj) {
            if (!obj.hasOwnProperty(propertyName)) {
                continue;
            }

            const className = obj.constructor.name;

            if (this.metaDataExists(className, propertyName)) {
                await this.loadConfigMetaData(obj, config, className, propertyName);
            }
        }
    }

    private static async loadConfigMetaData(obj: any, config: any, className: string, propertyName: string): Promise<void> {
        const configMetaData: ConfigMetaData = this.getMetaData(className, propertyName);

        if (this.isObjectConfigMetaData(configMetaData)) {
            await this.map(obj[propertyName], config[propertyName]);
        } else if (configMetaData) {
            await configMetaData.setConfig(obj, config);
        }
    }

    private static metaDataExists(className: string, propertyName: string): boolean {
        return this.configMetaData.hasOwnProperty(className) && this.configMetaData[className].hasOwnProperty(propertyName);
    }

    private static getMetaData(className: string, propertyName: string): ConfigMetaData {
        return this.configMetaData[className][propertyName];
    }

    private static isObjectConfigMetaData(configMetaData: ConfigMetaData): boolean {
        return configMetaData.constructor.name === ObjectConfigMetaData.name;
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
