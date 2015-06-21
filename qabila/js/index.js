		$.ajax({
	  url: "index.html",
	  // context: document.body
		}).success(function(r) {
		  // console.log(r);

	 		 index = $(r);
				});

$(document).ready(function(){
		$(document).on("click", ".menu-outer", function(){

	$(this).toggleClass('collapse');

if($("body").hasClass('homepage')){

	// redirecting from homepage to the collapsed page
$('body').load('index.html', function() {
    // callback runs when first load is finished
    // $('#load').load('ajax/test2.html');
    // console.log(true);
    indexPageInit();

    	setTimeout(function(){
    		$(".menu-outer").addClass('collapse');
	$("body").removeClass('homepage');
	$("body").addClass("collapse");
	$(".menu").addClass("collapse");
	$(".menu img").attr("src","img/collapseMenuLines.png");
	$(".gifs-container.collapse").show();
	$(".gifs-container:not(.collapse)").hide();
	$(".gifs-container.collapse").addClass('transition');
},100);
    

});

// 	console.log("Here");
// 	$("body").html(index);
// console.log("Here As Well ");
	




}
else
{

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



//setting up the landing page and the collapsed page
function indexPageInit() {
			windowHeight = $(window).height();
	windowWidth = $(window).width();

	ratio = windowHeight/windowWidth;

	widthOfGif = ratio*windowWidth*0.25;
	$(".gifs-container .container").css("width", windowWidth*0.25);
		$(".gifs-container .container").css("height", widthOfGif );

		numberOfGifImages = $('.gifs-container').children().length;	
	widthOfGifContainer = numberOfGifImages*ratio*500 ;
	// console.log(widthOfGifContainer);
	


	$(".gifs-container.collapse").css("width",widthOfGifContainer);
	$(".gifs-container.collapse").hide();
	$("#circle").hide();
}

jQuery(document).ready(function($) {
			windowHeight = $(window).height();
	windowWidth = $(window).width();

	ratio = windowHeight/windowWidth;

	widthOfGif = ratio*windowWidth*0.25;
	$(".gifs-container .container").css("width", windowWidth*0.25);
		$(".gifs-container .container").css("height", widthOfGif );

		numberOfGifImages = $('.gifs-container').children().length;	
	widthOfGifContainer = numberOfGifImages*ratio*500 ;
	// console.log(widthOfGifContainer);
	


	$(".gifs-container.collapse").css("width",widthOfGifContainer);
	$(".gifs-container.collapse").hide();
});



//this is the redirection from the landing to the homepage
jQuery(document).ready(function($) {
	$.ajax({
	  url: "homepage.html",
	  // context: document.body
	}).success(function(r) {
	  // console.log(r);

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

