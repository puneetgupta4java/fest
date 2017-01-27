/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* MAIN JAVASCRIPT 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
(function($) {
    "use strict";
    /*****************************
    WHEN PAGE IS LOADING
    *****************************/
    $(window).load(function () {
    	//PAGE LOADER
	    $("#loader").fadeOut(1000);
	    //PORTFOLIO
	    var $container = $('#portfolio-container');
		// initialize
		$container.isotope({
		  itemSelector: '.portfolio-item'
		});
		$('#portfolio-filters').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $container.isotope({ filter: filterValue });
		});
		scrollMenu();
	});
    /*****************************
    WHEN PAGE IS SCROLLING
    *****************************/
    $(window).scroll(function() {
    	/*CAROUSEL*/
	    if(window.innerWidth < 910){
	    	if(window.innerWidth < 670){
	    		var numbermaxitems = 1;
	    	}
	    	else{
		   		var numbermaxitems = 2;
		   	}
	    }
	    else{
		    var numbermaxitems = 4;
	    }
	    $('.flexslider').flexslider({
			animation: "slide",
			animationLoop: false,
			maxItems: numbermaxitems,
			selector: ".slides > li.blog-post", 
			itemWidth: 210, 
			itemMargin: 0,
			controlNav: false,    
			minItems: 0,    
			move: 0, 
			slideshow: false
		});
		$('#partners-slider').flexslider({
			animation: "slide",
			animationLoop: false,
			maxItems: numbermaxitems,
			selector: ".slides > li.partners-slide", 
			itemWidth: 210, 
			itemMargin: 0,
			controlNav: false,    
			minItems: 0,    
			move: 0, 
			slideshow: false
		});
		//ANIMATIONS
		scrollMenu();
	    if ($(window).scrollTop() > $("#header").height()) {
	        $('#scroll-top').fadeIn("1000");
	        $('#scroll-bottom').fadeOut();
	    } else {
	        $('#scroll-top').fadeOut();
	        $('#scroll-bottom').fadeIn("1000");
	    }
    });
    /*****************************
    OTHER JQUERY
    *****************************/
    /*BACKGROUND IOS*/
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
	    $("#header.big").css('min-height', '600px');
	}
	/*ANIMATIONS*/
	var wow = new WOW({
	    boxClass:     'animate-me',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       false,       // trigger animations on mobile devices (default is true)
	    live:         true        // act on asynchronously loaded content (default is true)
	});
	wow.init();
	/*MENU DROPDOWN 1st LEVEL*/
	$('.menu-item-has-children').on('mouseenter',function(){
			$(this).find('.sub-menu').addClass('open animated');
	});
	$('.menu-item-has-children').on('mouseleave',function(){
			$(this).find('.sub-menu').removeClass('open animated');
	});
	/*INSIDE LINK*/
	$('a.inside-link').on('click',function (e) {
		    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 1000);
	    return false;
	});
	/*MOBILE MENU*/
    $('#show-mobile-menu').on('click',function(){
        if($('#navigation-mobile').hasClass('display-nav-menu')){
            $('body').css('overflow', '');
            $('body').css({'right': '0'});
            $('body').css({'position': 'inherit'});
            $('#navigation-mobile').removeClass('display-nav-menu');
            $('#navigation #show-mobile-menu').removeClass('mobile-button-left');
        } else {
            $('body').css({'overflow': 'hidden'});
            $('body').css({'right': '-200px'});
            $('body').css({'position': 'relative'});
            $('#navigation-mobile').addClass('display-nav-menu');
            $('#navigation #show-mobile-menu').addClass('mobile-button-left');
        }
    });
	var data = $('#navigation').html();
	$('#navigation-mobile').html(data);
	/*HOME SLIDER*/
	var slider = $('#header-slider');
    slider.flexslider({
		animation: "slide",
		animationLoop: true,
		selector: ".slides > li", 
		controlNav: false,    
		slideshowSpeed: 10000,
		slideshow: true,
		keyboard: true,   
		directionNav: false,
    	controlsContainer: ".navigation-slider-container"
	});
	var sliderInfos = slider.data('flexslider');
	$('#sliderNext').on('click',function(){
        sliderInfos.flexAnimate(sliderInfos.getTarget("next"));
    });
    $('#sliderPrev').on('click',function(){
        sliderInfos.flexAnimate(sliderInfos.getTarget("prev"));
    });
    /*CONTENT IMAGE SLIDER*/
    $('.flexslider.image-slider').flexslider({
		animation: "slide",
		animationLoop: false,
		selector: ".slides > li",    
		slideshow: false
	});
    /*SEARCH FORM*/
	$('a#search-toggle').on('click',function() {
		$('#header #search-container').toggleClass("clicked");
		$('#header #search-toggle').toggleClass("clicked");
	});
	/*FAQS*/
	$('.faq').on('click',function() {
        $(this).find("h4.faq-link").toggleClass("faq-active");
        $(this).find(".faq-content").slideToggle(200);
    });
    /*PORTFOLIO*/
	$('.fancybox').fancybox({
        openEffect  : 'elastic'
    });
	/*SCROLL BOTTOM*/
	$('#scroll-bottom a').on('click',function(){
	    $("html, body").animate({ scrollTop: $(window).height()}, 600);
	    return false;
	});
	/*SCROLL TOP*/
	$('#scroll-top').on('click',function(){
	    $("html, body").animate({ scrollTop: 0}, 600);
	    return false;
	});
	/*ON SCROLL*/
	function scrollMenu() {
		var scroll = $(window).scrollTop();
	    if (scroll > ($(window).height() -20)) {
			$("#header.big #navigation").addClass('navigation-fixed');
	    } else {
			$("#header.big #navigation").removeClass('navigation-fixed');
	    }
	    if (scroll > ($("#header").height() -20)) {
			$("#header.small #navigation").addClass('navigation-fixed');
	    } 
	    else{
			$("#header.small #navigation").removeClass('navigation-fixed');
	    }
	    if (scroll > 20 & scroll < ($("#header").height() -20)) {
	        $("#header.small #navigation").fadeOut("100");
	    } else {
		    $('#header.small #navigation').fadeIn("1000"); 
	    }

	    if (scroll > 60 & scroll < $(window).height()) {
	        $("#header.big #navigation").fadeOut("100");
	    } else {
		    $('#header.big #navigation').fadeIn("1000"); 
	    }
	}
})(jQuery);