import { PortConfig } from '../../src/decorator/PortConfig';

class MockPortConfig {
    @PortConfig()
    public test: string;
}

describe('PortConfig', () => {
    let mockPortConfig: MockPortConfig;

    beforeEach(() => {
        mockPortConfig = new MockPortConfig();
    });

    it('should be created', () => {
        expect(mockPortConfig).toBeTruthy();
    });
});