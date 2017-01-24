var request = require('request');
for (var i = 0; i < 10; i++) {
    (function(index) {
        request('http://www.google.com', function() {
            console.log(index);
        }, i);
    })(i);
}
