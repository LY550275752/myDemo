;(function($){
	var LightBox=function(){
		var self=this;
		//创建遮罩
		this.popupMask=$('<div id="G-lightbox-mask">');
		this.popupWin=$('<div id="G-lightbox-popup">');

		//保存body
		this.bodyNode=$(document.body);
		
		//渲染剩余的dom，并加载到body中
		this.renderDOM();
		
		//获取各对象
		this.picViewArea=this.popupWin.find("div.lightbox-pic-view");//图片预览区域
		this.popupPic   =this.popupWin.find("img.lightbox-image");//图片
		this.picCaptionArea=this.popupWin.find("div.lightbox-pic-caption");//图片标题区域
		this.nextBtn 	=this.popupWin.find("span.lightbox-next-btn");//下一张按钮
		this.prevBtn 	=this.popupWin.find("span.lightbox-prev-btn");//上一张按钮
		this.captionText=this.popupWin.find("p.lightbox-pic-desc");//图片标题内容
		this.currentIndex =this.popupWin.find("span.lightbox-of-index");//当前图片ID
		this.closeBtn   =this.popupWin.find("span.lightbox-close-btn");//关闭按钮	

		this.groupName=null;
		this.groupData=[];
		
		//准备开发,把点击事件委托给body
		this.bodyNode.delegate(".js-lightbox,*[data-role=lightbox]","click",function(e){
			//阻止事件冒泡,到document
			e.stopPropagation();

			//获取当前target的组别,这时候this是这个被点击的对象
			var currentGroupName=$(this).attr("data-group");

			//判断是否获取过,self为LightBox
			if(currentGroupName!=self.groupName){
				self.groupName=currentGroupName;
				//获取当前组名的数据
				self.getgroup();
			}

		//初始化弹框,this把当前点击的图片对象传过去
		self.initPopup($(this));		
		});

		//关闭功能实现
		this.popupMask.click(function(){
			$(this).fadeOut();
			self.popupWin.fadeOut();
		});
		this.closeBtn.click(function(){
			self.popupMask.fadeOut();
			self.popupWin.fadeOut();
		});

		//上下切换按钮显现
		this.flag=true;
		this.nextBtn.hover(function(){
			if(!$(this).hasClass("disabled")&&self.groupData.length>1){
				$(this).addClass("lightbox-next-btn-show");
			}
		},function(){
			if(!$(this).hasClass("disabled")&&self.groupData.length>1){
				$(this).removeClass("lightbox-next-btn-show");
			}
		}).click(function(e){
			//判断是不是能用的
			if(!$(this).hasClass("disabled")&&self.flag){
				e.stopPropagation();
				self.goto("next");
			}
		});
		this.prevBtn.hover(function(){
			if(!$(this).hasClass("disabled")&&self.groupData.length>1){
				$(this).addClass("lightbox-prev-btn-show");
			}
		},function(){
			if(!$(this).hasClass("disabled")&&self.groupData.length>1){
				$(this).removeClass("lightbox-prev-btn-show");
			}
		}).click(function(e){
			if(!$(this).hasClass("disabled")&&self.flag){
				e.stopPropagation();
				self.goto("prev");
			}
		});
	};
	LightBox.prototype={
		//渲染dom结构
		renderDOM:function(){
			var strDOM='<div class="lightbox-pic-view">'+
				'<span class="lightbox-btn lightbox-prev-btn"></span>'+
				'<img class="lightbox-image" src="" >'+
				'<span class="lightbox-btn lightbox-next-btn"></span>'+
			'</div>'+
			'<div class="lightbox-pic-caption">'+
				'<div class="lightbox-caption-area">'+
					'<p class="lightbox-pic-desc"></p>'+
					'<span class="lightbox-of-index">当前索引:0 of 0</span>'+
				'</div>'+
				'<span class="lightbox-close-btn"></span>'+
			'</div>';

			//插入到this.popupWin
			this.popupWin.html(strDOM);

			//遮罩和弹出层全部加到body
			this.bodyNode.append(this.popupMask,this.popupWin);
		},
		//获取同组图片信息函数
		getgroup:function(){
			
			//防止对象漂移，不然self默认是window对象
			var self=this;
			//先把这个组的对象都找出来,这里的this是LightBox,*是选择器
			var groupList=this.bodyNode.find("*[data-group="+this.groupName+"]");

			//遍历获取每个对象属性
			self.groupData.length = 0;
			groupList.each(function(){
				//self为LightBox
				self.groupData.push({
					//这里的this为遍历得到的单个对象
					src:$(this).attr("data-source"),
					id:$(this).attr("data-id"),
					caption:$(this).attr("data-caption")
				});
			});
		},
		//初始化弹出层函数
		initPopup:function(currentObj){
			//防止对象漂移
			var self=this;
			//获取当前图片的路径和ID，传给show函数
			var sourceSrc=currentObj.attr("data-source"),
				currentId=currentObj.attr("data-id");
			//this为lightbox
			console.log(sourceSrc);
			this.showMaskAndPopup(sourceSrc,currentId);
		},
		//展现弹出层
		showMaskAndPopup:function(sourceSrc,currentId){
			var self=this;
			
			//没图片时都先隐藏起来
			this.popupPic.hide();
			this.picCaptionArea.hide();
			
			//遮罩层先出来
			this.popupMask.fadeIn();

			var winHeight=$(window).height(),
				winWidth=$(window).width();

			var viewHeight=winHeight/2+10,
				viewWidth=winWidth/2+10;
			this.picViewArea.css({
						width:winWidth/2,
						height:winHeight/2,
			});

			//弹出层出来
			this.popupWin.fadeIn();
			this.popupWin.css({
						width:viewWidth,
						height:viewHeight,
						marginLeft:-(viewWidth/2),
						top:-viewHeight
						}).animate({
							top:viewHeight/2
							},function(){
								//回调函数
								self.loadPicSize(sourceSrc);
							});

			//根据当前点击的ID获取当前组别里面的索引
			//把当前图片的ID传进去
			this.index=this.getIndexOf(currentId);

			//得到索引后开始判断
			var groupDataLength=this.groupData.length;
			if(groupDataLength>1){
				//如果为第一张
				if(this.index===0){
					this.nextBtn.removeClass("disabled");
					this.prevBtn.addClass("disabled");
				//如果为最后一张
				}else if(this.index===groupDataLength-1){
					this.nextBtn.addClass("disabled");
					this.prevBtn.removeClass("disbaled");
				}else{
					this.nextBtn.removeClass("disabled");
					this.prevBtn.removeClass("disabled");
				}
			}
		},
		//得到索引
		getIndexOf:function(currentId){
			var index=0;

			$(this.groupData).each(function(i){
				index=i;
				//这里的this为遍历的单个对象
				if(this.id===currentId){
					return false;
				}
			});
			return index;
		},
		//加载图片得到尺寸
		loadPicSize:function(sourceSrc){
			var self=this;
			this.popupPic.css({width:"auto",height:"auto"}).hide();
			this.preloadImg(sourceSrc,function(){
				//把路径传过去，获取宽高
				self.popupPic.attr("src",sourceSrc);
				var picWidth=self.popupPic.width(),
					picHeight=self.popupPic.height();

				//改变Pic宽高
				self.changePic(picWidth,picHeight);
				
			});
		},
		changePic:function(width,height){
			var self=this;
			
			//弹出层宽高
			var winWidth=$(window).width(),
				winHeight=$(window).height();
			//宽高过滤，保证都在窗口内
			var scale=Math.min(winWidth/(width+10),winHeight/(height+10),1);
			width=width*scale;
			height=height*scale;
			//改变图片区域宽高
			self.picViewArea.animate({
					width:width-10,
					height:height-10
			});

			//修改图片宽高并显示
			self.popupWin.animate({
							width:width,
							height:height,
							marginLeft:-width/2,
							top:(winHeight-height)/2
			},function(){
				self.popupPic.css({
								width:width-10,
								height:height-10
								}).fadeIn();
								self.picCaptionArea.fadeIn();
				self.flag=true;
			});
			//设置文字和索引
			this.captionText.text(this.groupData[this.index].caption);
			this.currentIndex.text("当前索引： "+(this.index+1)+" of "+this.groupData.length);
		},
		//图片预加载
		preloadImg:function(src,callback){
			var img=new Image();
			//为了兼容IE，两个判断方法
			if(!!window.ActiveXobjecct){
				img.onreadystatechange=function(){
					if(this.readystate=='complete'){
						callback();
					}
				}
			}else{
				img.onload=function(){
					callback();
				}
			};
			img.src=src;
		},
		//上下切换实现
		goto:function(dir){
			if(dir==="next"){
				//把当前id先加1
				this.index++;
				console.log(this.index);
				//判断位置
				if(this.index>=this.groupData.length-1){
					//是最后一个
					this.nextBtn.addClass("disabled").removeClass("lightbox-next-btn-show");
				};
				if(this.index!=0){
					//变动后index部位0的话，就要把上一张按钮加上disabled
					this.prevBtn.removeClass("disabled");
				};
				var src=this.groupData[this.index].src;
				this.loadPicSize(src);
			}else if(dir==="prev"){
				//把id先减1
				this.index--;
				if(this.index==0){
					this.prevBtn.addClass("disabled").removeClass("lightbox-prev-btn-show");
				};
				if(this.index!=this.groupData.length-1){
					this.nextBtn.removeClass("disabled");
				}
				var src=this.groupData[this.index].src;
				this.loadPicSize(src);
			}
		}
	};
	window["LightBox"]=LightBox;
})(jQuery);