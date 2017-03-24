var xlsx = require('node-xlsx');

module.exports = function(content) {

  this.cacheable && this.cacheable();

  return 'module.exports = ' + JSON.stringify(xlsx.parse(content));

};

module.exports.raw = true;