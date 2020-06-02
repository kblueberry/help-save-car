$(document).ready(function () {
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
})
