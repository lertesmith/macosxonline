$(function(){
	/* 显示状态栏时间 */
	function now() {
		var d = new Date();
		var h = d.getHours()<10?"0"+d.getHours():d.getHours();
		var m = d.getMinutes()<10?"0"+d.getMinutes():d.getMinutes();
		var s = d.getSeconds()<10?"0"+d.getSeconds():d.getSeconds();
		return d.getMonth()+1+"月"+d.getDate()+"日 "+h+":"+m+":"+s;
	}
	setInterval(function(){$(".topRight span").html(now)}, 1000);
	/* 右键菜单 */
	$('#wrapper').contextPopup({
		  items: [
		  {label:'新建文件夹', action:function() {} },
		  null,
		  {label:'显示简介', action:function() {} },
		  null, /* null can be used to add a separator to the menu items */
		  {label:'更改桌面背景', action:function() { alert('更改桌面背景') } }
		  ]
	});
	/* 系统初始化 */
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
		artDialog({title:'文本编辑器', id:'editor_dlg', url:'app/editor/index.html', width:480, height:320});
		return false;
	});

	$('#calculator').click(function() {
		artDialog({title:'计算器', id:'calculator_dlg', url:'http://www.21ic.com/calculator/kaipingfang.htm', width:380, height:580});
		return false;
	});

	$('#sohuTV').click(function() {
		artDialog({title:'搜狐视频', ic:'settring_dlg', url:'http://tv.sohu.com/upload/sohuapp/index.html?api_key=9ca7e3cdef8af010b947f4934a427a2c', width:800, height:583});//url参数其实就是iframe
		return false;
	});

	$('#setting').click(function() {
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
/* 显示launchPad */
function launchPad(){
	var body = document.getElementsByTagName('body')[0];
	if(body.className != 'launchPadBg') {
		body.className = 'launchPadBg';
	} else {
		body.className = 'desktopBg';
	};
};