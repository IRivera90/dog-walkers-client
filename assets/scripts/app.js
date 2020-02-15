'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#update-dog').hide()
  $('#dog-create').hide()
  $('#dog-index').hide()
  $('#dog-update').hide()
  // smallpets
  $('#update-smallpet').hide()
  $('#smallpet-create').hide()
  $('#smallpet-index').hide()
  $('#smallpet-update').hide()
  authEvents.addHandlers()
})
