$(function(){
	//显示状态栏时间
	function now() {
		var d = new Date();
		var h = d.getHours()<10?"0"+d.getHours():d.getHours();
		var m = d.getMinutes()<10?"0"+d.getMinutes():d.getMinutes();
		var s = d.getSeconds()<10?"0"+d.getSeconds():d.getSeconds();
		return d.getMonth()+1+"月"+d.getDate()+"日 "+h+":"+m+":"+s;
	}
	setInterval(function(){$(".topRight span").html(now)}, 1000);
	//右键菜单
	$('#wrapper').contextPopup({
		  items: [
		  {label:'新建文件夹', action:function() {} },
		  null,
		  {label:'显示简介', action:function() {} },
		  null, /* null can be used to add a separator to the menu items */
		  {label:'更改桌面背景', action:function() { alert('更改桌面背景') } }
		  ]
	});
	//系统初始化
	OSX.sys.init();
	
	$('#safari').click(function() {
		artDialog({title:'Safari', id:'safari_dlg', url:'app/safari/index.html'});
		return false;
	});

	$('#music').click(function() {
		artDialog({title:'网易云音乐', id:'music_dlg', url:'http://music.163.com/embedapp', width:745, height:510});
		return false;
	});

	$('#qq').click(function() {
		artDialog({title:'QQ', id:'qq_dlg', url:'http://w.qq.com/', width:320, height:480});
		return false;
	});

	$('#editor').click(function() {
		artDialog({title:'ace editor', id:'editor_dlg', url:'app/editor/index.html', width:480, height:320});
		return false;
	});

	$('#calculator').click(function() {
		artDialog({title:'图片查看', id:'calculator_dlg', content:'<img width="400" height="600" src="http://tongsiqi-wordpress.stor.sinaapp.com/uploads/2014/07/shenlijun.jpg" />', fixed:true});
		return false;
	});

	$('#setting').click(function() {
		artDialog({title:'搜狐视频', ic:'settring_dlg', url:'http://tv.sohu.com/upload/sohuapp/index.html?api_key=9ca7e3cdef8af010b947f4934a427a2c', width:800, height:583});//url参数其实就是iframe
		return false;
	});

	$('#launchPad').click(function() {
				if (!$('launchPad_window')) {
					document.getElementsByTagName('body')[0].className = 'launchPadBg';
					artDialog({id:'launchPad_window', content:'<div id="topMenu" style="background:#000; width:200px; height:2em;line-height:2em;text-align:center; filter:alpha(opacity=70); opacity:0.7;">[<a href="#" style="color:#FFF" onclick="showWin();return false">打开新对话框</a>]&nbsp;&nbsp;[<a id="bgCloseBtn" href="#" style="color:#FFF" onclick="bgShow();return false">关闭</a>]</div>', x:'left', y:'top', style:'noSkin', fixed:true});
				} else {
					launchPad();
				};
				return false;
	});

});

/*
演示脚本
*/

(function(){
		  
	//判断IE6
	var isIE6 = !+'\v1' && ([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6);
	
	//document.getElementById简化函数
	var $ = function (id){
		return 'string' == typeof id ? document.getElementById(id) : id;
	};
	
	//页面就绪，允许你绑定一个在DOM文档载入完成后执行的函数
	var domReady = !+'\v1' ? function(f){(function(){
			try{
				document.documentElement.doScroll('left');
			} catch (error){
				setTimeout(arguments.callee, 0);
				return;
			};
			f();
		})();
	} : function(f){
		document.addEventListener('DOMContentLoaded', f, false);
	};
	
	//在页面就绪后绑定事件
	domReady(function(){
		//artDialog({content:'欢迎使用 "artDialog" 对话框组件！'});		
		
		
		//--------------------------ardDialog演示脚本开始------------------------------//
		$('btn1').onclick = function(){
			artDialog({title:'图片查看', content:'<img width="400" height="600" src="http://tongsiqi-wordpress.stor.sinaapp.com/uploads/2014/07/shenlijun.jpg" />', fixed:true});
			return false;
		};
		
		$('btn2').onclick = function(){
			artDialog({title:'搜狐视频', url:'http://tv.sohu.com/upload/sohuapp/index.html?api_key=9ca7e3cdef8af010b947f4934a427a2c', width:800, height:583});//url参数其实就是iframe
			return false;
		};
		
		$('btn3').onclick = function(){
			artDialog({title:'功夫兔', content:'<object width="420" height="363"><param name="movie" value="http://www.tudou.com/v/bXwe7XgTxuA"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="opaque"></param><embed src="http://www.tudou.com/v/bXwe7XgTxuA" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="420" height="363"></embed></object>', fixed:true});
			return false;
		};
		
		$('btn4').onclick = function(){
			artDialog({content:'你人品稳定么？', fixed:true, yesText:'我很稳定', style:'confirm'}, function(){alert('你是好人');}, function(){alert('你是坏人');});//style参数可以填写多个，用空格隔开。具体有什么请看皮肤css文件
			return false;
		};
		
		$('btn5').onclick = function(){
			artDialog({content:'你是坏人', style:'alert', lock:true}, function(){});//lock参数就是锁屏，它会中断用户操作，用于显示非常重要的消息。慎用
			return false;
		};
		
		$('btn6').onclick = function(e){
			//获取对象的坐标，让对话框在按钮附近弹出
			var e = e || window.event,
			_x,
			_y;
			if(e.pageX || e.pageY){
				_x = e.pageX;
				_y = e.pageY;
			} else {
				_x = e.clientX + document.body.clientLeft;
				_y = e.clientY + Math.max(document.body.scrollTop, document.documentElement.scrollTop);
			};
			
			var _this = this;
			artDialog({id:'menu_4834783',content:'<input style="width:200px;" id="M_dfd" type="text" value="hello world!" />',x:_x, y:_y, style:'noTitle noBorder'}, function(){ _this.innerHTML = $('M_dfd').value; });//使用id参数，可以防止点击弹出多个对话框
			return false;
		};
		
		$('btn7').onclick = function(){
			artDialog({content:'您收到 <strong>2</strong> 条消息', x:'right', y:'bottom', time:'100', fixed:true});//x和y坐标可以使用关键字，当然也可以使用数字
			return false;
		};
		//--------------------------ardDialog演示脚本结束------------------------------//
	});
})();

//显示一个新对话框
function showWin(){
			artDialog({content:'欢迎使用 "artDialog" 对话框组件！', fixed:true, lock:false,style:'succeed'}, function(){artDialog({title:' ', content:'谢谢观赏', lock:true, time:2})});
};

//显示launchPad
function launchPad(){
	var body = document.getElementsByTagName('body')[0];
	if(body.className != 'launchPadBg') {
		body.className = 'launchPadBg';
	} else {
		body.className = 'desktopBg';
	};
};