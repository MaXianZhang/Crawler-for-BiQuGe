"use strict";
const http = require('http');
const fs = require('fs');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');

const tUrl = 'http://www.biqukan.com/0_790/';
const unitNum = 100;  //100
const novelId = tUrl.slice(-7,-1);
let arrs = [];

function filterChapter(body){
	let num = 0;
	const arr = [];

	var $ = cheerio.load(body);
	const objs = $('.listmain');
	const as = objs.find('dd').find('a');

	for (var i = 0 ; i < 12; i++){
		Array.prototype.shift.call(as);
	}

	as.each(function (index) {
// if(index>= 0 && index <= 5){

		const th = $(this);
		const pageId = th.attr('href').slice(-13,-5);
		var childUrl = 'http://www.biqukan.com/'+ novelId +'/'+ pageId +'.html';
		arr.push(childUrl);

// }
	})
	num = arr.length;
	const len = Math.ceil(num / unitNum);
	for (let i = 0; i <= len - 1; i++){
		arrs.push(arr.splice(0,unitNum));
	}

	fs.writeFileSync('./data.txt','');
}

function requestProUrl(url){
	var faild = 0;
	return new Promise(function (resolve,reject){
		function request() {
			http.get(url, res => {
				console.log('正在爬取'+url);
				let htmlArr = [];
				res.on('data',function (data) {
					htmlArr.push(data);
				})
				res.on('end',function () {
					let buff = Buffer.concat(htmlArr);
					let	headers = res.headers;
					let charset = headers['content-type'].match(/(?:charset=)(\w+)/)[1] || 'utf8';
					const body = iconv.decode(buff, charset);
					faild = 0;
					resolve(body);
				});

			}).on('error',function (e) {
				faild++;
				if(faild == 1){
					console.log('失败了一次，继续尝试');
					request();
				}else{
					console.log('依旧失败');
					reject(e);
				}
			})
		}
		request();
		
	})

}

const handle = (body) =>{
	var len = body.length;
	for(let i = 0; i < len; i++){
		const $ = cheerio.load(body[i]);
		const title = $('.content').find('h1');
		const text1 = title.text();
		const content = $('#content');
		const text = content.text();
		const text2 = text.replace(/　　|        /g ,'\n\n    ');
		fs.writeFileSync('./data.txt',[text1,text2],{
			flag: 'a'
		});
	}	
}

function getUnit(num) {
	if (!num) {
		num = 0
	}
	return new Promise(function (resolve,reject) {
		let arr = [];
		let arrHun = arrs[num];
		arrHun.forEach(function (item) {
			arr.push(requestProUrl(item));
		})
		Promise.all(arr)
			.then(function (body) {
				handle(body);
				getUnit(++num);
				resolve(++num);
			},function (e) {
				reject(e);
				console.log(e);
			})
	})
}


requestProUrl(tUrl)
	.then(filterChapter)
	.then(getUnit)
