import { ConfigMetaData } from './ConfigMetaData';

export class StringConfigMetaData extends ConfigMetaData {
    private minLength = 0;
    private maxLength = Infinity;

    constructor(target: any, property: string, minLength: number = 0, maxLength: number = 65535) {
        super(target, property);
        this.minLength = Math.max(minLength, this.minLength);
        this.maxLength = Math.min(maxLength, this.maxLength);
    }

    protected async processValue(target: any, value: string): Promise<string> {
        if ((value.length < this.minLength || value.length > this.maxLength)) {
            let errorMessage = `String ${this.property} must have a length `;
            if (this.maxLength === Infinity) {
                errorMessage += `of at least ${this.minLength}`;
            } else {
                errorMessage += `between ${this.minLength} and ${this.maxLength}`;
            }
            throw new Error(errorMessage);
        }

        return value;
    }
}
