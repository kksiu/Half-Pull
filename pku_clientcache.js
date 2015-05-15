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

var urls = 
"http://www.pku.edu.cn/img/pkuweixin.png http://www.pku.edu.cn/img/pkuyinxin.png http://www.pku.edu.cn/img/pkualumni.png http://www.pku.edu.cn/img/pkuinfosvc.png http://www.pku.edu.cn/img/pkuxinqingnian.png http://www.pku.edu.cn/img/pkubbs.png http://www.pku.edu.cn/js/responsiveslides.min.js http://www.pku.edu.cn/js/jquery.easing-1.3.js http://www.pku.edu.cn/js/jquery.iosslider.js http://www.pku.edu.cn/js/banner.js http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=397683 http://www.pku.edu.cn/files/fonts/glyphicons-halflings-regular.woff http://www.pku.edu.cn/images/bg.jpg http://www.pku.edu.cn/img/pkucloud1h100.png http://www.pku.edu.cn/images/fw_bg.jpg http://www.pku.edu.cn/_img/selector-shadow.png http://www.pku.edu.cn/img/arrow_left.png http://www.pku.edu.cn/img/arrow_right.png http://www.pku.edu.cn/images/a_bg.jpg http://www.pku.edu.cn/images/line.jpg http://www.pku.edu.cn/images/content/2015-04/20150417091745332904.jpg http://www.pku.edu.cn/images/content/2015-04/20150417110118012013.jpg http://www.pku.edu.cn/images/xs_img.jpg http://www.pku.edu.cn/images/f_bg.jpg http://www.pku.edu.cn/images/share01.png http://www.pku.edu.cn/images/share02.png http://www.pku.edu.cn/images/share08.png http://www.pku.edu.cn/images/share03.png http://www.pku.edu.cn/images/share04.png http://www.pku.edu.cn/images/share05.png http://www.pku.edu.cn/images/share06.png http://www.pku.edu.cn/images/share07.png http://www.pku.edu.cn/dat/newsLeft.xml http://www.pku.edu.cn/dat/newsCenter.xml http://www.pku.edu.cn/dat/newsRight.xml http://www.pku.edu.cn/dat/notice_num.dat http://www.pku.edu.cn/dat/newsJXKY.xml http://www.pku.edu.cn/dat/newsMTBD.xml http://www.pku.edu.cn/dat/newsRWFC.xml http://www.pku.edu.cn/dat/newsJJXY.xml http://www.pku.edu.cn/dat/newsZTWZ.xml http://www.pku.edu.cn/dat/recentList.xml http://bdimg.share.baidu.com/static/api/js/share/share_api.js?v=226108fe.js http://bdimg.share.baidu.com/static/api/js/view/share_view.js?v=3ae6026d.js http://bdimg.share.baidu.com/static/api/js/base/tangram.js?v=37768233.js http://bdimg.share.baidu.com/static/api/js/share/api_base.js http://www.pku.edu.cn/img/news/989096b2896e16b55e8a0e.JPG http://www.pku.edu.cn/img/news/2c4138b2cf3f16ba5fa008.jpg http://www.pku.edu.cn/img/news/082e5f06ea8616bceb1003.JPG http://www.pku.edu.cn/img/news/a41731fa3e5e16be3f4219.jpg http://www.pku.edu.cn/img/news/a41731fa3e5e16be89850e.jpg http://www.pku.edu.cn/img/news/90b11ca4edf916aa7c2808.jpg http://www.pku.edu.cn/img/news/90b11ca4edf916aa8a6d0d.jpg http://www.pku.edu.cn/img/news/90b11ca4edf916aa964305.jpg http://www.pku.edu.cn/img/news/90b11ca4edf916aa7b4604.jpg http://www.pku.edu.cn/img/news/002622a747ed16b15e4d04.jpg http://bdimg.share.baidu.com/static/api/js/view/view_base.js http://bdimg.share.baidu.com/static/api/js/trans/logger.js?v=4e448e64.js http://nsclick.baidu.com/v.gif?pid=307&type=3071&sign=&desturl=&linkid=i9p4fahkbgu&apitype=0 http://bdimg.share.baidu.com/static/api/css/share_style0_32.css?v=5090ac8b.css";

for (var i = 1; i <= 5; i ++) {
pullRequest("160 " + urls, "siu.email", 5300);
}
