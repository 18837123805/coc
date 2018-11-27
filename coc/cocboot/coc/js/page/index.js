require(["jquery","bootstrap","css!../../css/page/index.css"],function($,bootstrap){
	$(function(){
		$('body').scrollspy({ target: '.navbar' })	
		$('[data-spy="scroll"]').each(function () {
		  	var $spy = $(this).scrollspy('refresh');
		});
	})
}
)