require.config({
	baseUrl:'js/common',
	paths:{
		"jquery":"jquery",
		"bootstrap":"bootstrap",
		"swiper":"swiper.min"
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
	    swiper: {
	    	exports: 'swiper'
	    }
	}
});

require(["jquery","bootstrap"],function($){
	console.log('require加载完毕')
})
