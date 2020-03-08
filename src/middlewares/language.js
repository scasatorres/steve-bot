const language = (ctx, next) => {
  return ctx.scene.enter('language-selector');
};

module.exports = language;