( function($) {
$(document).ready(function () {
					 "use strict";
					$('nav a,#slider-version8 .ver4-pur[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, 1500);
				return false;
			  }
			}
		  });	


						(function($){
	
		$('ul.dropdown-menu [data-toggle=dropdown]').on('hover', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});

		})($);
		$("#tabs .service4 a").click(function(e){
		$("#tabs .service4 a").removeClass("active");
       $(this).addClass("active"); 
        e.preventDefault();
		
        $(this).tab('show');
		
    });
	$(".port_wrapper #tabs li a").click(function(e){
		
        e.preventDefault();
		
        $(this).tab('show');
		
    });

	$(".timeline .col-md-3").click(function(e){
		$(".timeline .col-md-3 .entry").removeClass("active");
		
      $(this).children(".entry").addClass("active"); 
       
        e.preventDefault();
		
        $(this).tab('show');
		
    });
	$(".timeline .col-md-3").click(function(e){
		$(".timeline .col-md-3 p").removeClass("display-p");
		
       $(this).children("p").addClass("display-p"); 
       
        e.preventDefault();
		
        $(this).tab('show');
		
    });

	
							 
							$(window).scroll(function() {
							  if ($(this).scrollTop() > 0) {
								$(".top-social").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".top-social").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 0) {
								$(".top-social2").css({"position": "fixed", "top": 0, "width": "100%","border-bottom":"1px solid #efefef"});
							  } else {
								$(".top-social2").removeAttr("style");
							  }
							   if ($(this).scrollTop() > 0) {
								$("#topbar-version6").css({"position": "fixed", "top": 0, "width": "100%","border-bottom":"1px solid rgba(0, 0, 0, 0.5)","background":"rgba(0, 0, 0, 0.5)"});
							  } else {
								$("#topbar-version6").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 700) {
								$(".top-social3").css({"position": "fixed", "top": 0, "width": "100%","border-bottom":"1px solid #efefef","background":"#f2f2f2"});
							  } else {
								$(".top-social3").removeAttr("style");
							  } 
							   if ($(this).scrollTop() > 700) {
								$("#nav-version7").css({"position": "fixed", "top": 0, "width": "100%","border-bottom":"1px solid #d2527f","background":"#d2527f"});
							  } else {
								$("#nav-version7").removeAttr("style");
							  } 
							   if ($(this).scrollTop() > 0) {
								$(".top-social4").css({"position": "fixed", "top": 0, "width": "100%","border-bottom":"1px solid #efefef","background":"#f2f2f2"});
							   }else {
								$(".top-social4").removeAttr("style");
								
							  }
							  if ($(this).scrollTop() > 0) {
								$("#version5").css({"position": "fixed", "top": 0, "background-color":"rgba(17, 17, 26, 0.8)"});
							   }else {
								$("#version5").removeAttr("style");
								
							  }
							  if ($(this).scrollTop() > 0) {
								$("#topbar-version8").css({"position": "fixed", "top": 0, "width": "100%","border-bottom":"1px solid #4183d7","background":"#4183d7"});
								$("#topbar-version8 .header3 .navbar-inverse .navbar-nav li a").css({"color":"#fff"});
							  } 
							 
							 
							  else {
								$("#topbar-version8").removeAttr("style");
								$("#topbar-version8 .header3 .navbar-inverse .navbar-nav li a").removeAttr("style");
							  } 
							 
							});
							
								$("#owl-testimonial-1").owlCarousel({
										autoPlay: true, //Set AutoPlay to 3 seconds
										
									  items : 1,
									navigation : true
								  });
									
								$("#owl-testimonial-2").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  });		
						$("#owl-testimonial-3").owlCarousel({
								autoPlay: false, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  });
						 $("#owl-testimonial-4").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  }); 
						   $("#owl-testimonial-5").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  });
		
						
		

	$(document).ready(function() {
		$('.accordion .conn1').addClass('block-con');
		$('.accordion .ac1').addClass('active');
	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .ac1').removeClass('active');
		$('.accordion .conn1').removeClass('block-con');
		 
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	$('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
			$(this).find('.fa-caret-up').removeClass('fa-caret-up').addClass('fa-caret-down');
		}else {
			close_accordion_section();
		
			// Add active class to section title
			jQuery(this).addClass('active');
			$(this).find('.fa-caret-down').removeClass('fa-caret-down').addClass('fa-caret-up');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
			
		}

		e.preventDefault();
	});
});

if ( $( 'body' ).hasClass( 'home5' ) ) {
        headerAnimation();
    }

 // Wait for background images to load
    // --------------------------------------------------
    $( '.background-image' ).each( function() {

        var $this = $( this ),
            $preload = $( '<img/>' ),
            background = $this.css( 'background-image' ).replace( /^url\(["']?/, '' ).replace( /["']?\)$/, '' );

        $preload.on( 'load', function() {
            $this.attr( 'data-loaded', 'true' );
        } );

        $preload[ 0 ].src = background;
    } ); 
function headerAnimation() {

   

    var $window = $( window ),
        $intro = $( '.intro' ),
        $copy = $( '.intro-copy' ),
        $overlay = $( '.intro-overlay' ),
        overlayColor = $overlay.css( 'background-color' ).match( /\d+/g ),
        introHeight = $( '.intro' ).outerHeight();

    $window.on( 'resize', function() {
        introHeight = $( '.intro' ).outerHeight();
    } );

    $window.on( 'scroll', function() {

        var scrollTop = $window.scrollTop(),
            copyFadePercent = 1 - scrollTop / introHeight,
            overlayFadePercent = 0.8 + scrollTop / introHeight / 10;

        if ( scrollTop <= introHeight && $intro.attr( 'data-loaded' ) === 'true' ) {
            $copy.css( {
                '-webkit-transform': 'translateY(' + scrollTop / 2.5 + 'px)',
                '-ms-transform': 'translateY(' + scrollTop / 2.5 + 'px)',
                'transform': 'translateY(' + scrollTop / 2.5 + 'px)',
                'opacity': copyFadePercent
            } );

            $overlay.css( 'background-color', 'rgba(' + overlayColor[ 0 ] + ', ' + overlayColor[ 1 ] + ', ' + overlayColor[ 2 ] + ', ' + overlayFadePercent + ')' );
        }

    } );
} 
$('.success .content .filter a').click(function(){
        $('.filter  .active').removeClass('active');
        $(this).addClass('active');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
	
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
   $('.backtop').fadeIn(200);
  } else {
   $('.backtop').fadeOut(200);
  }
 });

 // scroll body to 0px on click
$(".backtop a").click(function () {
$("body,html").animate({
   scrollTop: 0
  }, 800);
  return false;
 });	


 
 
 
 
 
});	

})(jQuery);	
 
		



  
