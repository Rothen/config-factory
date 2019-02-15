import { ConfigMetaData } from './ConfigMetaData';

export class HostConfigMetaData extends ConfigMetaData {
    protected async processValue(value: string): Promise<string> {
        /*if ((value.length < this.minLength || value.length > this.maxLength)) {
            let errorMessage = `String ${this.property} must have a length `;
            if (this.maxLength === Infinity) {
                errorMessage += `of at least ${this.minLength}`;
            } else {
                errorMessage += `between ${this.minLength} and ${this.maxLength}`;
            }
            throw new Error(errorMessage);
        }*/

        return value;
    }
}
