import { ConfigMetaData } from './ConfigMetaData';

export class PortConfigMetaData extends ConfigMetaData {
    private minValue: number;
    private maxValue: number;

    constructor(target: any, property: string, minValue: number = 0, maxValue: number = 65535) {
        super(target, property);
        this.minValue = Math.max(minValue, 0);
        this.maxValue = Math.min(maxValue, 0);
    }

    protected async processValue(value: number): Promise<number> {
        if ((value < this.minValue || value > this.maxValue)) {
            throw new Error(`Port ${this.property} must be between ${this.minValue} and ${this.maxValue}`);
        }

        return value;
    }
}
