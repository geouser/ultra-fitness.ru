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
  if ( $('html').hasClass('no-flexbox') ) {
    console.log('log');
  }

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

  $('.slider').slick({
    fade: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  })



  function googleMap_initialize() {
      var lat = $('#map-canvas').attr('data-lat');
      var long = $('#map-canvas').attr('data-long');
      var mapCenterCoord = new google.maps.LatLng(lat, long);
      var mapMarkerCoord = new google.maps.LatLng(lat, long);

      var mapOptions = {
        center: mapCenterCoord,
        zoom: 16,
        //draggable: false,
        disableDefaultUI: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      var markerImage = new google.maps.MarkerImage('images/green-marker.svg');
      var marker = new google.maps.Marker({
        icon: markerImage,
        position: mapMarkerCoord, 
        map: map,
        title:"ULTRA Fitness"
      });
      $(window).resize(function (){
        map.setCenter(mapCenterCoord);
      });
  };
  googleMap_initialize();

});




