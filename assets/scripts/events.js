'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onAddDog = function (event) {
  console.log(event)
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.addDog(data)
    .then(ui.onAddDogSuccess)
    .catch(ui.onAddDogFailure)
}

const onGetAllDogs = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.showDogs(data)
    .then(ui.onShowDogsSuccess)
    .catch()
}

const onDeleteDog = function (event) {
  const id = $(event.target).closest('section').data('id')
  console.log(id)
  api.removeDog(id)
    .then(ui.onRemoveDogSuccess)
    .catch()
}

const onUpdateDog = function (event) {
  const id = $(event.target).closest('section').data('id')
  console.log(id)
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateDog(id, data)
    .then(ui.onUpdateDogSuccess)
    .catch(ui.onUpdateDogFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#dog-create').on('submit', onAddDog)
  $('#dog-index').on('click', onGetAllDogs).trigger('reset')
  $('#doglist').on('click', '.destroyDog', onDeleteDog)
  $('#doglist').on('submit', '.updateDog', onUpdateDog)
  $('form').trigger('reset')
}

module.exports = {
  addHandlers
}
