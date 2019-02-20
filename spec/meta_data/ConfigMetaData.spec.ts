import { expect } from 'chai';
import { ConfigMetaData } from '../../src';

class MockConfigMetaData extends ConfigMetaData {
    protected async processValue(filePath: any): Promise<any> {
        return null;
    }
}

describe('ConfigMetaData', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const configMetaData = new MockConfigMetaData(null, null);
        expect(configMetaData).to.be.ok;
    });

    // public async setConfig(target: any, config: any): Promise<any>
});
