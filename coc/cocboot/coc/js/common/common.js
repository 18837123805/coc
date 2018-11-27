define(["swiper"],function(Swiper) {
	return function(){
		var swiper = new Swiper('.swiper-container', {
		    // pagination: {
		    // 	el: '.swiper-pagination',
		    // }
		    direction: 'horizontal',
	        loop: true,
	        autoplay: 15000,
	        speed: 15000,
	        // autoplayDisableOnInteraction: false,
	        //分页器
	        pagination: '.swiper-pagination'
	    });
	}
});