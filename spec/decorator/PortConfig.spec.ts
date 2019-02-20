import { expect } from 'chai';
import { PortConfig } from '../../src';

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
        expect(mockPortConfig).to.be.ok;
    });
});
