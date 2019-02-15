import { ConfigMetaData } from './ConfigMetaData';

export class ClassConfigMetaData extends ConfigMetaData {
    protected async processValue(value: number): Promise<number> {
        /*if ((value < this.minValue || value > this.maxValue)) {
            throw new Error(`Port ${this.property} must be between ${this.minValue} and ${this.maxValue}`);
        }*/

        return value;
    }
}
