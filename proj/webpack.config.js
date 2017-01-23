/* eslint-disable */
'use strict';

module.exports = (config) => {
  if (process.argv[2] == 'server') {
    config.externals = [
      {
        lie: 'window.Promise',
        'natty-fetch': 'window.nattyFetch',
        react: 'window.React',
        'react-dom': 'window.ReactDOM || window.React',
        'react-router': 'window.ReactRouter',
        reflux: 'window.Reflux',
      },
      (context, request, callback, matches) => {
        if (/uxcore\/assets\//.test(request)) {
          callback(null, '0');
        } else if (matches = /uxcore\/lib\/(\w+)/.exec(request)) {
          callback(null, `window.Uxcore.${matches[1]}`);
        } else if (matches = /react\-addons((\-\w+)+)/.exec(request)) {
          const addon = matches[1].replace(/\-((\w)(\w+))/g, (p, p1, p2, p3) =>
            (!/^(css|dom|umd)$/.test(p1) ? p2.toUpperCase() + p3 : p1.toUpperCase())
          );
          callback(null, `window.React.addons.${addon}`);
        } else {
          callback();
        }
      },
    ];
  } else {
    delete config.externals;
  }
};
