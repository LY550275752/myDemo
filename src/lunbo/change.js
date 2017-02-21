
//1.定义模拟数据，实际上应由后台取出
var data=[
		{img:1,h2:"one",h3:"第一个"},
		{img:2,h2:"two",h3:"第二个"},
		{img:3,h2:"three",h3:"第三个"},
		{img:4,h2:"four",h3:"第四个"},
		{img:5,h2:"five",h3:"第五个"},
		{img:6,h2:"six",h3:"第六个"},
		{img:7,h2:"seven",h3:"第七个"}
	];
//2.取DOM的通用函数
var g=function (id){
	if(id.substr(0,1)=="."){
		return document.getElementsByClassName(id.substr(1));
	}else{
		return document.getElementById(id);
	}
}
//3.取模板，加到html里去

function addSliders(){
	//3.1获取模板
	var tpl_main=g("template_main").innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
	var tpl_ctrl=g("template_ctrl").innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
	//3.2定义两个变量，最终输出的
	var out_main=[];
	var out_ctrl=[];
	//3.3遍历data,构建最终输出的html
	for(var i in data){
		var _html_main=tpl_main.replace(/{{index}}/g,data[i].img)
							   .replace(/{{h2}}/g,data[i].h2)
							   .replace(/{{h3}}/g,data[i].h3);
		var _html_ctrl=tpl_ctrl.replace(/{{index}}/g,data[i].img);
		out_main.push(_html_main);
		out_ctrl.push(_html_ctrl);
	}
	//把html写到dom里面去
	g('template_main').innerHTML=out_main.join('');
	g('template_ctrl').innerHTML=out_ctrl.join('');
}

//定义点击切换时的调用函数
function switchSlider(n){
	var oMain=g("main_"+n);	//当前的
	var oCtrl=g("ctrl_"+n);
	var clear_main=g('.main-i'); //所有的
	var clear_ctrl=g('.ctrl-i');
	//去除所以的active
	for(var i=0;i<clear_main.length;i++){
		clear_main[i].className=clear_main[i].className.replace(' main-i_active','');
		clear_ctrl[i].className=clear_ctrl[i].className.replace(' ctrl-i_active','');
	}
	//给当前的加active
	oMain.className+=" main-i_active";
	oCtrl.className+=" ctrl-i_active";
}
//6.动态获取图片的高，使其垂直居中
function movePic(){
	var Pictures=g(".pic");
	for(var i=0;i<Pictures.length;i++){
		Pictures[i].style.marginTop=-1*(Pictures[i].clientHeight/2)+'px';
		console.log(Pictures[i].clientHeight);
	}
}
//5.定义何时调用加载函数
window.onload=function(){
	addSliders();	
	switchSlider(1);
	setTimeout(function(){
		movePic();
	},100);
}
