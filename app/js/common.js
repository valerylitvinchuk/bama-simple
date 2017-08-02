$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// var slideNow = 1;
	// var slideCount = $('.slidewrapper').children().length;
	// var translateWidth = 0;
	// var slideInterval = 2000;

	// function nextSlide() {
	// 	if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
	// 		$('.slidewrapper').css('transform', 'translate(0, 0)');
	// 		slideNow = 1;
	// 	} else {
	// 		translateWidth = -$('.viewport').width() * (slideNow);
	// 		$('.slidewrapper').css({
 //            'transform': 'translate(' + translateWidth + 'px, 0)',
 //            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
 //            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'});
	// 		slideNow++;
	// 	}
	// }

	// setInterval(nextSlide, slideInterval);

	// console.log(slideCount);

});
