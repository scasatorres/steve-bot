const Markup = require('telegraf/markup');
const Extra = require('telegraf/extra');

const { SERVER_ADMIN_TELEGRAM_USERNAME, ALT_SERVER_ADMIN_TELEGRAM_USERNAME } = process.env;

const contactButtons = Extra.markup(
  Markup.inlineKeyboard([
    Markup.urlButton(SERVER_ADMIN_TELEGRAM_USERNAME, `https://t.me/${SERVER_ADMIN_TELEGRAM_USERNAME}`),
    Markup.urlButton(ALT_SERVER_ADMIN_TELEGRAM_USERNAME, `https://t.me/${ALT_SERVER_ADMIN_TELEGRAM_USERNAME}`),
  ])
);

const contact = (ctx, next) => {
  const message = ctx.i18n.t('messages.contact-us');

  return ctx.reply(message, contactButtons);
};

module.exports = {
  contact,
  contactButtons
};