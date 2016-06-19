// prompt for page
exports.prompts = [
  {
    name: 'store',
    type: 'confirm',
    message: 'Generate store & actions?'
  }
];

// answer for mod
exports.answers = function(answers, abc) {
  answers.name = answers.name.toLowerCase();
  answers.Name = answers.name.replace(/[\W_]+(.)/g, function(p, p1) {
    return p1.toUpperCase();
  }).replace(/^./, function(p) {
    return p.toUpperCase();
  });
  answers.libraries = !!abc.options.libraries;
  answers.suffix = suffixByVars(abc.options.vars, abc.options.buildvars);
  return answers;
};

// filter out files
exports.filter = function(source, data) {
  if (!data.store) {
    return !/(actions|store)\.js$/.test(source);
  }
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
