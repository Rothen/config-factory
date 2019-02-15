import { FileConfig } from '../../src/decorator/FileConfig';

class MockFileConfig {
    @FileConfig('some/path')
    public test: string;
}

describe('FileConfig', () => {
    let mockFileConfig: MockFileConfig;

    beforeEach(() => {
        mockFileConfig = new MockFileConfig();
    });

    it('should be created', () => {
        expect(mockFileConfig).toBeTruthy();
    });
});
