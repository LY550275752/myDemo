//自执行，闭包
(function (window){

	//获取日历格式函数
	//返回一个二维数组，格式：
	//[[{month:8,day:28,data:"2016-8-28"},{}...],
	// [{month:9,day:7,data:"2016-9-7"},....],
	// [...]
	// ....
	//]
	function getCalendar(y,m){
		y=parseInt(y);
		m=parseInt(m);
		//创建一个当前月份1号的Date,m传进来的时候加了1，要剪掉
		var time=new Date(y,m-1,1);
		//存储上个月和下个月的日期格式模板
		var lastDate,
			nextDate;
		//获得上个月和下个月
		var lastMonth=m-1,
			nextMonth=m+1;
		//根据m判断，初始化前后月的日期格式
		if(m==1){
			lastDate=""+(y-1)+'-'+12+'-';
			nextDate=""+y+'-'+2+'-';
		}else if(m==12){
			lastDate=""+y+'-'+11+'-';
			nextDate=""+(y+1)+'-'+1+'-';
		}else{
			lastDate=""+y+'-'+(m-1)+'-';
			nextDate=""+y+'-'+(m+1)+'-';
		}
		//共显示多少个日期,6*7
		var maxNumber=42;
		//三个数组，存上个月最后的一段日期,这个月，下个月开始
		var r1=[],
			r2=[],
			r3=[];
		//当前月份的最大天数
		var maxDate=new Date(y,m,0).getDate();
		//暂时不明，lastFix显示多少个上个月的日期
		//nextFix下个月显示多少个日期
		var lastFix=time.getDay()-1;
		console.log(lastFix);
		var nextFix=maxNumber-maxDate-lastFix;
		//上个月的最大天数
		var lastMaxDate=new Date(y,m-1,0).getDate();
		//i遍历，t存日期，填充r1,r2,r3数组,data为日期字符串格式
		var i,t;
		for(i=0;i<lastFix;i++){
			t=lastMaxDate-lastFix+i+1;
			r1[i]={month:lastMonth,day:t,data:lastDate+t};
		}
		for(i=0;i<maxDate;i++){
			t=i+1;
			r2[i]={month:m,day:t,data:""+y+'-'+m+'-'+t};
		}
		for(i=0;i<nextFix;i++){
			t=i+1;
			r3[i]={month:m+1,day:t,data:nextDate+t}
		}
		//result:把三个数组链接起来
		var result=r1.concat(r2,r3);
		//ar:按一行7个，分割数组，返回ar
		var ar=[];
		for(var i=0;i<6;i++){
			ar.push(result.splice(0,7));
		}
		return ar;
	};

	//一行日历vue组件
	var calendarLine=Vue.extend({
		props:['items','cur','sel','month'],
		//避免所有组件实例使用一个data对象，所以需要写函数返回创建
		data(){
			return {};
		},
		//模板
		template:`<tr><td v-for="item in items" v-bind:class="{'dp-last':month!=item.month,'dp-today':cur==item.data,'dp-select':sel==item.data}"><span @click="click(item)">{{item.day}}</span></td></tr>`,
		methods:{
			click(item){
				//派发事件，在实例上触发它，沿父链冒泡遇到一个监听器后停止
				this.$dispatch('click',item.data)
			}
		}
	});
	//整个日历组件
	var calendar=Vue.extend({
		props:['date'],
		//同理，要求要用函数
		data(){
			var d='';  //显示日历的
			var len=(''+this.data).length;
			//看有无date先
			if(!this.date||(len!=13&&len!=10)){
				//没有
				d=new Date();
			}else{
				//异常值
				d=len==13?new Date(parseInt(this.date)):new Date(this.date*1000);
			}
			var sel='';//选择初始化为空
			//看d是不是date形式
			if(Object.prototype.toString.call(d)==="[object Date]"){
				//是date
				if(isNaN(d.getTime())){
					//d取不到
					d=new Date();
				}else{
					//取到
					sel=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
				}
			}else{
				d=new Date();
			}

			//这里不知道
			if(!this.date){
				sel='';
			}

			var curTime=new Date();//当前的时间
			var cur=''+curTime.getFullYear()+'-'+(curTime.getMonth()+1)+'-'+curTime.getDate();//当前日期字符串格式
			var y=d.getFullYear();
			var m=d.getMonth()+1;
			var data=getCalendar(d.getFullYear(),d.getMonth()+1);
			return {
				cur:cur,
				sel:sel,
				y:y,
				m:m,
				data:data,
				show:false
			}
		},
		template:`
			<div class="input-wrap">
				<input type="text" class="input middle-input" 
				@focus="show=true" v-model="sel">
			</div>
			<div class="dp" v-show="show">
				<div class="dp-header">
					<a class="dp-h-1" @click="cy(-1)">«</a>
					<a class="dp-h-2" @click="cm(-1)">‹</a>
					<span class="dp-ym">{{y}}年{{m}}月</span>
					<a class="dp-h-3" @click="cm(1)">›</a>
					<a class="dp-h-4" @click="cy(1)">»</a>
				</div>
				<table class="dp-table">
					<thead>
						<tr>
							<th><span>一</span></th>
							<th><span>二</span></th>
							<th><span>三</span></th>
							<th><span>四</span></th>
							<th><span>五</span></th>
							<th><span>六</span></th>
							<th><span>日</span></th>
						</tr>
					</thead>
					<tbody>
						<tr is="calendar-line" v-for="cell in data" :items="cell" :cur="cur" :sel="sel" :month="m"></tr>
					</tbody>
				</table>
				<div class="dp-footer"><a @click="clickNow">{{sel}}</a><span class="btn btn-ok" @click="show=false">确定</span></div>
			</div>`,
		methods:{
			cm(direct){
				//修改this.m
				if(direct=="-1"){
					if(this.m==1){
						//$emit触发当前实例的事件,参数都会发给监听函数
						this.$emit('init',parseInt(this.y)-1,12);
					}else{
						this.$emit('init',this.y,parseInt(this.m)-1)
					}
				}else{
					if(this.m==12){
						this.$emit('init',parseInt(this.y)+1,1);
					}else{
						this.$emit('init',this.y,parseInt(this.m)+1)
					}
				}
			},
			cy(direct){
				//修改this.y
				if(direct=="-1"){
					this.$emit('init',parseInt(this.y)-1,this.m);
				}else{
					this.$emit('init',parseInt(this.y)+1,this.m)
				}
			},
			clickNow(){
				//点击回到当前时间日期的日历
				var t=new Date();
				var y=t.getFullYear();
				var m=t.getMonth()+1;
				console.log(m);
				var d=t.getDate();
				this.$emit('init',y,m);
			},
			foc(){
				this.show=true;
			},
		},
		events:{
			//切换日期，传进年,月
			init(y,m){
				//更换新的显示日期
				this.data=getCalendar(y,m);
				//
				this.y=y;
				this.m=m;
			},
			//监听从子组件传来的
			click(data){
				this.sel=data;
				var arr=data.split('-');
				var m=arr[1];
				var y=arr[0];
				//这里的date实际上是父组件的date,也就是time
				this.date =new Date(arr[0],arr[1]-1,arr[2]).getTime();
				if(m==this.m){
					//点击的是当前月份的就不用更新data	
				}else{
					this.y=y;
					this.m=m;
					this.data=getCalendar(y,m)
				}
			}
		},
		components:{
			'calendar-line':calendarLine
		}
	});

	//把calendar加进window的conponents中
	window.components=window.components||{};
	window.components.calendar=calendar;
})(window);