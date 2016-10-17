// prompt for proj
exports.prompts = [
  {
    name: 'library',
    type: 'confirm',
    message: 'Generate a customized UI library?',
    default: false,
  },
  {
    name: 'i18n',
    type: 'confirm',
    message: 'Do you want i18n feature?'
  }
];

exports.filter = function(source, data) {
  if (!data.i18n) {
    return !/i18n/.test(source);
  }
};
