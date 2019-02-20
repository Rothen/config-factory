import { expect } from 'chai';
import { StringConfigMetaData } from '../../src';

describe('StringConfigMetaData', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const stringConfigMetaData = new StringConfigMetaData(null, null);
        expect(stringConfigMetaData).to.be.ok;
    });

    // protected async processValue(filePath: string): Promise<string>
});
