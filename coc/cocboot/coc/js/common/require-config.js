require.config({
	baseUrl:'js/common',
	paths:{
		"jquery":"jquery",
		"bootstrap":"bootstrap",
		"swiper":"swiper",
		"iscroll":"iscroll",
		"demoUtils":"demoUtils"
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
	    },
	    iscroll:{
	    	deps:['jquery']
	    }
	}
});

require(["jquery","swiper","iscroll","demoUtils"],function($,Swiper,IScroll){
	window.onload = function() {
		var swiper = new Swiper('.swiper-container', {
			width: window.innerWidth,
			loop: true,
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
	    var myScroll = new IScroll('#wrapper', {
	    	mouseWheel: true,
	    	scrollbars: true,
			scrollX: true,
			scrollY: true,
			momentum: true,
			snap: true
			// bounceEasing: 'elastic',
			// bounceTime: 1200,
			// freeScroll: true
		});
	}
})


