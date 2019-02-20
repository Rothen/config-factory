import { expect } from 'chai';
import { ConfigFactory } from '../src';
import { ConfigModel } from './test_files/ConfigModel';

describe('Config', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        expect(ConfigFactory).to.be.ok;
    });

    it('should work correctly', async () => {
        const config = await ConfigFactory.load(ConfigModel, 'config.json', './spec/test_files/');

        const checkConfig = new ConfigModel();
        checkConfig.server.host = 'testing.server.host';
        checkConfig.server.port = 8000;
        checkConfig.server.ws_port = 8001;
        checkConfig.server.certificate = '';
        checkConfig.server.certificatePath = 'spec/test_files/test.cert';
        checkConfig.server.undefinedProperty = 'gugus';
        checkConfig.mqtt.host = 'testing.mqtt.host';
        checkConfig.mqtt.port = 9001;
        checkConfig.mqtt.user = 'user';
        checkConfig.mqtt.password = 'TestingPassword';

        expect(config).to.deep.equal(checkConfig);
    });

    it('should work correctly with errors', async () => {
        const config = await ConfigFactory.load(ConfigModel, 'error_config.json', './spec/test_files/');

        const checkConfig = new ConfigModel();
        checkConfig.server.host = 'testing.server.host';
        checkConfig.server.port = 8000;
        checkConfig.server.ws_port = 8001;
        checkConfig.server.certificate = '';
        checkConfig.server.certificatePath = 'spec/test_files/test.cert';
        checkConfig.mqtt.host = 'testing.mqtt.host';
        checkConfig.mqtt.port = 9001;
        checkConfig.mqtt.user = 'user';
        checkConfig.mqtt.password = 'TestingPassword';

        expect(ConfigFactory.hasErrors()).to.be.true;
        expect(config).to.deep.equal(checkConfig);
    });

    /* public static addConfigMetaData(configMetaData: ConfigMetaData): void

    /*public static async load(configClass: new () => ConfigModel,
        rootDir: string = './',
        fileName: string = 'config.json'): Promise<ConfigModel>*/

    // private static async map(obj: any, config: any): Promise<void>

    // private static async loadConfigMetaData(obj: any, config: any, className: string, propertyName: string): Promise<void>

    // private static metaDataExists(className: string, propertyName: string): boolean

    // private static getMetaData(className: string, propertyName: string): ConfigMetaData

    // private static isObjectConfigMetaData(configMetaData: ConfigMetaData): boolean

    // public static async readFile(file: fs.PathLike): Promise<string>
});
