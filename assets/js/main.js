$(document).ready(function () {

  AOS.init()
  
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
  })

  var countdownSeconds = 1056605

  let timerID = setInterval(() => {
    countdownSeconds--

    if (countdownSeconds == 0) {
      clearInterval(timerID)
    }

    countdownDraw(countdownSeconds)
  }, 1000)

  const countdownDraw = (initialSeconds) => {
    let days = Math.floor(initialSeconds / 86400)
    let hours = Math.floor((initialSeconds - (days * 86400)) / 3600)
    let minutes = Math.floor((initialSeconds - (days * 86400) - (hours * 3600)) / 60)
    let seconds = Math.floor((initialSeconds - (days * 86400) - (hours * 3600) - (minutes * 60)))

    if (seconds < 10) {
      seconds = '0' + seconds
    }

    if (minutes < 10) {
      minutes = '0' + minutes
    }

    if (hours < 10) {
      hours = '0' + hours
    }

    $('#countdownDays').text(days)
    $('#countdownHours').text(hours)
    $('#countdownMinutes').text(minutes)
    $('#countdownSeconds').text(seconds)
  }

  const menuOpen = () => {
    $('body').addClass('overflow-hidden')

    $('#menu').css("display", "flex")
    setTimeout(() => {
      $('#menu').addClass('active')
    }, 1)
  }

  $('#menuTrigger').click(menuOpen)

  const menuClose = () => {
    $('body').removeClass('overflow-hidden')

    $('#menu').removeClass('active')

    setTimeout(() => {
      $('#menu').css("display", "none")
    }, 300)
  }

  $('#menu .close').click(menuClose)

  $('#menu li a').click(menuClose)

})