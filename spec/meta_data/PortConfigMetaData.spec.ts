import { PortConfigMetaData } from '../../src';

describe('Config', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const portConfigMetaData = new PortConfigMetaData(null, null);
        expect(portConfigMetaData).toBeTruthy();
    });

    // protected async processValue(filePath: string): Promise<string>
});
