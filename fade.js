$(document).ready(function(){
		
    		$("#dim").css("height", $(document).height());
    		
			    $(document).ready(function(){
    			$("#dim").fadeIn();
    			return false;
			});
    		
    		$(".close").click(function(){
    			$("#dim").fadeOut();
    			return false;
			});
			
				});
		
		$(window).bind("resize", function(){
		 	$("#dim").css("height", $(window).height());
		});