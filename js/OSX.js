var OSX = (function(){
	osx = {}
	osx.version = '10.10'
	osx.sys = { init:function() { document.getElementById("dock").innerHTML = '<li id="finder"></li><li id="launchPad"></li><li id="safari"></li><li id="editor"></li><li id="calculator"></li><li id="qq"></li><li id="music"></li><li id="setting"></li>';}}
	osx.win = {}
	osx.app = {}
	osx.desk = {}
	osx.dock = {}
	osx.file = {}
	return osx
})();
window.OSX = OSX;