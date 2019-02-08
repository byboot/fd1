/* --------------------------------------------------
	Initialize: View (Home)
	-------------------------------------------------- */
	
	function view_home_init() {
		
		$(window).scroll(function () { 
			
		});
		
		$(window).resize(function () { 
			
			view_home_resize();
			
		});

		// link the home page image
		$("#homepage-image").click(function(){
			window.location = "http://bitly.is/1FzYt6R";
		}).css("cursor","pointer");
		
		// Setup Carousel for Bitly Values
		
		$("#page-home-trust-quotes").carousel({
			
			speed							:	8000,
			class_active					:	'active',
			class_inactive					:	'inactive',
	        slide_animate_callback			:	function(){},
			navigation_option_previous		:	null,
			navigation_option_next			:	null,
	        pagination						:	false,
	        pagination_navigation			:	false,
			child_selector					:	'.page-home-trust-quote'
	        
		});
		
		// Setup Carousel for Bitly Tweets
		
		$("#page-home-twitter-stream").carousel({
			
			speed							:	12000,
			class_active					:	'active',
			class_inactive					:	'inactive',
	        slide_animate_callback			:	function(){},
			navigation_option_previous		:	$('#page-home-twitter-stream-navigation-previous'),
			navigation_option_next			:	$('#page-home-twitter-stream-navigation-next'),
	        pagination						:	false,
	        pagination_navigation			:	false,
			child_selector					:	'.page-home-twitter-stream-tweet'
	        
		});
		
		view_home_counter_init();
		
		view_home_resize();
		
	}
	
	function view_home_counter_init() {
		
		$('#page-home-link-shortener-counter').bitlyCount();
		
	}
	