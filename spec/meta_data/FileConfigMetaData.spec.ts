import { expect } from 'chai';
import { FileConfigMetaData } from '../../src';

describe('FileConfigMetaData', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const fileConfigMetaData = new FileConfigMetaData(null, null, null);
        expect(fileConfigMetaData).to.be.ok;
    });

    // protected async processValue(filePath: string): Promise<string>
});
