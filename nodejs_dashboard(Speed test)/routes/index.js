var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodejs Dashboard' });
});

router.get('/hello',(req, res,next)=>{
	//res.send("hello");
	var data_data=[];
	var ip_addr = require('dns').lookup(require('os').hostname(), function (err, add, fam) {
		//res.locals.ip = add;
		data_data.push(add)
  	})
  	//for public IP
  	var http = require('http');
    http.get('http://bot.whatismyipaddress.com', function(res){
	    res.setEncoding('utf8');
	    res.on('data', function(chunk){
	        data_data.push(chunk);
	    });
    });

    //for speed test
    var speed_test=0;
    // require('speedtest-net')().on('downloadspeed', speed => {
    //   console.log('Download speed:', (speed * 125).toFixed(2), 'KB/s');
    //   speed_test=(speed * 125).toFixed(2);
    //   data_data.push((speed * 125).toFixed(2));
    // });
    const speedTest = require('speedtest-net');
	const test = speedTest({maxTime: 5000});
	test.on('data', data => {
	  console.dir(data);
	  speed_test=data['speeds']['download'];
	  console.log(speed_test);
	  data_data.push(data);
	});

    //render files
	var renderFiles = setInterval(function(){
		if(speed_test>0){
			res.render('hello.pug',{data_data:data_data});
			clearInterval(renderFiles);
		}
		
	},2000);
});




module.exports = router;



// var http = require('http');
//     http.get('http://bot.whatismyipaddress.com', function(res){
//     res.setEncoding('utf8');
//     res.on('data', function(chunk){
//         console.log(chunk);
//         res.render('hello',{ public_ip:chunk });
//     });
//     });