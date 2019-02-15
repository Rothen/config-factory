import { FileConfigMetaData } from '../../src';

describe('Config', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const fileConfigMetaData = new FileConfigMetaData(null, null, null);
        expect(fileConfigMetaData).toBeTruthy();
    });

    // protected async processValue(filePath: string): Promise<string>
});
