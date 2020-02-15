'use strict'
const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}
const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const addDog = function (data) {
  return $.ajax({
    url: config.apiUrl + '/dogs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const showDogs = function () {
  return $.ajax({
    url: config.apiUrl + '/dogs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const removeDog = function (id) {
  return $.ajax({
    url: config.apiUrl + '/dogs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateDog = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/dogs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
// SMALLPETS
const addSmallPet = function (data) {
  return $.ajax({
    url: config.apiUrl + '/smallpets',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const showSmallPets = function () {
  return $.ajax({
    url: config.apiUrl + '/smallpets',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const removeSmallPet = function (id) {
  return $.ajax({
    url: config.apiUrl + '/smallpets/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateSmallPet = function (id, data) {
  return $.ajax({
    url: config.apiUrl + '/smallpets/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addDog,
  showDogs,
  removeDog,
  updateDog,
  addSmallPet,
  showSmallPets,
  removeSmallPet,
  updateSmallPet
}
