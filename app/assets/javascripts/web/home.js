// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){
  // 顶部中英切换
  $('.js-text-switch li').each(function(){
    var returnName = $(this).find('a').data('name')
    $(this).find('a').text(returnName)
  })
  $('.js-text-switch li').mouseover(function(){
    returnName = $(this).find('a').data('ename')
    $(this).find('a').text(returnName)
    $(this).find('a').addClass('nav-border')
  })
  $('.js-text-switch li').mouseleave(function(){
    returnName = $(this).find('a').data('name')
    $(this).find('a').text(returnName)
    $(this).find('a').removeClass('nav-border')
  })

  // 主页第三部分宽高计算
  var lHeight = $('.js-height .l').width()/2
  var rHeight = (lHeight *2 -10)/3
  $('.js-height .l').find('a').height(lHeight)
  $('.js-height .r').find('a').height(rHeight)
})