const Stage = require('telegraf/stage');
const { leave } = Stage;

const cancel = (ctx, next) => {
  const message = ctx.i18n.t('messages.cancel');
  ctx.reply(message);

  return leave();
};

module.exports = cancel;