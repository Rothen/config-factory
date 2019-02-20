import { ConfigMetaData } from './ConfigMetaData';

export class ObjectConfigMetaData extends ConfigMetaData {
    constructor(target: any, property: string) {
        super(target, property);
    }

    protected async processValue(target: any, value: number): Promise<number> {
        return value;
    }
}
