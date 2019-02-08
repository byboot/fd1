( function($) {
$(document).ready(function () {
					 "use strict";
/*
									 *  Simple image gallery. Uses default settings
									 */

									$('.fancybox').fancybox();

									/*
									 *  Different effects
									 */

									// Change title type, overlay closing speed
									$(".fancybox-effects-a").fancybox({
										helpers: {
											title : {
												type : 'outside'
											},
											overlay : {
												speedOut : 0
											}
										}
									});
									});
									})(jQuery);