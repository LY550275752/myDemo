window.onload=function(){
	var list=document.getElementById("list");
	var lis=list.children;
	//加个定时器
	var timer;

	//写时间代理，这个项目的核心
	for(var i=0;i<lis.length;i++){
		//事件委托给li
		lis[i].onclick=function(e){
			e=e||window.event;
			var el=e.srcElement;
			switch(el.className){
				case 'close':
					removeNode(el.parentNode);
					break;
				case 'praise':
					praise(el.parentNode.parentNode.parentNode,el);
					break;
				//按钮灰色时不变样式
				case 'btn btn-off':
					clearTimeout(timer);
					break;
				//按钮发送内容
				case 'btn':
					reply(el.parentNode.parentNode.parentNode);
					break;
				//评论的赞的功能
				case 'comment-praise':
					praiseReply(el);
					break;
				//删除或回复功能
				case 'comment-operate':
					operate(el);
					break;

			}
		}
		//评论框的变化
		var textarea=lis[i].getElementsByTagName('textarea')[0];
		textarea.onfocus=function(){
			this.parentNode.className='text-box text-box-on';
			this.value=this.value=="评论.."?'':this.value;
			this.onkeyup();
		}
		textarea.onblur=function(){
			var me=this;
			if(this.value==''){
				timer=setTimeout(function(){
					me.parentNode.className='text-box';
					me.value="评论..";
				},300);
			}
		}
		textarea.onkeyup=function(){
			var len=this.value.length;
			var p=this.parentNode;
			var word=p.children[2];
			var btn=p.children[1];

			if(len==0||len>140){
				btn.className="btn btn-off";
			}else{
				btn.className="btn";
			}
			word.innerHTML=len+'/140';
		}
	}
}

//删除自身节点函数
function removeNode(node){
	node.parentNode.removeChild(node);
}
function praise(box,el){
	var praiseElement=box.getElementsByClassName('praises-total')[0];
	var oldTotal=parseInt(praiseElement.getAttribute('total'));
	var txt=el.innerHTML,
		newTotal;

	//开始判断按钮
	if(txt=="赞"){
		newTotal=oldTotal+1;
		//按钮改变文字
		el.innerHTML="取消赞";
		//判断是否等于1
		praiseElement.innerHTML=newTotal==1?"我觉得很赞":"我和"+oldTotal+"个人觉得很赞";
	}else{
		newTotal=oldTotal-1;
		el.innerHTML="赞";
		praiseElement.innerHTML=newTotal==0?'':newTotal+"个人觉得很赞";
	}
	//显示或隐藏
	praiseElement.style.display=newTotal==0?'none':'block';
	praiseElement.setAttribute('total',newTotal);
}
//回复函数
function reply(box){
	var list=box.getElementsByClassName('comment-list')[0];
	var textarea=box.getElementsByTagName('textarea')[0];
	var newDiv=document.createElement('div');
	newDiv.className="comment-box clearfix";
	newDiv.setAttribute('user','self');
	var htmlStr='<img class="myhead" src="images/my.jpg" alt=""/>'+
						'<div class="comment-content"><p class="comment-text"><span class="user">我：</span>'+textarea.value+'</p>'+
							'<p class="comment-time">'+
								getTime()+
								'<a href="javascript:;" class="comment-praise" total="0" my="0" style="">赞</a><a herf="javascript:;" class="comment-operate">删除</a></p></div>';
	newDiv.innerHTML+=htmlStr;
	list.appendChild(newDiv);
	textarea.value='';
	textarea.onblur();
}
//获取时间函数
function getTime(){
	var t=new Date();
	var Y=t.getFullYear(),
		M=t.getMonth()+1,
		d=t.getDate(),
		h=t.getHours(),
		m=t.getMinutes();
	M=M<10?'0'+M:M;
	d=d<10?'0'+d:d;
	h=h<10?'0'+h:h;
	m=m<10?'0'+m:m;
	return Y+'-'+M+'-'+d+'  '+h+':'+m;
}
//评论点赞
function praiseReply(el){
	var myPraise=parseInt(el.getAttribute('my'));
	var oldTotal=parseInt(el.getAttribute('total'));
	var newTotal;

	//如果我没赞过的话
	if(myPraise==0){
		newTotal=oldTotal+1;
		el.setAttribute('my',1);
		el.setAttribute('total',newTotal);
		el.innerHTML=newTotal+" 取消赞";
	}else{
		newTotal=oldTotal-1;
		el.setAttribute('total', newTotal);
        el.setAttribute('my', 0);
        el.innerHTML=newTotal==0?"赞":newTotal+' 赞';
	}
	el.style.display=(newTotal==0)?'':'inline-block';
}
//回复或删除
function operate(el){
	var commentBox=el.parentNode.parentNode.parentNode;
	var box=commentBox.parentNode.parentNode.parentNode;
	var txt=el.innerHTML;
	var user=commentBox.getElementsByClassName('user')[0].innerHTML;
	var textarea=box.getElementsByClassName('comment')[0];
	if(txt=="回复"){
		textarea.focus();
		textarea.value="回复"+user;
		textarea.onkeyup();
	}else{
		removeNode(commentBox);
	}
}