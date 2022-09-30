$(function () {
	$(".trigger").click(function () {
		$(this).toggleClass("active");
		$(".gnb").toggleClass("active");
	});
	$("section, .menu a").click(function () {
		$(".gnb").removeClass("active");
		$(".trigger").removeClass("active");
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() > 50) {
			$("header").addClass("active");
			$(".gototop").addClass("active");
		} else {
			$("header").removeClass("active");
			$(".gototop").removeClass("active");
		}
	});

	// slick.js
	$(".region-slider").slick({
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 768, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow: 1,
                    slidesToScroll: 1
				},
			},
		],
	});

	// char slick.js
	$(".char-photo").slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});
});
