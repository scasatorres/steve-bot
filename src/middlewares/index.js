const start = require('./start');
const language = require('./language');
const cancel = require('./cancel');
const payment = require('./payment');
const { help } = require('./help');
const { serverAddress, serverMap, serverStatus } = require('./server');
const { contact } = require('./contact');

module.exports = {
  start,
  language,
  cancel,
  payment,
  help,
  serverAddress,
  serverMap,
  serverStatus,
  contact,
};