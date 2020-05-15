'use strict'
/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */

const getMobileOperatingSystem = () => {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera

  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone'
  } else if (/android/i.test(userAgent)) {
    return 'Android'
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS'
  }

  return 'unknown'
}

const deviceOS = getMobileOperatingSystem()

const getQueryVariable = (variable) => {
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] == variable) {
      return pair[1]
    }
  }
  return ''
}

const prompt = getQueryVariable('prompt')

// if (deviceOS === 'Andriod' || deviceOS === 'iOS') {
//   window.location = `brainstorm://${prompt}`
// }
