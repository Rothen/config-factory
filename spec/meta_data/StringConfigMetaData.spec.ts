import { StringConfigMetaData } from '../../src';

describe('Config', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const stringConfigMetaData = new StringConfigMetaData(null, null);
        expect(stringConfigMetaData).toBeTruthy();
    });

    // protected async processValue(filePath: string): Promise<string>
});
