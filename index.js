$(document).ready(function () {
  $('#open-lng-options').popover({
    content: $(function () {
      $('.lng-settings').append($('.popover-content'))
    }),
    html: true,
  })

  $('.popover-dismissible').popover({
    trigger: 'focus',
  })

  $('#open-lng-options').on('click', function (event) {
    event.preventDefault()
    $('.popover-content').removeClass('hidden')
    $('#open-lng-options').popover('show')
  })

  // Popover hides on clicking behind the focus, work in progress
  // $('body').on('click', function (e) {
  //   $('#open-lng-options').each(function () {
  //     if (
  //       !$(this).is(e.target) &&
  //       $(this).has(e.target).length === 0 &&
  //       $('.pІopover-content').has(e.target).length === 0
  //     ) {
  //       $(this).popover('hide')
  //     }
  //   })
  // })

  $('#action-sign-up').on('click', function (event) {
    event.preventDefault()
    $('.login-form').addClass('hidden')
    $('.signup-form').removeClass('hidden')
  })

  $('#action-log-in').on('click', function (event) {
    event.preventDefault()
    $('.signup-form').addClass('hidden')
    $('.login-form').removeClass('hidden')
  })

  $('.sign-up, .log-in').on('click', function () {
    event.preventDefault()
    $('#profile').removeClass('hidden')
  })

  $('.get-phone-code').on('click', function (event) {
    event.preventDefault()
    $('#code-modal').modal('show')
    $('#code-modal').addClass('border-danger')
    $('#code-modal').css('border-width', '2px')
  })

  $('.agree').on('click', function () {
    event.preventDefault()
    // $('#error-modal').modal('show')
    // $('#error-modal').css('z-index', '10000')
    // $('#error-modal').addClass('border-danger')
    // $('#error-modal').css('border-width', '2px')
    $('#success-modal').modal('show')
    $('#success-modal').css('z-index', '10000')
    $('#success-modal').addClass('border-success')
    $('#success-modal').css('border-width', '2px')
  })

  $('.top-up').on('click', function () {
    $('#top-up-account-modal').modal('show')
  })

  $('.switcher-option').on('click', function () {
    $('.circle-switcher').addClass('circle-switcher--active')
  })
})

var slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = $('.mySlides')
  var dots = $('.dot')

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}
