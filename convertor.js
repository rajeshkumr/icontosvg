var potrace = require('potrace');
var fs = require('fs');
var util = require('util');
var promisifyReadFile = util.promisify(fs.readFile);
var promisifyPotrace = util.promisify(potrace.trace);

function convertor(filepath) {
  try {
    return promisifyReadFile(filepath).then(function() {
      return promisifyPotrace(filepath);
    }).catch(function(err){
      throw err;
    })
    } catch (err) {
      throw err;
    }
    
}

module.exports = convertor;
