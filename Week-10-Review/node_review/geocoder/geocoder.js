var geocoder = require('geocoder');

var nodeArgs = process.argv;

var address = "";

console.log(nodeArgs);

for (var i = 2; i < nodeArgs.length; i++) {
    address = address + " " + nodeArgs[i];
}

geocoder.geocode(address, function(err, data) {
    console.log(JSON.stringify(data, null, 2));
});

console.log(address);
