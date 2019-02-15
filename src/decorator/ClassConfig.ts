import { ConfigFactory } from '../ConfigFactory';
import { ClassConfigMetaData } from '../meta_data/ClassConfigMetaData';

export function ClassConfig<T extends {new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    };
}
