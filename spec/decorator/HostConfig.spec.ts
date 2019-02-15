import { HostConfig } from '../../src';

class MockHostConfig {
    @HostConfig()
    public test: string;
}

describe('HostConfig', () => {
    let mockHostConfig: MockHostConfig;

    beforeEach(() => {
        mockHostConfig = new MockHostConfig();
    });

    it('should be created', () => {
        expect(mockHostConfig).toBeTruthy();
    });
});
