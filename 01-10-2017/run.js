// Grabs the band variables
var x = require('./bands.js');


var xList = x.bands;

for (var key in xList) {
  console.log('A ' + key + ' band is ' + xList[key] + '.');
}
