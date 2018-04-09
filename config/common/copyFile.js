// 知识点补充
// js/app.js  指具体的文件名
// js/*.js  指js 目录下后缀名为js的文件
// js/**/*.js 某个目录及子目录中的所有后缀名为js 的文件
// !js/app.js  除了js/app.js以外所有的文件
//  *.+(js|css): 匹配项目跟目录，所有后缀名为js  css 的文件

//  流 stream 管道 pipe 
//  如果想在读取流和写入流的时候做完全控制，可以使用数据事件。对于单纯的文件复制，读取流和写入流可以通过管道来传输数据

/*
*复制目录中的所有文件包括子目录
*@src param{ String } 需要复制的目录   例 images 或者 ./images/
* @dst param{ String } 复制到指定的目录    例 images images/
*/ 


const fs = require('fs');
const path = require('path');
/*获取当前目录绝对路径，这里的 resolve()不用传参数*/
const filePath = path.resolve();


const copy = function (src, dist) {
	// 判断文件需要时间，则必须同步
	if(fs.existsSync(src)){
		fs.readdir(src, function(err, files){
			if(err){console.log(err); return;}
			files.forEach(function(filename){
				// url + '/' + filename不能直接用/直接连接，Unix系统是'/'，WINDOWS是'\'
				var url = path.join(src, filename),
				    dest = path.join(dist, filename);
				console.log(url);
				console.log(dest);
				fs.stat(path.join(src, filename), function(err, stats){
					if(err) throw err;
					// 是文件
					if(stats.isFile()){
						// 创建读取流
						readable = fs.createReadStream(url);
						// 创建写入流
						writable = fs.createWriteStream(dest, {encoding: 'utf8'});
						// 通过管道来传输流
						readable.pipe(writable);
					}else if(stats.isDirectory()) {
						// 如果是目录
						exists(url, dest, copy);
					}
				})
			})
		})
	}else {
		console.log('给定的目录不存在， 读取不到文件');
		return;
	}
}

function exists(url, dest, callback) {
	fs.exists(dest, function(exists){
		if(exists){
			callback && callback(url, dest);
		}else{
			fs.mkdir(dest, 0777, function(err){
				if(err){
					throw err;
				}
				callback && callback(url, dest);
			})
		}
	})
}


module.exports = copy;