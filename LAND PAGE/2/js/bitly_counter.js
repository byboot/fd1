/* --------------------------------------------------

-------------------------------------------------- */

/* --------------------------------------------------
jQuery Plugin
-------------------------------------------------- */
(function ( $ ) {
	
	jQuery.fn.bitlyCount = function( options ) {

		var counter;

		this.each(function(){

			counter = new BitlyCounter( $(this) ).count();

			// stop counter to allow pasting in inputs 
			// ( ios8 bug )
			$("input,textarea")
				.focus(function(){
					counter.stop();
				})
				.blur(function(){
					counter.count();
				});

		});

	    return this;

	}

	/* --------------------------------------------------
	Counter Class 
	-------------------------------------------------- */

	function BitlyCounter( element ){

		var _element = element;
		var _digits = [];
		var _counter = this;
		var _interval;

		this.setValue = function( value ){
			var digit;

			var values = value.toString().split('');

			for (var i = 0; i < values.length; i++) {

				if( _digits.length == i ){
					
					digit = new BitlyCounterDigit( values[i] );
			
					_digits.push( digit );

					_element.append( digit.getElement() );

					if( (i!=0) && (i<values.length-1) && (values.length-i-1) % 3 == 0 ){
						_element.append('<div class="page-home-link-shortener-counter-number-separator">,</div>');
					}

				}

				_digits[i].setValue( values[i] );
		
			};

			return this;

		}
		
		this.count = function(){

			_counter.setValue( _counter.getBitlinkCount() );

			_interval = setTimeout(
				function(){
					_counter.count()
				}, 
				Math.round((Math.random()*2000)+1000)
			);

			return this;
		}

		this.stop = function(){

			clearInterval(_interval);

			return this;
		}

		this.getBitlinkCount = function(){

			return Math.floor(19116701100 + 13004198 * (new Date().getTime() - 1411430400000)/86400000.0); 

		}

	}

	/* --------------------------------------------------
	Digit Class 
	-------------------------------------------------- */

	function BitlyCounterDigit( value ){

		var _value = value;
		var _digit = this;
		var _element;

		/* --------------------------------------------------
		
		-------------------------------------------------- */
		this.build = function(){

			_element = $('<div class="page-home-link-shortener-counter-number"></div>');

 			_element.append( this.buildNumberPart([
	 				'page-home-link-shortener-counter-number-card-top',
	 				'page-home-link-shortener-counter-number-card-to'
 				])
 			);

 			_element.append( this.buildNumberPart([
	 				'page-home-link-shortener-counter-number-card-bottom',
	 				'page-home-link-shortener-counter-number-card-to'
 				])
 			);

 			_element.append( this.buildNumberPart([
	 				'page-home-link-shortener-counter-number-card-top',
	 				'page-home-link-shortener-counter-number-card-from'
 				])
 			);

 			_element.append( this.buildNumberPart([
	 				'page-home-link-shortener-counter-number-card-bottom',
	 				'page-home-link-shortener-counter-number-card-from'
 				])
 			);		

 			_element.find('.page-home-link-shortener-counter-number-card-value').text(_value);

 			return this;

 		}

		this.buildNumberPart = function( classes ){

			var span = $('<span class="page-home-link-shortener-counter-number-card '+ classes.join(' ') +'"></div>')
				.append('<span class="page-home-link-shortener-counter-number-card-value"></span>')
				.append('<span class="page-home-link-shortener-counter-number-card-shadow"></span>');

			return span;	
		    	
		}

		this.setValue = function( value ){

			if( value == _value ) return;

			setTimeout(
				function(){
			
					var from = _element.find('.page-home-link-shortener-counter-number-card-from');
					var to = _element.find('.page-home-link-shortener-counter-number-card-to:not(.n)');
					
					from
						.addClass('page-home-link-shortener-counter-number-card-hide')
						.removeClass('page-home-link-shortener-counter-number-card-from')
						.addClass('page-home-link-shortener-counter-number-card-to')
						.removeClass('page-home-link-shortener-counter-number-card-hide')
						.addClass('n')
						.find('.page-home-link-shortener-counter-number-card-value').text( value );
							
					to
						.addClass('page-home-link-shortener-counter-number-card-hide')
						.addClass('page-home-link-shortener-counter-number-card-from')
						.removeClass('page-home-link-shortener-counter-number-card-to')
						.removeClass('page-home-link-shortener-counter-number-card-hide')
						.find('.page-home-link-shortener-counter-number-card-value').text( _value );
							
						setTimeout(function(){
							to.find('.page-home-link-shortener-counter-number-card-value').text( _value );
						},500);

					_value = value;

					_element.find('.n').removeClass('n');

				}, 
				Math.round((Math.random()*500)+1000)
			);

		}

		this.getElement = function(){

			return _element;

		}

		this.build();

	}

}( jQuery ));