// prompt for proj
exports.prompts = [
  {
    name: 'SPA',
    type: 'confirm',
    message: 'Do you want SPA feature?'
  },
  {
    name: 'i18n',
    type: 'confirm',
    message: 'Do you want i18n feature?'
  }
];

// answer for mod
exports.answers = function(answers, abc) {
  answers.suffix = answers.i18n ? '-zh-cn' : '';
  return answers;
};

exports.filter = function(source, data) {
  var flag = true;
  if(!data.SPA) {
    flag = !/routes|error/.test(source);
  }
  if (flag !== false && !data.i18n) {
    flag = !/i18n/.test(source);
  }
  return flag ;
};
