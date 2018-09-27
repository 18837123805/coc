require.config({
	baseUrl:'js/common',
	paths:{
		"jquery":"jquery",
		"bootstrap":"bootstrap",
		"swiper":"swiper"
	},
	map:{
		'*':{
			'css':'css'
		}
	},
	shim:{
		jquery: {
        	exports: 'jquery'
     	},
		bootstrap:{
	      	deps:['jquery']
	    },
	    swiper:{
	      	deps:['jquery']
	    }
	}
});

require(["jquery","swiper"],function($,Swiper){
	console.log('require加载完毕')
	var swiper = new Swiper('.swiper-container', {
		width: window.innerWidth,
		loop: true,
		effect : 'flip',
		autoplay: {
    		delay: 2000,
		    stopOnLastSlide: false,
		    disableOnInteraction: true,
	    },
	    pagination: {
	    	el: '.swiper-pagination',
	    	type: 'bullets',
	    }
    });
})


