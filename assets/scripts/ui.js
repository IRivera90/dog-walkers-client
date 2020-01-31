const store = require('./store')
const showDogs = require('./templates/showdogs.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  store.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-passwords').show()
  $('#sign-out').show()
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('form').trigger('reset')
  store.user = null
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
}

const changePasswordFailure = function () {
  $('#message').text('Error on change password')
}

const onAddDogSuccess = function () {
  $('#message').text('Registered a new dog. Yay!')
}

const onAddDogFailure = function () {
  $('#message').text('Could not register new dog')
}

const onShowDogsSuccess = function (data) {
  const showDogsHtml = showDogs({ dogs: data.dogs })
  $('#doglist').append(showDogsHtml)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  onAddDogSuccess,
  onAddDogFailure,
  onShowDogsSuccess
}
