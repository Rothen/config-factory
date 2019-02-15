import { ConfigFactory } from '../ConfigFactory';
import { FileConfigMetaData } from '../meta_data/FileConfigMetaData';

export function FileConfig(pathField?: any) {
    return function (target: any, propertyKey: string) {
        ConfigFactory.addConfigMetaData(new FileConfigMetaData(target, propertyKey, pathField));
    };
}
