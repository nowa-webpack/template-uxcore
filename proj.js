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

exports.filter = function (source, data) {
  var flag = true;
  if (data.SPA) {
    flag = !/demo\.html/.test(source);
  } else {
    flag = !/routes|error/.test(source);
  }
  if (flag !== false && !data.i18n) {
    flag = !/i18n/.test(source);
  }
  return flag;
};
