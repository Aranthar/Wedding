$(document).ready(function () {
  
  $('body').on('click', '[href*="#"]', event => {
    $('html,body').stop().animate({ 
      scrollTop: $(event.target.hash).offset().top 
    }, 600)
  
    event.preventDefault()
  })

});