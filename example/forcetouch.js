(function($){

	$.fn.forcetouch = function(options){


		var config = $.extend({
            delay: 100,
            onstart: function(){ console.log("start"); },
            onend: function(){ console.log("end"); }
        }, options);


		this.each(function(){

			var elem = $(this);
			var touching = false;
			var displaying = false;
			var wasdisplaying = false;


			$(this).on('mousedown touchstart', function(e){
				
				e.stopPropagation();

				touching = true;
				
				setTimeout(function(){
					if(touching && !displaying){
						displaying = true;
						wasdisplaying = true;
						config.onstart(elem);
					}
				}, config.delay);

			});


			$(this).on('mouseup mouseout touchend', function(e){
				
				e.preventDefault();

				if(displaying) config.onend(elem);
				
				touching = false;
				displaying = false;
				
				setTimeout(function(){
					wasdisplaying = false;
				}, config.delay);

			});


			$(this).click(function(e){
				if(wasdisplaying) e.preventDefault();
			});


		});


		return this;

	};

})(jQuery);