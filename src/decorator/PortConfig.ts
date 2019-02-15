import { ConfigFactory } from '../ConfigFactory';
import { PortConfigMetaData } from '../meta_data/PortConfigMetaData';

export function PortConfig(minPort?: number, maxPort?: number) {
    return function (target: any, propertyKey: string) {
        ConfigFactory.addConfigMetaData(new PortConfigMetaData(target, propertyKey, minPort, maxPort));
    };
}
