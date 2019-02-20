import { expect } from 'chai';
import { StringConfig } from '../../src';

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
        expect(mockStringConfig).to.be.ok;
    });
});
