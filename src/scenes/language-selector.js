const Scene = require('telegraf/scenes/base');
const Markup = require('telegraf/markup');
const i18n = require('../utils/i18n');

const availableLocales = i18n.availableLocales();
const languageSelector = new Scene('language-selector');

languageSelector.enter((ctx, next) => {
  const message = ctx.i18n.t('messages.choose-language');
  const localesButtons = availableLocales.map((locale) => {
    const localeTranslation = ctx.i18n.t(`messages.${locale}`);
    return Markup.callbackButton(localeTranslation, locale);
  });

  return ctx.reply(message, Markup.inlineKeyboard(localesButtons).oneTime().extra());
});

languageSelector.on('callback_query', (ctx, next) => {
  const selectedLanguage = ctx.callbackQuery.data;

  ctx.i18n.locale(selectedLanguage);

  const message = ctx.i18n.t('messages.language-selected');

  ctx.reply(message);

  return ctx.scene.leave();
});

languageSelector.command('cancel', (ctx, next) => ctx.scene.leave());


module.exports = languageSelector;