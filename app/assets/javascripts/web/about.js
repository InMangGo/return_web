$(function(){
	$('.js-tab-switch .about-content-top .item').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active')
		$('.js-tab-switch .about-content-bottom div').removeClass('active')
		var aboutC = $(this).data('name')
		$(aboutC + '').addClass('active').siblings().removeClass('active')
	})
	$('.js-tab-switch .about-content-bottom .item').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active')
		$('.js-tab-switch .about-content-top div').removeClass('active')
		var aboutC = $(this).data('name')
		$(aboutC + '').addClass('active').siblings().removeClass('active')
	})

})