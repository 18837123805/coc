require(["jquery","bootstrap","swiper","css!../../css/page/index.css"],function($){
	$(function(){
		
		// $('.navbar').on('activate.bs.scrollspy', function () {
		// })
		$('body').scrollspy({ target: '.navbar' })	
		$('[data-spy="scroll"]').each(function () {
		  var $spy = $(this).scrollspy('refresh');
		});
		var swiper = new Swiper('.swiper-container', {
		    pagination: {
		    	el: '.swiper-pagination',
		    },
	    });
		var searchfun = function(){
			// $('#inputBox').animate(
			// 	{
			// 		paddingTop:'200px',
			// 		width:'100px'
			// 	},
			// 	'slow'
			// );
			$('#inputBox').addClass('myKeyframes')
		}
		$('.icon-search').bind('click',searchfun);
	})
}
)