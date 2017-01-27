//$(window).scroll(function(){
//	if($(document).scrollTop()>50){
//		$('nav').addClass('shrink');
//	}
//	else{
//		$('nav').renoveClass('shrink');
//	}
//});



	$(document).on('scroll', function(){
		if($(this).scrollTop()>1){
			$('header').addClass('sticky');
		}else{
			$('header').removeClass('sticky'); 
		}
	});