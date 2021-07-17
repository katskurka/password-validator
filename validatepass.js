function correctLength(password) {
  if (password.length >= 8) {
    return true
  }
  else {
    return false
  }
}
function hasLowerCase(password) {
  let hasLower = false

  for (let char = 0; char < password.length; char++) {
    if (password[char] === password[char].toLowerCase()) {
      hasLower = true
    }
  }

  return hasLower
}

function hasUpperCase(password) {
  let hasUpper = false

  for (let char = 0; char <password.length; char++) {
    if (password[char] === password[char].toLowerCase()) {
      hasLower = true
    }
  }

  return hasUpper
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
  return correctLength(password) && hasLowerCase(password) && hasUpperCase(password) && hasSpecialChar(password) && hasNumber(password)
}

module.exports = validatePassword
