// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){
  $('.js-text-switch li').each(function(){
    var returnName = $(this).find('a').data('name')
    $(this).find('a').text(returnName)
  })

  $('.js-text-switch li').mouseover(function(){
    returnName = $(this).find('a').data('ename')
    $(this).find('a').text(returnName)
  })

  $('.js-text-switch li').mouseleave(function(){
    returnName = $(this).find('a').data('name')
    $(this).find('a').text(returnName)
  })

})