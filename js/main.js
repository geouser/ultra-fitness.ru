// Global parameters
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};
/*
#############################
#   Main JS for ____________   #
#############################
*/


jQuery(document).ready(function($) {

if ($(window).width() <= 900) {
    $(".scheme-list li").click(function() {
      $(".scheme-list li").removeClass('active');
      $(this).addClass('active');
      $(".scheme-list li").children().slideUp();
      $(this).children().slideToggle();
    });
    }
    $(window).resize(function() {
      if ($(window).width() <= 900) {
      $(".scheme-list li").click(function() {
            $(".scheme-list li").removeClass('active');
            $(this).addClass('active');
            $(".scheme-list li").children().slideUp();
            $(this).children().slideToggle();
          });
      }
    });

/*-----------------------------------------------------------------*/  
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $('.photo_gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-with-zoom',
    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1], // Will preload 0 - before current, and 1 after the current image
      tCounter: '<strong>%curr% / %total%</strong>' // Markup for "1 of 7" counter
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });


  $('#menu_button').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('.mobile_menu').toggleClass('active');
    $('body, html').toggleClass('menu_active');
  });

  $('#overlay_close').on('click', function(event) {
    event.preventDefault();
    $('#menu_button').removeClass('active');
    $('.mobile_menu').removeClass('active');
    $('body, html').removeClass('menu_active');
  });



/*Dropdown (TIMETABLE page)*/
  function text_change(el){
    if (el.parent().hasClass('active')) {
      el.text('Скрыть');
    } else {
      el.text('Все направления');
    }
  }

  $('#drop_btn').on('click', function(event) {
    event.preventDefault();
    $('.controls__select').toggleClass('active');
    text_change($(this));
  });


  $('#close_dropdown').on('click', function(event) {
    event.preventDefault();
    $('.controls__select').removeClass('active')
    text_change($('#drop_btn'));
  });



  /*Dropdown width*/
  function change_width_dropdown(){
    var w = $('.main_content').width();
    $('.dropdown').width(w-50); // -50px bug
  }
  change_width_dropdown();
  $(window).resize(function(event) {
    change_width_dropdown();
  });

});



$('svg path, svg polygon').hover(function(){
  $('.scheme-map svg path, .scheme-map svg polygon').removeClass('active');
  $(this).addClass('active');
  var num = $(this).attr('num');
  var lastN = num.substr(num.length - 2);
  $('.scheme-list ol li').removeClass('active');
  $('.scheme-list ol li#' + num).addClass('active');
   $('.scheme-map-signs li').css('display', 'none');
  $('.scheme-map-signs li#r-' + lastN).css('display', 'block');
});


$('.scheme-list ol li').hover(function(){
  $('.scheme-map svg path, .scheme-map svg polygon').removeClass('active');
  $('.scheme-list ol li').removeClass('active');
  $(this).addClass('active');
  var num2 = $(this).attr('id');
  var lastN = num2.substr(num2.length - 2);
  $('.scheme-map svg path[num=' + num2 + ']').addClass('active');
  $('.scheme-map svg polygon[num=' + num2 + ']').addClass('active');
  $('.scheme-map-signs li').css('display', 'none');
  $('.scheme-map-signs li#r-' + lastN).css('display', 'block');
});