import { expect } from 'chai';
import { PortConfigMetaData } from '../../src';

describe('PortConfigMetaData', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const portConfigMetaData = new PortConfigMetaData(null, null);
        expect(portConfigMetaData).to.be.ok;
    });

    // protected async processValue(filePath: string): Promise<string>
});
