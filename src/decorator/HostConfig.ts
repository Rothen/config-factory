import { ConfigFactory } from '../ConfigFactory';
import { HostConfigMetaData } from '../meta_data/HostConfigMetaData';

export function HostConfig() {
    return function (target: any, propertyKey: string) {
        ConfigFactory.addConfigMetaData(new HostConfigMetaData(target, propertyKey));
    };
}
