const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');
const ping = require('ping');
const { contactButtons } = require('./contact');

const serverAddress = (ctx, next) => {
  const messages = [
    ctx.i18n.t('messages.server-address'),
    process.env.SERVER_ADDRESS
  ];

  return ctx.reply(messages.join('\n'));
};

const serverMap = (ctx, next) => {
  const { PROTOCOL, SERVER_ADDRESS, MAP_PATH, MAP_PORT } = process.env;
  const messages = [
    ctx.i18n.t('messages.server-map')
  ];

  return ctx.reply(messages.join('\n'), Extra.markup(
    Markup.inlineKeyboard([
      Markup.urlButton(ctx.i18n.t('messages.map'), `${PROTOCOL}://${SERVER_ADDRESS}${MAP_PATH}:${MAP_PORT}`)
    ])
  ));
};

const serverStatus = async (ctx, next) => {
  const { PROTOCOL, SERVER_ADDRESS } = process.env;

  const onlineMessage = ctx.i18n.t('messages.server-status-online');
  const offlineMessage = ctx.i18n.t('messages.server-status-offline');
  const offlineProblemMessage = ctx.i18n.t('messages.server-status-problem');
  const contactUsMessage = ctx.i18n.t('messages.contact-us');
  const messages = [
    ctx.i18n.t('messages.server-status'),
  ];

  const response = await ping.promise.probe(`${PROTOCOL}://${SERVER_ADDRESS}`, {
    timeout: 20,
    extra: ["-i 2"],
  });

  if (!response.alive) {
    messages.push(offlineMessage);
    messages.push(offlineProblemMessage);
    messages.push(contactUsMessage);

    return ctx.reply(messages.join('\n'), contactButtons);
  }

  messages.push(onlineMessage);

  return ctx.reply(messages.join('\n'));
};

module.exports = {
  serverAddress,
  serverMap,
  serverStatus
};