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
			// autoplay: {
	  //   		delay: 2000,
			//     stopOnLastSlide: false,
			//     disableOnInteraction: true,
		 //    },
		    pagination: {
		    	el: '.swiper-pagination',
		    	type: 'bullets',
		    }
	    });
	    var myScroll = new IScroll('#wrapper', {
	    	mouseWheel: true,
			scrollX: true,
			scrollY: true,
			momentum: true,
			snap: true,
			// mouseWheel: true,//允许鼠标滚动
			// scrollbars:true,//显示滚动条
			bounce:true,//反弹动画
			click:true,//允许容器内元素能绑定点击事件
			// disableMouse: true,//禁用鼠标
			// scrollX:true,//横向可以用
			// scrollY:true,//纵向可以使用
			startX:0,//X方向滚动的起始位置
			startY:0//X方向滚动的起始位置
			// bounceEasing: 'elastic',
			// bounceTime: 1200,
			// freeScroll: true
		});
	}
})


