'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// DOGS
const onAddDog = function (event) {
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
  api.removeDog(id)
    .then(ui.onRemoveDogSuccess)
    .catch()
}

const onUpdateDog = function (event) {
  const id = $(event.target).closest('section').data('id')
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateDog(id, data)
    .then(ui.onUpdateDogSuccess)
    .catch(ui.onUpdateDogFailure)
}

// SMALL PETS
const onAddSmallPet = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.addSmallPet(data)
    .then(ui.onAddSmallPetSuccess)
    .catch(ui.onAddSmallPetFailure)
}

const onGetAllSmallPets = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.showSmallPets(data)
    .then(ui.onShowSmallPetSuccess)
    .catch()
}

const onDeleteSmallPet = function (event) {
  const id = $(event.target).closest('section').data('id')
  api.removeSmallPet(id)
    .then(ui.onRemoveSmallPetSuccess)
    .catch()
}

const onUpdateSmallPet = function (event) {
  const id = $(event.target).closest('section').data('id')
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateSmallPet(id, data)
    .then(ui.onUpdateSmallPetSuccess)
    .catch(ui.onUpdateSmallPetFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp).trigger('reset')
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  // dogs
  $('#dog-create').on('submit', onAddDog)
  $('#dog-index').on('click', onGetAllDogs).trigger('reset')
  $('#doglist').on('click', '.destroyDog', onDeleteDog)
  $('#doglist').on('submit', '.updateDog', onUpdateDog)
  // smallpets
  $('#smallpet-create').on('submit', onAddSmallPet)
  $('#smallpet-index').on('click', onGetAllSmallPets).trigger('reset')
  $('#smallpetlist').on('click', '.destroySmallPet', onDeleteSmallPet)
  $('#smallpetlist').on('submit', '.updateSmallPet', onUpdateSmallPet)
}

module.exports = {
  addHandlers
}
