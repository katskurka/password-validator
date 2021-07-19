function validatePassword(password) {
  let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let specialChars = '!@#$%^&*?><+='
  let checkNumbers = '0123456789'
  let correctLength = false
  let isLower = false
  let isUpper = false
  let hasSpecial = false
  let isNumber = false

  for (let char = 0; char < password.length; char++) {
    if (password.length >= 8) {
      correctLength = true
    }
    if (lowerCaseLetters.includes(password[char])) {
      isLower = true
    }
    if (upperCaseLetters.includes(password[char])) {
      isUpper = true
    }
    if (specialChars.includes(password[char])) {
      hasSpecial = true
    }
    if (checkNumbers.includes(password[char])) {
      isNumber = true
    }
  }

  return correctLength && isLower && isUpper && hasSpecial && isNumber
}

module.exports = validatePassword

/* Original code before refactoring: 
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

module.exports = validatePassword */
