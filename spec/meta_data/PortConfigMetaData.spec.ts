import { PortConfigMetaData } from '../../src/meta_data/PortConfigMetaData';

describe('Config', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const portConfigMetaData = new PortConfigMetaData(null, null);
        expect(portConfigMetaData).toBeTruthy();
    });

    // protected async processValue(filePath: string): Promise<string>
});
