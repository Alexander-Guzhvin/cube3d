function save_(){
	f = document.forms.mainform;
	f.save.value=1;
	f.submit();
	return false;
}

function apply_(){
	f = document.forms.mainform;
	f.apply.value=1;
	f.submit();
	return false;
}

function cancel_(){
	f = document.forms.mainform;
	f.cancel.value=1;
	f.submit();
	return false;
}

function deleteImage_(fieldName){
	f = document.forms.mainform;
	f.deleteImage.value = fieldName;
	f.submit();
}

function show_preview(fieldName){
	f = document.forms.mainform;
	pic = document.getElementById("img_preview_" + fieldName);
	src = f[fieldName].value;

	preview=new Image();
	preview.src=src;

	pic.src=src;

}

function submitenter(f,e){
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;

	if (keycode == 13){
		f.form.submit();
		return false;
	}else{
		return true;
	}
}

//==============================================================================

function hide_attached(){
    x = document.getElementById("attached_files");

    if(x.style.display==''){
       x.style.display='none';
       document.getElementById("attached_on").style.display='';
       document.getElementById("attached_off").style.display='none';
    }else{
       x.style.display='';
       document.getElementById("attached_on").style.display='none';
       document.getElementById("attached_off").style.display='';
    }

}

function check_lang(f){
	var el = f.lang[0];
	if (f.lang[1].checked){
		el = f.lang[1];
	}

	f.action = location.protocol + '//' + el.value + '/admin/login';
}


function toggle(id){
	//toggle dysplay of block
	el = document.getElementById(id);
	el.getClass = function(){
		return this.getAttribute('class');
	}

	el.setClass = function(className){
		return this.setAttribute('class', className);
	}

	if (!el) return;

	if (el.getClass() == 'opened'){
		el.setClass('closed');
	}else{
		el.setClass('opened');
	}

}

//==============================================================================
if (typeof jQuery != 'undefined'){
$(document).ready(function(){
	//list colorer
	$('table.list tbody tr:even').addClass('even');
	$('table.list tbody tr').hover(function() {
		$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	});

	//
	$('table.list img.controlImage').each(function(){
		$(this).css('cursor', 'pointer');

		this.onclick = function(){
			toggleControl(this.id);
		}
	});
});
};

function toggleControl(imageId){
	active = '_active.gif';
	non_active = '.gif';

	control_label = 'control_for_';
	controlId = imageId.substring(control_label.length);

	field = document.getElementById(controlId);

	image = document.getElementById(imageId);

	//alert(image.src);

	if (!field) return;

	if (field.value == 1){
		//disable
		field.value = 0;
		pos = image.src.indexOf(active);
		image.src = image.src.substring(0, pos) + non_active;
	}else{
		//enable
		field.value = 1;
		pos = image.src.indexOf(non_active);
		image.src = image.src.substring(0, pos) + active;
	}
}