// Ajax Slide & Fade Content with jQuery v2.0 @ http://perishablepress.com/slide-fade-content/
// DEMO @ http://perishablepress.com/wp/wp-content/demos/slide-fade-content/
// DEMO @ http://perishablepress.com/demos/slide-fade-content/

/* jQuery Color Fade v0.1 * Released under the CC BY 3.0 License (http://creativecommons.org/licenses/by/3.0/) * https://github.com/matthewbj/jQuery-Color-Fade */
(function(b){var c={init:function(a){var c=b.extend({fadeColor:"yellow",fadeTime:800,delayTime:600},a),d={position:"relative","z-index":1},e={height:"100%",width:"100%","background-color":c.fadeColor,position:"absolute",top:0,left:0,"z-index":"-1"};return this.each(function(a){b(this).css(d).append('<div id="colorFadeDiv'+a+'" class="colorFadeClass"></div>');b("#colorFadeDiv"+a).css(e).delay(c.delayTime).fadeOut(c.fadeTime)})},refade:function(a){a=b.extend({fadeColor:"yellow",fadeTime:800,delayTime:600},
a);b(this).find(".colorFadeClass").css("background-color",a.fadeColor).show().delay(a.delayTime).fadeOut(a.fadeTime)}};b.fn.colorFade=function(a){if(c[a])return c[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof a||!a)return c.init.apply(this,arguments);b.error("Method "+a+" does not exist on jQuery.colorFade")}})(jQuery);

// slide & fade content

if (document.documentElement.clientWidth < 767) {

jQuery(document).ready(function($) {
	$('.folio-expand').on('click', function() {
		var href = $(this).attr('href');
		if ($('#ajax').is(':visible')) {
			$('#ajax').css({ display:'block' }).animate({ height:'1px' }).hide().slideUp('slow');
		}
		$('#ajax').css({ display:'block' }).animate({ height:'670px' },function() {
			$('#ajax').html('');
			$('#ajax').load('ajax/ajax-content2.html ' + href, function() {
				$('#ajax').hide().slideDown('slow');
			});
		});
	});
});

}

if (document.documentElement.clientWidth > 767) {

jQuery(document).ready(function($) {
	$('.folio-expand').on('click', function() {
		var href = $(this).attr('href');
		if ($('#ajax').is(':visible')) {
			$('#ajax').css({ display:'block' }).animate({ height:'1px' }).hide().slideUp('slow');
		}
		$('#ajax').css({ display:'block' }).animate({ height:'500px' },function() {
			$('#ajax').html('');
			$('#ajax').load('ajax/ajax-content2.html ' + href, function() {
				$('#ajax').hide().slideDown('slow');
			});
		});
	});
});

}



    $(document).ajaxComplete(function() {
  $(".owl_single1").owlCarousel({
       navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      singleItem:true,
	  pagination:true,
	navigationText : false
	
  });
    });

    $(document).ready(function() {
    	$('.folio-expand').click(function() {
    		$("html, body").animate({
    			scrollTop: $('#project-show').offset().top
    		}, 1000);
    	});
    });

   


    $(document).ajaxComplete(function() {
    	$(".close-it").click(function() {
		$('#ajax').css({ display:'block' }).animate({ height:'1px' }).hide(1000).slideUp('slow');
    	});
    });

