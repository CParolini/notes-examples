var request = require('request');

for(var i = 0; i < 10; i++){
  request('http://www.google.com', function(){
      console.log(i); // 1 through 10
  })
}
