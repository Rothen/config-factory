import { FileConfigMetaData } from '../../src/meta_data/FileConfigMetaData';

describe('Config', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const fileConfigMetaData = new FileConfigMetaData(null, null, null);
        expect(fileConfigMetaData).toBeTruthy();
    });

    // protected async processValue(filePath: string): Promise<string>
});
