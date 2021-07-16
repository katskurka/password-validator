function correctLength(password) {
  if (password.length >= 8) {
    return true
  }
  else {
    return false
  }
}
function hasLowerCase(password) {
  for (let char = 0; char < password.length; char++) {
    if (password[char] === password[char].toLowerCase()) {
      return true
    }
    else {
      return false
    }
  }
}

function hasUpperCase(password) {
  for (let char = 0; char < password.length; char++) {
    // let currentChar = password [i]  should this be added?
    if (password[char] === password[char].toUpperCase()) break
  }

  return true
}

function hasSpecialChar(password) {
  let specialChars = '!@#$%^&*?><+='

  for (let char = 0; char < password.length; char++) {
    if (password[char] === password[char].includes(specialChars)) break
  }

  return true
}

function hasNumber(password) {
  for (let char = 0; char < password.length; char++) {
    if (password[char] === !NaN) break
  }

  return true
}

function validatePassword(password) {
  let passwordLength = false
  let lowerCase = false
  let upperCase = false
  let specialCharacter = false
  let checkNumber = false

  passwordLength = correctLength(password)
  lowerCase = hasLowerCase(password)
  upperCase = hasUpperCase(password)
  specialCharacter = hasSpecialChar(password)
  checkNumber = hasNumber(password)

  return passwordLength && lowerCase && upperCase & specialCharacter && checkNumber
}

module.exports = validatePassword
