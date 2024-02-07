//플로팅배너
$(function() {
  var $w = $(window),
    $footer = $('#footer'),
    $banner = $('#banner');

  function updateFooterHeight() {
    return $footer.outerHeight();
  }

  $w.on('scroll', function() {
    var sT = $w.scrollTop();
    var triggerPoint = 200;

    var val = $(document).height() - $w.height() - updateFooterHeight();

    if (sT >= triggerPoint && sT < val)
      $banner.addClass('on');
    else
      $banner.removeClass('on');
  });

  // 스크롤 또는 윈도우 크기 변경 시 footer 높이 업데이트
  $w.on('scroll resize', function() {
    footerHei = updateFooterHeight();
  });
});






//썸네일 마우스호버
$(document).ready(function() {
$("#deps04 .inner .th li").mouseover(function() {
  $(this).find(".hover").addClass("on");
});

$("#deps04 .inner .th li").mouseout(function() {
  $(this).find(".hover").removeClass("on");
});
//mobile menu 
$('.hamburger-menu').click(function() {
  $(this).toggleClass('active');
});




  $('#ag_btn').click(function() {
      $('#agree_modal').addClass('show');
      
  });
  $('#agree_modal .close').click(function() {        
      $('#agree_modal').removeClass('show');
  });

  $("#navbarNav .navbar-nav .nav-item > a").click(function(){
      $("#navbarNav").removeClass("show");
      $(".hamburger-menu").removeClass("active");

  });

  $("#navbarNav .mo_banner .deps02 a").click(function(){
      $("#navbarNav").removeClass("show");
      $(".hamburger-menu").removeClass("active");

  });
});








$(document).ready(function () {

var swiper1 = new Swiper(".mySwiper1", {
  loop: true,
  //spaceBetween: 10,
  slidesPerView: 1,
  //freeMode: true,
  
  watchSlidesProgress: true,
  breakpoints: {
    540: {
          slidesPerView: 2         
          },
     768: {
       slidesPerView: 2
    
     },
    1360: {
      slidesPerView: 3          
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  //spaceBetween: 10,
  navigation: {
    nextEl: ".swiper_arrow .swiper-button-next",
    prevEl: ".swiper_arrow .swiper-button-prev",
  },
  effect:"fade",
  thumbs: {
    swiper: swiper1,
  },
});


var swiper4 = new Swiper(".mySwiper4", {
  loop: true,
  //spaceBetween: 10,
  slidesPerView: 1,
  //freeMode: true,
  
  watchSlidesProgress: true,
  breakpoints: {
     540: {
          slidesPerView: 2         
          },
     768: {
       slidesPerView: 2
    
     },
    1360: {
      slidesPerView: 3          
    },
  },
});
var swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper_arrow4 .swiper-button-next",
    prevEl: ".swiper_arrow4 .swiper-button-prev",
  },
  effect:"fade",
  thumbs: {
    swiper: swiper4,
  },
});


var swiper5 = new Swiper(".mySwiper5", {
  loop: true,
  //spaceBetween: 10,
  slidesPerView: 1,
  //freeMode: true,
  
  watchSlidesProgress: true,
  breakpoints: {
    540: {
          slidesPerView: 2         
          },
     768: {
       slidesPerView: 2
    
     },
    1360: {
      slidesPerView: 3          
    },
  },
});
var swiper6 = new Swiper(".mySwiper6", {
  loop: true,
  
  navigation: {
    nextEl: ".swiper_arrow5 .swiper-button-next",
    prevEl: ".swiper_arrow5 .swiper-button-prev",
  },
  effect:"fade",
  thumbs: {
    swiper: swiper5,
  },
});



var swiper8 = new Swiper(".mySwiper8", {
  loop: true,
  //spaceBetween: 10,
  slidesPerView: 1,
  //freeMode: true,
  
  watchSlidesProgress: true,
  breakpoints: {
     540: {
          slidesPerView: 2         
          },
     768: {
       slidesPerView: 2
    
     },
    1360: {
      slidesPerView: 3          
    },
  },
});
var swiper7 = new Swiper(".mySwiper7", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper_arrow8 .swiper-button-next",
    prevEl: ".swiper_arrow8 .swiper-button-prev",
  },
  effect:"fade",
  thumbs: {
    swiper: swiper8,
  },
});



// var swiper13 = new Swiper(".mySwiper13", {
//   loop: true,
//   //spaceBetween: 10,
//   slidesPerView: 1,
//   //freeMode: true,
  
//   watchSlidesProgress: true,
//   breakpoints: {
//     540: {
//           slidesPerView: 2         
//           },
//      768: {
//        slidesPerView: 2
    
//      },
//     1360: {
//       slidesPerView: 3          
//     },
//   }
// });

// var swiper14 = new Swiper(".mySwiper14", {
//   loop: true,
//   //spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper_arrow14 .swiper-button-next",
//     prevEl: ".swiper_arrow14 .swiper-button-prev",
//   },
//   effect:"fade",
//   thumbs: {
//     swiper: swiper13,
//   },
// });


var swiper = new Swiper(".vdSwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper_arrowvd .swiper-button-next",
    prevEl: ".swiper_arrowvd .swiper-button-prev",
  },
});

});






// 애니메이션 동작
function aniCtrl(){
  var _st = $(window).scrollTop();
 
  var _wH = $(window).height();
  console.log(_wH);
  $('.ani-item').each(function(){
      var _this = $(this);
      if( _this.offset().top <= (_st + _wH) && !_this.hasClass('done') ){
          _this.addClass('done');
      }
  });
}


$(document).ready(function(){
  // 애니메이션 동작
  aniCtrl();

  $(window).scroll(function(){
      aniCtrl();
  });
});
