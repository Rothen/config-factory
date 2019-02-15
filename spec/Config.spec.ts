import { ConfigFactory } from '../src';
import { ConfigModelNew } from './ConfigModelNew';

describe('Config', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        expect(ConfigFactory).toBeTruthy();
    });

    it('should work correctly', async () => {
        const config = await ConfigFactory.load(ConfigModelNew);
        const checkConfig = new ConfigModelNew();

        checkConfig.server.host = 'testing.server.host';
        checkConfig.server.port = 8000;
        checkConfig.server.ws_port = 8001;
        checkConfig.server.certificate = '';
        checkConfig.server.certificatePath = 'test.cert';

        checkConfig.mqtt.host = 'testing.mqtt.host';
        checkConfig.mqtt.port = 9001;
        checkConfig.mqtt.user = 'user';
        checkConfig.mqtt.password = 'TestingPassword';

        expect(config).toEqual(checkConfig);
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
