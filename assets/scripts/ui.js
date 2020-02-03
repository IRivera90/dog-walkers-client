const store = require('./store')
const api = require('./api')
const showDogs = require('./templates/showdogs.handlebars')

const signUpSuccess = function (data) {
  $('#message').show().text('Signed up successfully')
  $('#sign-up').trigger('reset')
  setTimeout(() => $('#message').hide(), 3000)
}

const signUpFailure = function () {
  $('#message').show().text('Error on sign up')
  setTimeout(() => $('#message').hide(), 3000)
}

const signInSuccess = function (data) {
  $('#message').show().text('Signed in successfully')
  store.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-passwords').show()
  $('#sign-out').show()
  $('#dog-index').show()
  $('#dog-create').show()
  setTimeout(() => $('#message').hide(), 3000)
}

const signInFailure = function () {
  $('#message').show().text('Error on sign in')
  setTimeout(() => $('#message').hide(), 3000)
}

const signOutSuccess = function () {
  $('#message').show().text('Signed out successfully')
  $('form').trigger('reset')
  store.user = null
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#doglist').hide()
  $('#dog-create').hide()
  $('#dog-index').hide()
  setTimeout(() => $('#message').hide(), 3000)
}

const signOutFailure = function () {
  $('#message').show().text('Error on sign out')
  setTimeout(() => $('#message').hide(), 3000)
}

const changePasswordSuccess = function () {
  $('#message').show().text('Changed password successfully')
  setTimeout(() => $('#message').hide(), 3000)
}

const changePasswordFailure = function () {
  $('#message').show().text('Error on change password')
  setTimeout(() => $('#message').hide(), 3000)
}

const onAddDogSuccess = function () {
  $('#message').show().text('Registered a new dog. Yay!')
  $('#dog-create').trigger('reset')
  $('#doglist').hide()
  setTimeout(() => $('#message').hide(), 3000)
}

const onAddDogFailure = function () {
  $('#message').show().text('Could not register new dog')
  setTimeout(() => $('#message').hide(), 3000)
}

const onShowDogsSuccess = function (data) {
  const showDogsHtml = showDogs({ dogs: data.dogs })
  $('#doglist').show()
  $('#doglist').html(showDogsHtml)
  $('#doglist').trigger('reset')
}

const onRemoveDogSuccess = function (data) {
  $('#message').show().text(':(')
  $('.oneDog').empty()
  api.showDogs(data)
    .then(onShowDogsSuccess)
    .catch()
  setTimeout(() => $('#message').hide(), 3000)
}

const onUpdateDogSuccess = function (data) {
  $('#message').show().text('Dog updated')
  $('.updateDog').trigger('reset')
  $('#doglist').hide()
  setTimeout(() => $('#message').hide(), 3000)
}

const onUpdateDogFailure = function (data) {
  $('#message').show().text('Failed to update')
  setTimeout(() => $('#message').hide(), 3000)
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
  onShowDogsSuccess,
  onRemoveDogSuccess,
  onUpdateDogSuccess,
  onUpdateDogFailure
}
