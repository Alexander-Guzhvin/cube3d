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



var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() - 30,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 500);
  e.preventDefault();
});


$(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});













const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);


function onTabClick(item) {
  item.addEventListener("click", function() {
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
  slidesPerView: 4,
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

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
  