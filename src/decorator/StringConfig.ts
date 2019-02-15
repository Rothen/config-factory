import { ConfigFactory } from '../ConfigFactory';
import { StringConfigMetaData } from '../meta_data/StringConfigMetaData';

export function StringConfig(minLength?: number, maxLength?: number) {
    return function (target: any, propertyKey: string) {
        ConfigFactory.addConfigMetaData(new StringConfigMetaData(target, propertyKey, minLength, maxLength));
    };
}
