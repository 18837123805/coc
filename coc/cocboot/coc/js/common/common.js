define(["swiper"],function(Swiper) {
	return function(){
		var swiper = new Swiper('.swiper-container', {
		    // pagination: {
		    // 	el: '.swiper-pagination',
		    // }
		    direction: 'horizontal',
	        loop: true,
	        autoplay: 1500,
	        speed: 1500,
	        autoplayDisableOnInteraction: false,
	        //分页器
	        pagination: '.swiper-pagination'
	    });
	}
});