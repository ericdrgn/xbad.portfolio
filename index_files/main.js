$(document).ready(function() {
  toggle_nav_container();

  if (window.innerWidth > 768) {
    setTimeout(function() {
        $('.hero-home .container')
          .removeClass('animate-load')
          .addClass('viewed');
      }, 1000);
  }

  $('.navbar li a').addClass('fade');
  $('#header .social').addClass('animate');
});

var toggle_nav_container = function() {
  var $toggleButton = $('#toggle_m_nav');
  $navContainer = $('#m_nav_container');
  $menuButton = $('#m_nav_menu');
  $menuButtonBars = $('.m_nav_ham');

  // toggle the container on click of button (can be remapped to $menuButton)

  $toggleButton.on('click', function() {
    // declare a local variable for the window width
    var $viewportWidth = $(window).width();

    // if statement to determine whether the nav container is already toggled or not

    if ($navContainer.is(':hidden')) {
      $('#m_nav_container').css('overflow-y', 'auto');
      $navContainer
        .fadeIn(200)
        .addClass('container_open')
        .css('z-index', '2');
      // $(window).scrollTop(0);
      $menuButtonBars.removeClass('button_closed');
      $menuButtonBars.addClass('button_open');
      $('#m_ham_1').addClass('m_nav_ham_1_open');
      $('#m_ham_2').addClass('m_nav_ham_2_open');
      $('#m_ham_3').addClass('m_nav_ham_3_open');
      $('body').css('overflow-y', 'hidden');
      // animate menu list
      $('.navbar li a').removeClass('fade').addClass('in');
      $('#header .social').removeClass('animate');
    } else {
      $('#m_nav_container').css('overflow-y', '');
     
      setTimeout(function() {
         $navContainer.css('z-index', '1').removeClass('container_open').fadeOut(330);
      }, 950);
      $menuButtonBars.removeClass('button_open');
      $menuButtonBars.addClass('button_closed');
      $('#m_ham_1').removeClass('m_nav_ham_1_open');
      $('#m_ham_2').removeClass('m_nav_ham_2_open');
      $('#m_ham_3').removeClass('m_nav_ham_3_open');
      $('body').css('overflow-y', 'initial');
      // animate menu list
      $('.navbar li a').removeClass('in').addClass('fade');
      $('#header .social').addClass('animate');
    }
  });
};

// button scroll
$('.btn_scroll').on('click', function() {
  $(this).addClass('animate-remove').css({'opacity':'0'}).animate({'opacity':'0'});
});

  var pageTop = $("#header");

  var waypoint_offset_2 = pageTop.outerHeight() + 200;
  
  pageTop.waypoint({
    handler: function(direction) {
      
      if (direction == 'down') {
        
        $('.btn_scroll').addClass('animate-remove').css({'opacity':'0'}).animate({'opacity':'0'});

      } else {
        $('.btn_scroll').removeClass('animate-remove').css({'opacity':'1'}).animate({'opacity':'1'});
      }
      
    },
    offset: function() {
      return - pageTop.outerHeight() - waypoint_offset_2;
    }
  });
