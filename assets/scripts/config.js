'use strict'
// https://dog-walkers.herokuapp.com/
// https://blooming-castle-95686.herokuapp.com/
let apiUrl
const apiUrls = {
  production: 'https://blooming-castle-95686.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
