import {readFileSync} from 'fs';

const env = process.env.NODE_ENV || 'development';

let configFileBasename = 'config';
if (env === 'test') {
	configFileBasename = 'test/config';
}

const configContents = readFileSync(`${configFileBasename}.json`);
const config = JSON.parse(configContents);

export default config;
