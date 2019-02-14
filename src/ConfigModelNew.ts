function Host() {
    return function (target: any, propertyKey: string) {
        // descriptor.enumerable = value;
    };
}

function Port() {
    return function (target: any, propertyKey: string) {
        const privatePropertyKey = `_${propertyKey}`;

        Object.defineProperty(target, propertyKey, {
            get: function() {
                return target[privatePropertyKey];
            },
            set: function(port) {
                if (port < 0 || port > 65535) {
                    throw new Error('Port is not ok');
                }
                target[privatePropertyKey] = port;
            }
        });
    };
}

function File() {
    return function (target: any, propertyKey: string) {
        const privatePropertyKey = `_${propertyKey}`;

        Object.defineProperty(target, propertyKey, {
            get: function() {
                return target[privatePropertyKey];
            },
            set: function(file) {
                if (file < 0 || file > 65535) {
                    throw new Error();
                }
                target[privatePropertyKey] = file;
            }
        });
    };
}

export class ConfigServer {
    @Host()
    public host: string = process.env.HOST || 'localhost';
    @Port()
    public port: number = parseInt(process.env.HTTPS_PORT, 10) || 1081;
    @Port()
    public ws_port: number = parseInt(process.env.WEBSOCKET_PORT, 10) || 1443;
    @File()
    public certificate: string = process.env.CERTIFICATE || './certs/server.crt';
    @File()
    public key: string = process.env.KEY || './certs/server.key';
    public test: string;
}

export class ConfigMQTT {
    @Host()
    public host: string = process.env.MQTT_HOST;
    @Port()
    public port: number = parseInt(process.env.MQTT_PORT, 10);
    public user: string = process.env.MQTT_USERNAME;
    public password: string = process.env.MQTT_PASSWORD;
}

export class ConfigModelNew {
    public server: ConfigServer = new ConfigServer();
    public mqtt: ConfigMQTT = new ConfigMQTT();
}
