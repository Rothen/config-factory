import { HostConfigMetaData } from '../../src';

describe('Config', () => {
    beforeEach(() => {
    });

    it('should be created', () => {
        const hostConfigMetaData = new HostConfigMetaData(null, null);
        expect(hostConfigMetaData).toBeTruthy();
    });

    // protected async processValue(filePath: string): Promise<string>
});
