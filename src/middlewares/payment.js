const Markup = require('telegraf/markup');
const Extra = require('telegraf/extra');

const payment = (ctx, next) => {
  const { PAYMENT_URL } = process.env;
  const messages = [
    ctx.i18n.t('messages.payment-url')
  ];
  const paymentButtonText = ctx.i18n.t('messages.pay');

  return ctx.replyWithMarkdown(messages.join('\n'), Extra.markup(
    Markup.inlineKeyboard([
      Markup.urlButton(paymentButtonText, PAYMENT_URL)
    ])
  ));
};

module.exports = payment;