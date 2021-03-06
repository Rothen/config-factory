export abstract class ConfigMetaData {
    public target: any;
    public property: string;

    constructor(target: any, property: string) {
        this.target = target;
        this.property = property;
    }

    public async setConfig(target: any, config: any): Promise<any> {
        target[this.property] = await this.processValue(target, config[this.property]);
        return target[this.property];
    }

    protected abstract async processValue(target: any, value: any): Promise<any>;
}
