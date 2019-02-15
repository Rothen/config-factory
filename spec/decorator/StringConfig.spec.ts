import { StringConfig } from '../../src/decorator/StringConfig';

class MockStringConfig {
    @StringConfig()
    public test: string;
}

describe('StringConfig', () => {
    let mockStringConfig: MockStringConfig;

    beforeEach(() => {
        mockStringConfig = new MockStringConfig();
    });

    it('should be created', () => {
        expect(mockStringConfig).toBeTruthy();
    });
});
