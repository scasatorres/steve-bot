const { helpMessages } = require('./help');

const start = (ctx, next) => {
  const messages = [
    ctx.i18n.t('messages.greeting')
  ];

  const helpTranslations = helpMessages.map((message) => ctx.i18n.t(message));
  messages.push(...helpTranslations);

  return ctx.reply(messages.join('\n'));
};

module.exports = start;