import { ConfigFactory } from '../src/ConfigFactory';

describe('Config', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        expect(ConfigFactory).toBeTruthy();
    });

    /* public static addConfigMetaData(configMetaData: ConfigMetaData): void

    /*public static async load(configClass: new () => ConfigModelNew,
        rootDir: string = './',
        fileName: string = 'config.json'): Promise<ConfigModelNew>*/

    // private static async map(obj: any, config: any): Promise<void>

    // private static async loadConfigMetaData(obj: any, config: any, className: string, propertyName: string): Promise<void>

    // private static metaDataExists(className: string, propertyName: string): boolean

    // private static getMetaData(className: string, propertyName: string): ConfigMetaData

    // private static isObjectConfigMetaData(configMetaData: ConfigMetaData): boolean

    // public static async readFile(file: fs.PathLike): Promise<string>
});
