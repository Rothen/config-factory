import { ConfigFactory } from '../ConfigFactory';
import { ObjectConfigMetaData } from '../meta_data/ObjectConfigMetaData';

export function ObjectConfig() {
    return function (target: any, propertyKey: string) {
        ConfigFactory.addConfigMetaData(new ObjectConfigMetaData(target, propertyKey));
    };
}
