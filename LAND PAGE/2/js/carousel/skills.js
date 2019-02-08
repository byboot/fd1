( function($) {
$(document).ready(function () {
    $(window).bind('scroll', function() {
	
  $( '.skill' ).each(function() { 
     var $this   = $(this);
    if(!$this.data('counted') && $(window).scrollTop() + $(window).height() >= $this.offset().top) {
      $this.data('counted', true);
    var  barWidth = $(this).data('percentage');
    $(this).find('.value').animate({
      width: barWidth +'%',
    },1500);
	}
	
  });
  
  }).triggerHandler('scroll');	
});	
})(jQuery);
 