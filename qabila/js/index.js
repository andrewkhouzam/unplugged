$(document).ready(function(){
		$(document).on("click", ".menu-outer", function(){

	$(this).toggleClass('collapse');

if(!$("body").hasClass('homepage')){
if($(this).hasClass('collapse')){

	$("body").addClass("collapse");
	$(".menu").addClass("collapse");
	$(".menu img").attr("src","img/collapseMenuLines.png");
	$(".gifs-container.collapse").show();
	$(".gifs-container:not(.collapse)").hide();
	$(".gifs-container.collapse").addClass('transition');

} else {
	
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
}
else
{
	console.log("Hello");
}
	})
})



jQuery(document).ready(function($) {
		$(document).on('mouseenter', '.gifs-container .container', function( event ) {
    // do something
    // console.log("eee");
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

jQuery(document).ready(function($) {
	$.ajax({
	  url: "homepage.html",
	  // context: document.body
	}).success(function(r) {
	  console.log(r);

	  c = $(r);
	});
	$("#circle").click(function(event) {
		/* Act on the event */

	
	$("body").addClass('homepage');
	$("body").html(c);

	});
});


jQuery(document).ready(function($) {
	$(".gif-image#gif-1").click(function(event) {

		/* Act on the event */
	$(".menu-outer").removeClass('collapse');
	$(".menu").removeClass("collapse");
	$(".menu img").attr("src","img/menuLines.png");
	
	$(".gifs-container.collapse").removeClass('transition');
	$(".container .gif-image:after").css("border","none");

	$.ajax({
	  url: "homepage.html",
	  // context: document.body
	}).success(function(r) {
	  console.log(r);

	  c = $(r);
	});



// 	$( 'body' ).load( "homepage.html", function( response, status, xhr ) {
// 		// console.log(response);
// 		// c = response;
// });

	setTimeout(function(){
	$(".gifs-container:not(.collapse)").show();
	$(".gifs-container.collapse").hide();
	$("body").removeClass("collapse");
	$("body").addClass('homepage');
		// window.location.replace("homepage.html");
		// $('div.landing').replaceWith($(c));
		// $('html').html(content);
		console.log(c);
		$("body").html(c);

	},1000);


	});
});

