var dgram = require('dgram');

function pullRequest(url, host, port) {
	var message = new Buffer("Pull " + url);
	
	var client = dgram.createSocket('udp4');
	client.send(message, 0, message.length, port, host, function(err, bytes) {
		if (err) console.log(err);
		console.log('UDP message sent to ' + host + ":" + port);
		client.close();
	});
}

pullRequest("60 http://www.baidu.com/ http://www.cs.wisc.edu/sites/default/files/social/givenow.png", "siu.email", 5300);
