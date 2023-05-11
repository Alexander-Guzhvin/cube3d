async function submitForm(event) {
  event.preventDefault(); // отключаем перезагрузку/перенаправление страницы
  try {
  	// Формируем запрос
    const response = await fetch(event.target.action, {
    	method: 'POST',
    	body: new FormData(event.target)
    });
    // проверяем, что ответ есть
    if (!response.ok) throw (`Ошибка при обращении к серверу: ${response.status}`);
    // проверяем, что ответ действительно JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        window.location.href = 'homepage-url.html';
    }
    // обрабатываем запрос
    const json = await response.json();
  } catch (error) { // обработка ошибки
  }
}




$(document).ready(function(){
	$(".form-wrapper .button").click(function(){
	  var button = $(this);
	  var currentSection = button.parents(".section");
	  var currentSectionIndex = currentSection.index();
	  var headerSection = $('.steps li').eq(currentSectionIndex);
    var headerSection2 = $('.steps-2 li').eq(currentSectionIndex);
	  currentSection.removeClass("is-active").next().addClass("is-active");
	  headerSection.removeClass("is-active").next().addClass("is-active");
    headerSection2.next().addClass("is-active");
  
	  $(".form-wrapper").submit(function(e) {
		e.preventDefault();
	  });
  
	  if(currentSectionIndex === 5){
		$(document).find(".form-wrapper .section").first().addClass("is-active");
		$(document).find(".steps li").first().addClass("is-active");
	  }
	});
  });




jQuery(document).ready(function () {
     
  $(".phone").mask("+380 (99) 999-99-99"); 
 

 jQuery('.send-form').click( function() {
   var form = jQuery(this).closest('form');
   
   if ( form.valid() ) {
     form.css('opacity','.5');
     var actUrl = form.attr('action');

     jQuery.ajax({
       url: actUrl,
       type: 'post',
       dataType: 'html',
       data: form.serialize(),
       success: function(data) {
         form.html(data);
         form.css('opacity','1');
                 //form.find('.status').html('форма отправлена успешно');
                 //$('#myModal').modal('show') // для бутстрапа
       },
       error:	 function() {
            form.find('.status').html('серверная ошибка');
       }
     });
   }
 });


});






















// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() - 202,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});






let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');
for (let index = 0; index < popup_link.length; index++) {
	const el = popup_link[index];
	el.addEventListener('click', function (e) {
		if (unlock) {
			let item = el.getAttribute('href').replace('#', '');
			let video = el.getAttribute('data-video');
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
for (let index = 0; index < popups.length; index++) {
	const popup = popups[index];
	popup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__body')) {
			popup_close(e.target.closest('.popup'));
		}
	});
}


document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
});


const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top;
			let iconMenu = document.querySelector(".icon-menu");
			let menuBody = document.querySelector(".menu__body");
			iconMenu.classList.remove("_active");
			menuBody.classList.remove("_active");
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
			window.scrollTo({
				
				top: gotoBlockValue,
				behavior: "smooth"
			});
			
			e.preventDefault();
			
		}
	}
}










const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);


function onTabClick(item) {
  item.addEventListener("mouseover", function() {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if( ! currentBtn.classList.contains('active') ) {
          tabsBtn.forEach(function(item) {
              item.classList.remove('active');
          });
  
          tabsItems.forEach(function(item) {
              item.classList.remove('active');
          });
  
          currentBtn.classList.add('active');
          currentTab.classList.add('active');
      }
  });
}

document.querySelector('.tabs__nav-btn').click();










var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
breakpoints: {
  // desktop >= 991
  991: {
    slidesPerView: 4
  }
}
});







var accordion = (function (element) {

  var _getItem = function (elements, className) { 
    var element = undefined;
    elements.forEach(function (item) {
      if (item.classList.contains(className)) {
        element = item;
      }
    });
    return element;
  };
  
  return function () {
    var _mainElement = {}, 
      _items = {}, 
      _contents = {}; 
  
  
    var _actionClick = function (e) {
      if (!e.target.classList.contains('accordion-item-header')) { 
        return;
      }
      e.preventDefault();   
      var header = e.target,
        item = header.parentElement,
        itemActive = _getItem(_items, 'show');
  
      if (itemActive === undefined) { 
        item.classList.add('show');
      } else {

        itemActive.classList.remove('show');
        if (itemActive !== item) {
          item.classList.add('show');
        }
      }
    },
      _setupListeners = function () {
        _mainElement.addEventListener('click', _actionClick);
      };
  
    return {
      init: function (element) {
        _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
        _items = _mainElement.querySelectorAll('.accordion-item');
        _setupListeners();
      }
    }
  
  }
  })();
  
  var accordion1 = accordion();
  accordion1.init('#accordion');
  

  let iconMenu = document.querySelector(".icon-menu");
  if (iconMenu != null){
    let delay = 500;//задержка
    let body=document.querySelector("body");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", (e) => {
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
    });
  };
  function menu_close(){
    let iconMenu = document.querySelector(".icon-menu");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
  }
  











