import { ObjectConfigMetaData } from '../../src';

describe('Config', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const objectConfigMetaData = new ObjectConfigMetaData(null, null);
        expect(objectConfigMetaData).toBeTruthy();
    });

    // protected async processValue(filePath: string): Promise<string>
});
