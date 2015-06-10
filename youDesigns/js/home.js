$(document).ready(function(){
	// console.log(true);
	$(".clickme").click(function(){
		var field = $(".test1").css("background-color");
		console.log(field);
		if( field === 'rgb(255, 0, 0)'){
			// console.log(true);
		$(".test1").css("background-color","green");}
		else
		{
		$(".test1").css("background-color","red");	
		}
	});
});



$(document).ready(function(){
	// console.log(true);
	$(".validate").click(function(){
		// event.preventDefault();
	 // window.location.replace("index.html#Black");
  // return false;
  	var arrayOfInputs = $("form input");

  	username = console.log($(arrayOfInputs[0]).val());
  	password = console.log($(arrayOfInputs[1]).val());


  	// console.log($(arrayOfInputs[1]));
  	// $.each(arrayOfInputs,function(index, val) {
  	// 	console.log($(this).val());
  	// })

	});
	// console.log(isNumeric("8Hello"));
});





//-----------------------------MY SLIDER----------------------------------//
$(document).ready(function(){
		initializeSlider();
		$(".icon-right-open.my-slider").click(function(){

		var numberOfSlides = $(".slides-container").children().length;
		var index =  $(".my-slider-slide.active").index();
		var currentSlide = index+1;
		var nextSlide = index +2;
		if(index == (numberOfSlides-1))
			{index = -1;
			 nextSlide = 1;
			}	
		// index => percentage
			// 0 => 100
			// 1 => 200
			// 2 => 300
			// 3 => 400
			// 5 => 500
		//But in this special case of 4 slides
			// 0 => 100
			// 1 => 200
			// 2 => 300	
			// 3 => 0% and it is like right:0px

			var moveBy = (index+1)*100;
						console.log(moveBy);
			

	$(".slides-container").css("right",moveBy+"%");
	$(".my-slider-slide:nth-child("+currentSlide+")").removeClass("active");
	$(".my-slider-slide:nth-child("+nextSlide+")").addClass("active");

	// used for the bullets

	$("ul.my-slider li:nth-child("+currentSlide+")").removeClass("active");
	$("ul.my-slider li:nth-child("+nextSlide+")").addClass("active");

		})
})

$(document).ready(function(){
		$(".icon-left-open.my-slider").click(function(){

		var numberOfSlides = $(".slides-container").children().length;
		var index =  $(".my-slider-slide.active").index();
			
		var currentSlide = index+1;
		var previousSlide = index;
		if(index == 0)
		{
			index = numberOfSlides;
			previousSlide = numberOfSlides;
		}
		// index => percentage
			// 0 => 500
			// 1 => 0
			// 2 => 100
			// 3 => 200
			// 4 => 300
			// 5 => 400
		//But in this special case of 4 slides
			// 0 => 300
			// 1 => 0
			// 2 => 100
			// 3 => 200
			console.log(index);
			var moveBy = (index-1)*100;
					console.log(moveBy);
			
			
		
	$(".slides-container").css("right",moveBy+"%");
	$(".my-slider-slide:nth-child("+currentSlide+")").removeClass("active");
	$(".my-slider-slide:nth-child("+previousSlide+")").addClass("active");

	//   used for bullets

	$("ul.my-slider li:nth-child("+currentSlide+")").removeClass("active");
	$("ul.my-slider li:nth-child("+previousSlide+")").addClass("active");

		})
})

function initializeSlider(){

//making the first slide active in this command
$(".my-slider-slide:nth-child(1)").addClass("active");

//---------------------------------------------------


//Setting Slider with the correct length for slides and container of slides
 numberOfSlides = $(".slides-container").children().length;
 widthOfSlides = numberOfSlides*100;
 widthOfOneSlide = (1/numberOfSlides)*100;

$(".slides-container").css("width",widthOfSlides+"%");
$(".my-slider-slide").css("width",widthOfOneSlide+"%");

console.log("Width Of Slides: "+ widthOfSlides);
console.log("Width Of One Slide: "+widthOfOneSlide);
//------------------------------------------------------------------------


//inserting the bullets after .my-slider class
// $( "<ul class = 'my-slider'></ul>" ).insertAfter( "div.my-slider" );
$("div.my-slider").after("<ul class = 'my-slider'></ul>");
for (i = 0; i < numberOfSlides; i++) { 
    $("ul.my-slider").append("<li></li>");
}
$("ul.my-slider li:nth-child(1)").addClass("active");

}


//-----------------------END-OF-MY SLIDER----------------------------------//


// Ajax Loading

$(document).ready(function(){
$("#newArrivals").click(function(e){
	e.preventDefault();
$( "#content" ).load( "newArrivals.html" );
})
})