

var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();


var Dast = {key: 'test'};

var menuCurrentIndex = 0;
var menuCount = 3;
var Main = {};
Main.onLoad = function(){
	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();
	
	alert('onload');
};

Main.onUnload = function(){
	alert('onUnload');
};

Main.enableKeys = function(){
	$('.b-menuItem').eq(menuCurrentIndex).addClass('selected');
	$('.b-menuItem a').eq(menuCurrentIndex).focus();
	var page = $('.selected a').html();
	$('.b-content').load('app/page/'+page.toLowerCase()+'.html');
	//document.getElementById("anchor").focus();
};

Main.keyDown = function(){
	var keyCode = event.keyCode;
	alert("Key pressed: " + keyCode);

	switch(keyCode)
	{
		case tvKey.KEY_RETURN:
		case tvKey.KEY_PANEL_RETURN:
			alert("RETURN");
			widgetAPI.sendReturnEvent();
			break;
		case tvKey.KEY_LEFT:
			alert("LEFT");
			$('.b-menuItem').eq(menuCurrentIndex).removeClass('selected');
			if(menuCurrentIndex == 0) {
				menuCurrentIndex = 3;
			}
			else {
				menuCurrentIndex--;
			}
			$('.b-menuItem').eq(menuCurrentIndex).addClass('selected');
			var page = $('.selected a').html();
			$('.b-content').load('app/page/'+page.toLowerCase()+'.html');
			break;
		case tvKey.KEY_RIGHT:
			alert(keyCode + ' test keycode');
			$('.b-menuItem').eq(menuCurrentIndex).removeClass('selected');
			if(menuCurrentIndex == 3) {
				menuCurrentIndex = 0;
			}
			else {
				menuCurrentIndex++;
			}
			$('.b-menuItem').eq(menuCurrentIndex).addClass('selected');
			var page = $('.selected a').html();
			$('.b-content').load('app/page/'+page.toLowerCase()+'.html');
			break;
		case tvKey.KEY_UP:
			alert("UP");
			break;
		case tvKey.KEY_DOWN:
			alert("DOWN");
			break;
		case tvKey.KEY_ENTER:
		case tvKey.KEY_PANEL_ENTER:
			alert("ENTER");
			break;
		default:
			alert("Unhandled key");
			break;
	}
};

function menuSelected(ind, keyUp){
	
}
