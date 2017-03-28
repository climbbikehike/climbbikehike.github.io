sliderInt = 1;
sliderNext = 2;

$(document).ready(function() {
	$('#slider > img#1').fadeIn(300);
	startSlider();
});

function startSlider(){
	imgCount = $('#slider > img').length;
	
	imgLoop = setInterval(function() {

		if(sliderNext > imgCount) {
			sliderNext = 1;	
			sliderInt = 1;
		}

		$('#slider > img').fadeOut(300);
		$('#slider > img#' + sliderNext).fadeIn(300);


	sliderInt = sliderNext;
	sliderNext = sliderNext + 1;
	}, 6000)
}

function prev() {
	newSlide = sliderInt -1;
	showSlide(newSlide);
}

function next() {
	newSlide = sliderInt +1;
	showSlide(newSlide);
}

function stopLoop() {
	window.clearInterval(imgLoop);
}

function showSlide(id){
	stopLoop();
	
		if(id > imgCount){
			id = 1;	
}
		else if(id < 1) {
			id = imgCount;
}
		$('#slider > img').fadeOut(300);
		$('#slider > img#' + id).fadeIn(300);


	sliderInt = id;
	sliderNext = id + 1;
	startSlider();
}

