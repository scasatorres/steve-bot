const Telegraf = require('telegraf');
const session = require('telegraf/session');
const stage = require('./utils/stage');
const i18n = require('./utils/i18n');
const {
  start,
  help,
  language,
  serverAddress,
  serverMap,
  serverStatus,
  payment,
  contact,
} = require('./middlewares/index');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(session());
bot.use(i18n.middleware());
bot.use(stage.middleware());

bot.command('start', start);

bot.command('help', help);

bot.command('changelanguage', language);

bot.command('getserveraddress', serverAddress);
bot.command('getservermap', serverMap);
bot.command('getserverstatus', serverStatus);

bot.command('getpaymenturl', payment);

bot.command('contactus', contact);

module.exports = bot;