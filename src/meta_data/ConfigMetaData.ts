export abstract class ConfigMetaData {
    public target: any;
    public property: string;

    constructor(target: any, property: string) {
        this.target = target;
        this.property = property;
    }

    public async setConfig(config: object): Promise<any> {
        this.target[this.property] = await this.processValue(config[this.property]);
        return this.target[this.property];
    }

    protected abstract async processValue(filePath: any): Promise<any>;
}
