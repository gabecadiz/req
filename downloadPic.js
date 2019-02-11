var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function(err) {
         console.log("error occured:", err);
       })
       .on('response', function(response) {
         console.log('Response Status Code: ', response.statusCode);
         console.log(response.headers['content-type']);

       })
       .on('data', function(data){
          console.log("Downloading image...");
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('finish',function(){
          console.log("Download Complete")
       });

