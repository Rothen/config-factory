import { ConfigMetaData } from '../../src/meta_data/ConfigMetaData';

class MockConfigMetaData extends ConfigMetaData {
    protected async processValue(filePath: any): Promise<any> {
        return null;
    }
}

describe('Config', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const configMetaData = new MockConfigMetaData(null, null);
        expect(configMetaData).toBeTruthy();
    });

    // public async setConfig(target: any, config: any): Promise<any>
});
