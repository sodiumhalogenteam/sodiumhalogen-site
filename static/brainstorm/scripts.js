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

const getQueryVariable = (variable) => {
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] == variable) {
      return pair[1]
    }
  }
  return false
}

const deviceOS = getMobileOperatingSystem()

if (deviceOS === 'Andriod' || deviceOS === 'iOS') {
  const prompt = getQueryVariable('prompt')

  if (deviceOS === 'Andriod') {
    const now = new Date().valueOf()
    setTimeout(function () {
      if (new Date().valueOf() - now > 100) return
      window.location =
        'https://play.google.com/store/apps/details?id=com.shbrainstorm'
    }, 50)
  } else {
    const now = new Date().valueOf()
    setTimeout(function () {
      if (new Date().valueOf() - now > 100) return
      window.location =
        'https://apps.apple.com/us/app/brain-storm/id1508034751?ls=1'
    }, 50)
  }
  window.location = prompt ? `brainstorm://${prompt}` : 'brainstorm://'
}
