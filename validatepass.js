function validatePassword(password) {
  if (password.length >= 8 && hasLowerCase === true && hasUpperCase === true && hasSpecialChar === true) return true
}

function hasLowerCase(password) {
  for (let char = 0; char < password.length; char++) {
    if (char === char.toLowerCase()) break
  }

  return true
}

function hasUpperCase(password) {
  for (let char = 0; char < password.length; char++) {
    // let currentChar = password [i]  should this be added?
    if (char === char.toUpperCase()) break
  }

  return true
}

function hasSpecialChar(password) {
  let specialChars = '!@#$%^&*?><+='

  for (let char = 0; char < password.length; char++) {
    if (char === char.includes(specialChars)) break
  }

  return true
}
