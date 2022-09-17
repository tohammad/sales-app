const path = require('path');
const defaultConfig = require('./env/default.js');

process.env.env_type = process.env.env_type || 'local';
process.env.NODE_ENV = process.env.NODE_ENV || 'local';

const env = defaultConfig.get('env');
defaultConfig.loadFile(path.resolve(__dirname, env + '.json'));
defaultConfig.validate({ allowed: 'strict' });

module.exports.config = defaultConfig.getProperties();
