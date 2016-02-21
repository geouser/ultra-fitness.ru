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

});




