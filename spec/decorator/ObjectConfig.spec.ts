import { ObjectConfig } from '../../src/decorator/ObjectConfig';

class MockObjectConfig {
    @ObjectConfig()
    public test: string;
}

describe('ObjectConfig', () => {
    let mockObjectConfig: MockObjectConfig;

    beforeEach(() => {
        mockObjectConfig = new MockObjectConfig();
    });

    it('should be created', () => {
        expect(mockObjectConfig).toBeTruthy();
    });
});