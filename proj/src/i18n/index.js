const lang = require(`./${locale}`);
const i18nHelper = require('i18n-helper')(lang);

if (__LOCAL__) {
  i18nHelper.keyNotFound = (key) => `【\`${key}\` is not found!】`;
}

module.exports = i18nHelper;
