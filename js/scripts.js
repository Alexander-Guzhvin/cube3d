flag = false;
function collapseAutoAttach() {
	var elements = document.getElementsByTagName('a');
	var element;
	
	window.flag = false;
	
	for (var i = 0; element = elements[i]; i++) {
		if (element.rel!='collapsible') continue;
		element.onmouseover = open_;
		element.onclick = open_;
		element.onchange = control;
	}

	elements = document.getElementsByTagName('div');
	for (var i = 0; element = elements[i]; i++) {
		if (element.className!='search_input') continue;
		element.style.display = 'none';
	}
}

function control(){
	window.flag = true;
}

function open_(){
	var div = this.parentNode.parentNode;
	var elements = div.getElementsByTagName('div');
	var search_input = document.forms.search_form.s;

	for (var i = 0; element = elements[i]; i++) {
		if (element.className.indexOf('search_input')==-1) {
			continue;
		}
		if(element.style.display == 'none'){
			element.style.display = 'block';
			search_input.focus();
		}
		else {
			search_input.focus();
		}
		//search_input.onblur = _blur;
	}
	return false;
}

/*
function _blur(){
	var _div;
	_div = this.parentNode;
	if (window.flag) return;
	setTimeout("_div.style.display = 'none'", 3000);
}
*/
// Preload of images...

pic1off = new Image();
pic1off.src="/img/menu_about_us.gif";

pic1on = new Image();
pic1on.src="/img/menu_about_us_active.gif";

pic2off = new Image();
pic2off.src="/img/menu_portfolio.gif";

pic2on = new Image();
pic2on.src="/img/menu_portfolio_active.gif";

pic3off = new Image();
pic3off.src="/img/menu_usl.gif";

pic3on = new Image();
pic3on.src="/img/menu_usl_active.gif";

pic4off = new Image();
pic1off.src="/img/menu_contacts.gif";

pic4on = new Image();
pic1on.src="/img/menu_contacts_active.gif";






function rolloverAttach(){

	var menu = document.getElementById('main_menu');
	var pictures = menu.getElementsByTagName('img');

	for (var i = 0; element = pictures[i]; i++) {
		 
		 element.onmouseover = mouse_on;
		 
	}

}

function mouse_on() {
	
	
	if (this.src.indexOf("_active") != -1) return;
	var _src = this.src.substring(0, this.src.length-4);
	this.src = _src + '_active.gif';
	this.onmouseout = mouse_off;
}

function mouse_off() {
	
	//var _control = this.src.substring(0, this.src.length-11);
	//if (_control == "_active.gif") continue;
	
	var _src = this.src.substring(0, this.src.length-11);
	this.src = _src + '.gif';
}

