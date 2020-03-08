const Stage = require('telegraf/stage');
const languageSelector = require('../scenes/language-selector');
const cancel = require('../middlewares/cancel');

const stage = new Stage([languageSelector]);
stage.command('cancel', cancel);

module.exports = stage;