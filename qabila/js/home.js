


// Ajax Loading must be tested on xampp or any server to get the request

// $(document).ready(function(){
// $("#newArrivals").click(function(e){
// 	e.preventDefault();
// $( "#content" ).load( "newArrivals.html" );
// })
// })



function initializeBullets(){

		var numberOfGifImages = $(".gifs-container:not(.collapse)").children().length;
		for (i = 0; i < numberOfGifImages; i++) { 
    		$("div.bullets").append("<div class ='bullet'></div>");
    		if(i!= numberOfGifImages-1)
    		$("div.bullets").append("<img class = 'dotted-line' src = 'img/dottedLine.png'>");
			}

$(".bullet:nth-child(1)").addClass("active");

}

// This method sets up the bullets and animates the between the gif section when bullet is selected
$(document).ready(function(){
	initializeBullets();
	$(".bullet").click(function(){
		$(".bullet").removeClass("active");
		$(this).addClass("active");
		var index =  $(this).index();
		console.log(index);

		// index => bullet
		// 0    => first bullet
		// 2    => Second bullet
		// 4    => Third bullet
		// it goes like this because there is dotted-line between a bullet and another

		index = index/2 + 1;
		console.log(index);
	 $("html, body").animate({ scrollTop: $("#gif-"+index).offset().top });	
	})
})

// this method animates between gifs sections when scrool is done
$(document).ready(function(){
	$(window).scroll(function(){
		offset =  $(window).scrollTop();
		windowHeight = $(window).height();
		var index = Math.round(offset/windowHeight) ;
		console.log(index);
		$(".bullet").removeClass("active");
		$(".bullet").eq(index).addClass("active");
		
	})
})

// this method renders the new view when menu is selected

$(document).ready(function(){
// 	$(".menu-outer:not(.collapse)").click(function(){
// // window.location.replace("collapse.html");

// 	$(".bullets").hide();
// 	$(".menu").addClass("collapse");
// 	$("body").addClass("collapse");
// 	$(".menu-outer").addClass("collapse");
// 	$(".menu img").attr("src","img/collapseMenuLines.png");


// 	$(".gifs-container").addClass("collapse");
// 	$('.gifs-container').children().each(function () {
// 		$(this).addClass("collapse");
// });

// 	numberOfGifImages = $('.gifs-container').children().length;	
// 	widthOfGifContainer = numberOfGifImages*402 ;
// 	console.log(widthOfGifContainer);
// 	$(".gifs-container").css("width",widthOfGifContainer);


// 	})
})

// it sets the width of the gifs-container when it is collapsed
// $(document).ready(function(){

// 		numberOfGifImages = $('.gifs-container').children().length;	
// 	widthOfGifContainer = numberOfGifImages*402 ;
// 	console.log(widthOfGifContainer);
// 	$(".gifs-container.collapse").css("width",widthOfGifContainer);
// })



$(document).ready(function(){
		$(document).on("click", ".menu-outer", function(){

	$(this).toggleClass('collapse');

if($(this).hasClass('collapse')){

	$(".bullets").hide();
	$("body").addClass("collapse");
	$(".menu").addClass("collapse");
	$(".menu img").attr("src","img/collapseMenuLines.png");

	$(".gifs-container.collapse").show();
	$(".gifs-container:not(.collapse)").hide();

	$(".gifs-container.collapse").addClass('transition');

} else {

	$(".bullets").show();
	
	$(".menu").removeClass("collapse");
	$(".menu img").attr("src","img/menuLines.png");
	
	$(".gifs-container.collapse").removeClass('transition');
	$(".container .gif-image:after").css("border","none");
	setTimeout(function(){
	$(".gifs-container:not(.collapse)").show();
	$(".gifs-container.collapse").hide();
	$("body").removeClass("collapse");
	}
	,1200);


	
}

	})
})



jQuery(document).ready(function($) {
		$(document).on('mouseenter', '.gifs-container .container', function( event ) {
    // do something
    console.log("eee");
		$(".gifs-container .container").removeClass('active');
		$(this).addClass('active');
	})
})



jQuery(document).ready(function($) {
	console.log(true);
	windowHeight = $(window).height();
	windowWidth = $(window).width();

	ratio = windowHeight/windowWidth;

	widthOfGif = ratio*windowWidth*0.25;
	$(".gifs-container .container").css("width", windowWidth*0.25);
		$(".gifs-container .container").css("height", widthOfGif );

		numberOfGifImages = $('.gifs-container').children().length;	
	widthOfGifContainer = numberOfGifImages*ratio*500 ;
	console.log(widthOfGifContainer);
	


	$(".gifs-container.collapse").css("width",widthOfGifContainer);
	$(".gifs-container.collapse").hide();
});