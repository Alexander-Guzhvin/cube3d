$(document).ready(function(){
$('div#main_menu ul.float_sub_menu li#chosen img').hide();

$("ul.float_sub_menu").hide();

$("li.float_sub_menu").hover(
	function() {
        //$(this).find("ul").animate({opacity: "show", bottom: "-75"}, "slow");
        $(this).find("ul").slideDown("slow", function(){
        	$(this).contents().find('img').show();
        });
    }, 
    false);
    
$("ul.main_menu").hover(
	false, 
    function() {
        //$(this).find("ul.float_sub_menu").animate({opacity: "hide", top: "-85"}, 1000);
        $('div#main_menu ul.float_sub_menu li#chosen img').hide();
        $(this).find("ul.float_sub_menu").slideUp("slow");
    });
    
    
    
    
});


