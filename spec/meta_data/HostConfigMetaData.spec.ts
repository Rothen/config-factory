import { expect } from 'chai';
import { HostConfigMetaData } from '../../src';

describe('HostConfigMetaData', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const hostConfigMetaData = new HostConfigMetaData(null, null);
        expect(hostConfigMetaData).to.be.ok;
    });

    // protected async processValue(filePath: string): Promise<string>
});
