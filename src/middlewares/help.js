const helpMessages = [
  'messages.help',
  'commands.help',
  'commands.changelanguage',
  'commands.getserveraddress',
  'commands.getservermap',
  'commands.getserverstatus',
  'commands.getpaymenturl',
  'commands.contactus',
];

const help = (ctx, next) => {
  const messages = helpMessages.map((message) => ctx.i18n.t(message));

  return ctx.reply(messages.join('\n'));
};

module.exports = {
  help,
  helpMessages
};