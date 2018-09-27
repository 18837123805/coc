require(["jquery","bootstrap","css!../../css/page/index.css"],function($,bootstrap){
	$(function(){
		
		// $('.navbar').on('activate.bs.scrollspy', function () {
		// })
		$('body').scrollspy({ target: '.navbar' })	
		$('[data-spy="scroll"]').each(function () {
		  	var $spy = $(this).scrollspy('refresh');
		});
		// var searchfun = function(){
		// 	$('#inputBox').addClass('myKeyframes')
		// }
		// $('.icon-search').bind('click',searchfun);
	})
}
)