function validatePassword(password) {
  if (password.length >= 8 && passwordLowerCase === true && passwordUpperCase === true && passwordSpecialChar === true) return true
}

function passwordLowerCase(password) {
  for (let char = 0; char < password.length; char++) {
    if (char === char.toLowerCase()) break
  }

  return true
}

function passwordUpperCase(password) {
  for (let char = 0; char < password.length; char++) {
    if (char === char.toUpperCase()) break
  }

  return true
}

function passwordSpecialChar() {

}