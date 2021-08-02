$(document).ready(function () {

  AOS.init();
  
  $('body').on('click', '[href*="#"]', event => {
    $('html,body').stop().animate({ 
      scrollTop: $(event.target.hash).offset().top 
    }, 600)
  
    event.preventDefault()
  })

  AOS.init({

    disable: 'phone',
    offset: 120,
    duration: 800,
    once: false,

  });

});