var xlsx = require('node-xlsx');

module.exports = function (text) {

  this.cacheable();

  return 'module.exports = ' + JSON.stringify(xlsx.parse(text));
};
