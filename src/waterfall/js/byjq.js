$(window).on('load',function(){
	waterfall();
	var dataInt={"data":[{"src":"img1.jpg"}]};
	$(window).on('scroll',function(){
		if(checkScrollSlide()){
			$.each(dataInt.data,function(key,value){
				var oBox=$('<div>').addClass("box").appendTo($("#main"));
				var oPic=$('<div>').addClass("pic").appendTo($(oBox));
				$('<img>').attr("src","image/"+$(value).attr("src")).appendTo($(oPic));
			});
			waterfall();
		}
	});
})

function waterfall(){
	var Boxs=$("#main>div");
	var w=Boxs.eq(0).outerWidth();
	var cols=Math.floor($(window).width()/w);
	$("#main").width(cols*w).css("margin","0 auto");
	var hArr=[];
	console.log(Boxs.eq(2).offsetLeft);
	Boxs.each(function(index,value){
		var h=Boxs.eq(index).outerHeight();
		if(index<cols){
			hArr[index]=h;
		}else{
			var minH=Math.min.apply(null,hArr);
			var minHIndex=$.inArray(minH,hArr);
			console.log(minHIndex*w);
			$(value).css({
				"position":"absolute",
				"top":minH+'px',
				"left":minHIndex*w+'px'
			});
			hArr[minHIndex]+=h;
		}
		
	});
};

/******判断滚动距离函数********/
function checkScrollSlide(){
	var $lastBox=$("#main>div").last();
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop=$(window).scrollTop();
	var documentH=$(window).height();
	return (lastBoxDis<scrollTop+documentH)?true:false;
}


