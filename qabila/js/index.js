
$(document).ready(function(){
		$(document).on("click", ".menu-outer", function(){

//Redirecting from the collapsed Menu to the last viewed page
if($("body").hasClass('collapse'))
{

}
// redirecting from landingPage (index.html) to the collapsed page (collapsed.html)
else if($("body").hasClass('landing'))
{	
	$('body').load('collapsed.html', function() {
		$('body').removeClass();
		$('body').addClass('collapse');
		collapsedPageInit();
		$(".gifs-container.collapse").addClass('transition');
	});
}
// redirecting from homepage (homepage.html) to the collapsed page (collapsed.html)
else if($("body").hasClass('homepage')){

	$('body').load('collapsed.html', function() {
		$('body').removeClass();
		$('body').addClass('collapse');
		collapsedPageInit();
		$(".gifs-container.collapse").addClass('transition');
	});
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

function collapsedPageInit()
{
		windowHeight = $(window).height();
		windowWidth = $(window).width();
	ratio = windowHeight/windowWidth;
	widthOfGif = ratio*windowWidth*0.25;
		$(".gifs-container .container").css("width", windowWidth*0.25);
		$(".gifs-container .container").css("height", widthOfGif );
	numberOfGifImages = $('.gifs-container').children().length;	
	widthOfGifContainer = numberOfGifImages*ratio*(windowWidth/2) ;

		$(".gifs-container.collapse").css("width",widthOfGifContainer);
}


//this is the redirection from the landing to the homepage using the Enter Button
jQuery(document).ready(function($) {
	$.ajax({
	  url: "homepage.html",
	  // context: document.body
	}).success(function(r) {
	  // console.log(r);

	  homepage = $(r);
	});
	$("#circle").click(function(event) {
		/* Act on the event */
	$("body").removeClass();	
	$("body").addClass('homepage');
	$("body").html(homepage);

	});
});


//TO DO this method again
//Redirecting from the first small image in collapsed view to the bigger image
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
	  // console.log(r);

	  c = $(r);
	});

	setTimeout(function(){
	$(".gifs-container:not(.collapse)").show();
	$(".gifs-container.collapse").hide();
	$("body").removeClass("collapse");
	$("body").addClass('homepage');

		// console.log(c);
		$("body").html(c);

	},1000);


	});
});

