const store = require('./store')
const api = require('./api')
const showDogs = require('./templates/showdogs.handlebars')
const showSmallPets = require('./templates/showdogs.handlebars')

const signUpSuccess = function (data) {
  successfulMessage('Signed up successfully')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  failureMessage('Error on sign up')
}

const signInSuccess = function (data) {
  successfulMessage('Signed in successfully')
  store.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#dog-index').show()
  $('#dog-create').show()
}

const signInFailure = function () {
  failureMessage('Error on sign in')
}

const signOutSuccess = function () {
  successfulMessage('Signed out successfully')
  $('form').trigger('reset')
  store.user = null
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#doglist').hide()
  $('#dog-create').hide()
  $('#dog-index').hide()
  $('#change-password').hide()
}

const signOutFailure = function () {
  failureMessage('Error on sign out')
}

const changePasswordSuccess = function () {
  successfulMessage('Changed password successfully')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function () {
  failureMessage('Error on change password')
}
// DOGS
const onAddDogSuccess = function () {
  successfulMessage('Registered a new dog. Yay!')
  $('#dog-create').trigger('reset')
  $('#doglist').hide()
}

const onAddDogFailure = function () {
  failureMessage('Could not register new dog')
}

const onShowDogsSuccess = function (data) {
  const showDogsHtml = showDogs({ dogs: data.dogs })
  $('#doglist').show()
  $('#doglist').html(showDogsHtml)
  $('#doglist').trigger('reset')
  if (data.dogs.length === 0) {
    failureMessage('Please add dogs!')
  }
}

const onRemoveDogSuccess = function (data) {
  successfulMessage(':(')
  $('.oneDog').empty()
  api.showDogs(data)
    .then(onShowDogsSuccess)
    .catch()
}

const onUpdateDogSuccess = function (data) {
  successfulMessage('Dog updated')
  $('.updateDog').trigger('reset')
  $('#doglist').hide()
}

const onUpdateDogFailure = function (data) {
  failureMessage('Failed to update')
}

// SMALLPETS

const onAddSmallPetSuccess = function () {
  successfulMessage('Registered a new pet. Yay!')
  $('#smallpet-create').trigger('reset')
  $('#smallpetlist').hide()
}

const onAddSmallPetFailure = function () {
  failureMessage('Could not register new pet')
}

const onShowSmallPetsSuccess = function (data) {
  const showSmallPetsHtml = showSmallPets({ smallpets: data.smallpets })
  $('#smallpetslist').show()
  $('#smallpetslist').html(showSmallPetsHtml)
  $('#smallpetslist').trigger('reset')
  if (data.smallpets.length === 0) {
    failureMessage('Please add some pets!')
  }
}

const onRemoveSmallPetSuccess = function (data) {
  successfulMessage(':(')
  $('.oneSmallPet').empty()
  api.showSmallPets(data)
    .then(onShowSmallPetsSuccess)
    .catch()
}

const onUpdateSmallPetSuccess = function (data) {
  successfulMessage('Pet updated')
  $('.updateSmallPet').trigger('reset')
  $('#smallpetlist').hide()
}

const onUpdateSmallPetFailure = function (data) {
  failureMessage('Failed to update')
}

// MESSAGES
const successfulMessage = function (message) {
  $('#message').show().text(message)
  // $('#message').addClass('alert-info')
  setTimeout(() => $('#message').hide(), 3000)
}

const failureMessage = function (message) {
  $('#message').show().text(message)
  // $('#message').addClass('alert-info')
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
  onUpdateDogFailure,
  onAddSmallPetSuccess,
  onAddSmallPetFailure,
  onShowSmallPetsSuccess,
  onRemoveSmallPetSuccess,
  onUpdateSmallPetSuccess,
  onUpdateSmallPetFailure
}
