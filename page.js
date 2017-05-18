// prompt for page
exports.prompts = [{
  name: 'logic',
  type: 'confirm',
  message: 'Use refast flux?'
}];

// answer for mod
exports.answers = function (answers, abc) {
  answers.name = answers.name.toLowerCase();
  answers.Name = answers.name.replace(/[\W_]+(.)/g, function (p, p1) {
    return p1.toUpperCase();
  }).replace(/^./, function (p) {
    return p.toUpperCase();
  });
  var options = abc.options || {};
  var vars = options.vars || {};
  var buildvars = options.buildvars || {};
  answers.i18n = !!vars.locale;
  answers.suffix = suffixByVars(vars, buildvars);
  answers.SPA = !options.pages;
  return answers;
};

// filter out files
exports.filter = function (source, data) {
  var flag = true;
  if (data.SPA) {
    flag = !/\.html$/.test(source);
  }
  if (flag !== false && !data.logic) {
    flag = !/logic\.js$/.test(source);
  }
  return flag;
};

// make filename suffix by vars
function suffixByVars(vars, buildvars) {
  if (vars) {
    var suffix = '';
    for (var key in vars) {
      var value = vars[key];

      // filename suffix will not contain `/`
      if (value !== undefined && buildvars && buildvars[key] && buildvars[key].length > 1) {
        suffix += '-' + value.toString().replace(/\//, '');
      }
    }
    return suffix;
  } else {
    return '';
  }
}
