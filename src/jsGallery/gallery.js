
//3.取dom对象通用函数
function g(selector){
	var method=selector.substr(0,1)=="."?'getElementsByClassName':'getElementById';
	return document[method](selector.substr(1));
}
//1.翻转
function turn(ele){
	var cls=ele.className;
	//分割字符串
	var index=ele.id.split('_')[1];
	if(!/photo-center/.test(cls)){
		return arrange(index);
	}
	if(/photo-front/.test(cls)){
		cls=cls.replace(/photo-front/,"photo-back");
		g('#nav_'+index).className+=" i-back";
	}else{
		cls=cls.replace(/photo-back/,"photo-front");
		g('#nav_'+index).className=g('#nav_'+index).className.replace(/i-back/,'');
	}
	return ele.className=cls;
}
//4.输入内容
var data=data;
function addPhotos(){
	var template=g("#wrap").innerHTML;
	var html=[];
	var nav=[];
	for(var i in data){
		var _html=template.replace(/{{index}}/,i)
							.replace(/{{img}}/,data[i].fillName)
							.replace(/{{title}}/,data[i].title)
							.replace(/{{desc}}/,data[i].desc);
		html.push(_html);
		nav.push('<span id="nav_'+i+'" onclick="turn(g(\'#photo_'+i+'\'))" class="i"></span>');
	}
	html.push('<div class="nav">'+nav.join("")+'</div>');
	g("#wrap").innerHTML=html.join('');
	arrange(rangeRandom([0,14]))
}
addPhotos();
//5.安排photo的位置
function arrange(center){
	console.log(center);
	var ranges=range();
	var _photos=g(".photo");
	var photos=[];
	//变成真的数组,还有把中心类名去掉
	for(var i=0;i<_photos.length;i++){
		_photos[i].className=_photos[i].className.replace(/\s*photo-center\s*/,'');
		_photos[i].className='photo photo-front';
		_photos[i].style.left="";
		_photos[i].style.top="";
		_photos[i].style["transform"]='rotate(0deg)';
		photos.push(_photos[i]);
	}
	var photoCenter=g('#photo_'+center);
	//定位中间图片
	photoCenter.style.left=ranges.center.x+'px';
	photoCenter.style.top=ranges.center.y+"px";
	photoCenter.className+=" photo-center";
	photos.splice(center,1)[0];
	//定位左右图片
	for(var i=0,k=photos.length/2;i<photos.length;i++){
		var ROLRange=null;
		if(i<k){
			ROLRange=ranges.side.leftX;
		}else{
			ROLRange=ranges.side.rightX;
		}
		photos[i].style.left=Math.floor(rangeRandom(ROLRange))+'px';
		photos[i].style.top=Math.floor(rangeRandom(ranges.side.y))+'px';
		photos[i].style['transform']='rotate('+Math.floor(rangeRandom(ranges.rotate))+'deg)';
	}
	//处理控制按钮
	//先还原状态
	var navs=g('.i');
	for(var i=0;i<navs.length;i++){
		navs[i].className=navs[i].className.replace(/i-current/,'');
		navs[i].className=navs[i].className.replace(/i-back/,'');
	}
	g('#nav_'+center).className+=" i-current";
}
//6.计算分区位置范围
function range(){
	var pos={
		side:{
			leftX:[0,0],
			rightX:[0,0],
			y:[0,0]
		},
		center:{
			x:0,
			y:0
		},
		rotate:[-30,30]
	}
	var wrapW=g('#wrap').clientWidth,
		wrapH=g('#wrap').clientHeight;
	var photoW=g('.photo')[0].clientWidth,
		halfPhotoW=photoW/2,
		photoH=g('.photo')[0].clientHeight;
	pos.side.leftX[0]=-halfPhotoW;
	pos.side.leftX[1]=wrapW/2-halfPhotoW*3;
	pos.side.rightX[0]=wrapW/2+halfPhotoW;
	pos.side.rightX[1]=wrapW-halfPhotoW;
	pos.side.y[0]=-photoH/2;
	pos.side.y[1]=wrapH-photoH/2;
	pos.center.x=wrapW/2-halfPhotoW;
	pos.center.y=wrapH/2-photoH/2;
	return pos;
}
//7.区域内随机取值
function rangeRandom(ran){
	var max=Math.max(ran[0],ran[1]);
	var min=Math.min(ran[0],ran[1]);
	diff=max-min;
	var result=Math.floor(Math.random()*diff+min);
	return result;
}