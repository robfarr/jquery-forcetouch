$(document).ready(function(e){

	var url = $("[data-force-touch]").attr("href");

	$("[data-force-touch]").forcetouch({
		onstart: function(elem){
		
			$("body").addClass("is-force-touching");
			$(".force-touch-preview-container").addClass("active");

			if( $(elem).attr("href") != $(".force-touch-preview-frame").attr("src") ) $(".force-touch-preview-frame").attr("src", $(elem).attr("href"));

		},
		onend: function(elem){

			$("body").removeClass("is-force-touching");
			$(".force-touch-preview-container").removeClass("active");
			
		},
		delay: 100
	});

	$(".force-touch-preview-container").click(function(e){
		$("body").removeClass("is-force-touching");
		$(".force-touch-preview-container").removeClass("active");
	});

});