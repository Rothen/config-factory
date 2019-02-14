import { writeFileSync, readFileSync, existsSync, PathLike, promises } from 'fs';
import * as path from 'path';
import { ConfigMQTT, ConfigServer } from './ConfigModel';
import { ConfigModelNew } from './ConfigModelNew';

export abstract class ConfigFactory {
    public static async load(configClass: new () => ConfigModelNew,
        rootDir: string = './',
        fileName: string = 'config.json'): Promise<ConfigModelNew> {

        try {
            const config: ConfigModelNew = new configClass();
            config.server.port = -5;
            const file = path.resolve(rootDir, fileName);
            const configContent = await this.readFile(file);

            for (const propertyName in config) {
                if (config.hasOwnProperty(propertyName)) {
                    console.log(propertyName);
                    console.log(config[propertyName].constructor.name);
                }
            }

            return config;
        } catch (e) {
            console.error('Could not load config.');
            console.error(e);
        }
    }

    private static async readFile(file: PathLike): Promise<string> {
        try {
            const fileHandler: promises.FileHandle = await promises.open(file, 'r');
            const fileBuffer: Buffer = await fileHandler.readFile();
            const fileContent = fileBuffer.toString('utf8');
            return fileContent;
        } catch (e) {
            console.error('Could not load config file.');
        }
    }
}
