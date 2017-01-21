var request = require('request');
for (var i = 0; i < 10; i++) {
   function makeSync(i) {
       request('http://www.google.com', function() {
           console.log(i); // 1 through 10
       })
   }
   makeSync(i)
}
