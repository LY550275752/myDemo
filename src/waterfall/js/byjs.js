window.onload=function(){
	waterfall('main','box');
	var dataInt={"data":[{"src":"pic1.jpg"}]};
	window.onscroll=function(){
		if(checkScrollSlide()){
			//遍历所有的数据
			var oParent=document.getElementById("main");
			for(var i=0;i<dataInt.data.length;i++){
				//创建元素,加入父元素
				var oBox=document.createElement('div');
				oBox.className="box";
				oParent.appendChild(oBox);
				var oPic=document.createElement('div');
				oPic.className="pic";
				oBox.appendChild(oPic);
				var oImg=document.createElement('img');
				oImg.src="image/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
			//重新定位
			waterfall('main','box');
		}
	}
}

/*********瀑布化函数*********/
function waterfall(parent,box){
	//取所有box
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	//计算列数
	var oBoxsW=oBoxs[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/oBoxsW);
	//定义parent的宽
	oParent.style.cssText='width:'+cols*oBoxsW+'px;margin:0 auto;';
	var hArr=[];
	//遍历oBoxs，定义样式
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			//获取列高最小值和索引
			var minH=Math.min.apply(null,hArr);

			var index=getminHindex(hArr,minH);
			oBoxs[i].style.position="absolute";
			oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
			oBoxs[i].style.top=minH+'px';
			hArr[index]+=oBoxs[i].offsetHeight;
		}
	}
}
/*******由class取元素********/
function getByClass(parent,clsName){
	var boxArr=[];
	var oElement=parent.getElementsByTagName('*');
	for(var i=0;i<oElement.length;i++){
		if(oElement[i].className==clsName){
			boxArr.push(oElement[i]);
		}
	}
	return boxArr;
}

/********获取索引函数*******/

function getminHindex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}
/*********判断滚动条件函数**********/
function checkScrollSlide(){
	var oParent=document.getElementById('main');
	var oBoxs=getByClass(oParent,'box');
	//获取最后一个box中部和顶部的距离
	var lastBox=oBoxs[oBoxs.length-1];
	var lastBoxH=lastBox.offsetTop+Math.floor(lastBox.offsetHeight/2);
	//获取页面底部的高度
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var height=document.body.scrollTop||document.documentElement.scrollTop;
	return (lastBoxH<scrollTop+height-200)?true:false;
}
