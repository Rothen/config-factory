import { WebSocketServer } from '../../src/websocket/WebSocketServer';

describe('WebSocketServer', () => {
    let webSocketServer: WebSocketServer;

    beforeEach(() => {
        webSocketServer = new WebSocketServer(1, '', '');
    });

    it('should be created', () => {
        expect(webSocketServer).toBeTruthy();
    });
});
