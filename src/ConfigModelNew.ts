import { FileConfig } from './decorator/FileConfig';
import { HostConfig } from './decorator/HostConfig';
import { PortConfig } from './decorator/PortConfig';
import { StringConfig } from './decorator/StringConfig';
import { ObjectConfig } from './decorator/ObjectConfig';

export class ConfigModelNew {
    @ObjectConfig()
    public server: ConfigServer = new ConfigServer();
    @ObjectConfig()
    public mqtt: ConfigMQTT = new ConfigMQTT();
}

export class ConfigServer {
    @HostConfig()
    public host: string = process.env.HOST || 'localhost';
    @PortConfig()
    public port: number = parseInt(process.env.HTTPS_PORT, 10) || 1081;
    @PortConfig()
    public ws_port: number = parseInt(process.env.WEBSOCKET_PORT, 10) || 1443;
    @FileConfig((serverConfig: ConfigServer) => serverConfig.certificatePath)
    public certificate: string = process.env.CERTIFICATE || './certs/server.crt';
    @FileConfig((serverConfig: ConfigServer) => serverConfig.keyContentPath)
    public key: string = process.env.KEY || './certs/server.key';
    @StringConfig()
    public test: string;

    public certificatePath: string;
    public keyContentPath: string;
}

export class ConfigMQTT {
    @HostConfig()
    public host: string = process.env.MQTT_HOST;
    @PortConfig()
    public port: number = parseInt(process.env.MQTT_PORT, 10);
    @StringConfig()
    public user: string = process.env.MQTT_USERNAME;
    @StringConfig()
    public password: string = process.env.MQTT_PASSWORD;
}
