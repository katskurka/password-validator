function correctLength(password) {
  if (password.length >= 8) {
    return true
  }
  else {
    return false
  }
}
function hasLowerCase(password) {
  let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  let isLower = false

  for (let char = 0; char < password.length; char++) {
    if (lowerCaseLetters.includes(password[char])) {
      isLower = true
    }
  }

  return isLower
}

function hasUpperCase(password) {
  let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let isUpper = false

  for (let char = 0; char < password.length; char++) {
    if (upperCaseLetters.includes(password[char])) {
      isUpper = true
    }
  }

  return isUpper
}

/* function hasUpperCase(password) {
  let isUpper = false

  for (let char = 0; char < password.length; char++) {
    if (password[char] === password[char].toUpperCase()) {
      isUpper = true
    }
  }

  return isUpper
} */

function hasSpecialChar(password) {
  let specialChars = '!@#$%^&*?><+='
  let hasSpecial = false

  for (let char = 0; char < password.length; char++) {
    if (specialChars.includes(password[char])) {
      hasSpecial = true
    }
  }

  return hasSpecial
}

function hasNumber(password) {
  let checkNumbers = '0123456789'
  let isNumber = false

  for (let char = 0; char < password.length; char++) {
    if (checkNumbers.includes(password[char])) {
      isNumber = true
    }
  }

  return isNumber
}

function validatePassword(password) {
  return correctLength(password) && hasLowerCase(password) && hasUpperCase(password) &&
  hasSpecialChar(password) && hasNumber(password)
}

module.exports = validatePassword
