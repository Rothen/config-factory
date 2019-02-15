import { ConfigFactory } from './ConfigFactory';
import { ConfigModelNew } from './ConfigModelNew';

async function main() {
    console.log(await ConfigFactory.load(ConfigModelNew));
}

main();


