import { PathConfig } from '../../src/decorator/PathConfig';

class MockPathConfig {
    @PathConfig()
    public test: string;
}

describe('PathConfig', () => {
    let mockPathConfig: MockPathConfig;

    beforeEach(() => {
        mockPathConfig = new MockPathConfig();
    });

    it('should be created', () => {
        expect(mockPathConfig).toBeTruthy();
    });
});
