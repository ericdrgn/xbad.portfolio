 $(document).ready(function() {

  // Do our DOM lookups beforehand

  var wrapper_navbar_section = $("#wrapper_header");
  var navbar_section = $("#header");

  var top_spacing = 0;
  var waypoint_offset = $("#hero").outerHeight()- navbar_section.outerHeight() + 30;
  
		wrapper_navbar_section.waypoint({
			handler: function(direction) {
				
				if (direction == 'down') {
					
					wrapper_navbar_section.css({ 'height': navbar_section.outerHeight() });		
					navbar_section.stop().addClass("fixed").css({"top":- navbar_section.outerHeight(), "opacity":"1"}).animate({"top":"0","opacity":"1"});


				} else {
				
					wrapper_navbar_section.css({ 'height':'auto' });
					navbar_section.stop().removeClass("fixed").css("opacity","1");;
				}
				
			},
			offset: function() {
				return - navbar_section.outerHeight()-waypoint_offset;
			}
		});

	 
		

	// ======================================
	// Smooth scroll to content
	// ======================================


	function getRelatedContent(el){
	  return $($(el).attr('href'));
	}
	// Get link by section or article id
	function getRelatedNavigation(el){
	  return $('.navbar li .scrollTo[href=#'+$(el).attr('id')+']');
	}

	$('#m_nav_container li .scrollTo').on('click touch',function(e){
		e.preventDefault();
	 	$('#m_nav_container').css("z-index", "1").removeClass('container_open').fadeOut(300);
	 	$('html,body').animate({scrollTop:getRelatedContent(this).offset().top}, 1000);
	 	  
	 	$("body").css('overflow-y','initial');

		$menuButtonBars.removeClass('button_open')
		$menuButtonBars.addClass('button_closed')
		$("#m_ham_1").removeClass("m_nav_ham_1_open");
		$("#m_ham_2").removeClass("m_nav_ham_2_open");
		$("#m_ham_3").removeClass("m_nav_ham_3_open");
	});
    
    $('.scrollToContact').click(function(e){
    	e.preventDefault();
        $('#m_nav_container').css("z-index", "1").removeClass('container_open').fadeOut(300);
        $("body").css('overflow-y','initial');

		$menuButtonBars.removeClass('button_open')
		$menuButtonBars.addClass('button_closed')
		$("#m_ham_1").removeClass("m_nav_ham_1_open");
		$("#m_ham_2").removeClass("m_nav_ham_2_open");
		$("#m_ham_3").removeClass("m_nav_ham_3_open");
		$('html, body').animate({scrollTop:$(document).height()}, 1000);
        return false;
    });

      // Get link by section or article id
      function getRelatedNavigation2(el){
        return $('.btn_scroll[href=#'+$(el).attr('id')+']');
      }
      
      $('.btn_scroll').on('click touch',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:getRelatedContent(this).offset().top + 30}, 1000);
      });

           
});