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




