import { expect } from 'chai';
import { ObjectConfigMetaData } from '../../src';

describe('ObjectConfigMetaData', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const objectConfigMetaData = new ObjectConfigMetaData(null, null);
        expect(objectConfigMetaData).to.be.ok;
    });

    // protected async processValue(filePath: string): Promise<string>
});
