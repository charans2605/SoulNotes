export function registerUser(user) {
  localStorage.setItem("soul_user", JSON.stringify(user))
}


export function getUser() {
  return JSON.parse(localStorage.getItem("soul_user"))
}


export function loginUser(email, password) {
  const user = getUser()
  if (!user) return false
  return user.email === email && user.password === password
}


export function isLoggedIn() {
  return localStorage.getItem("soul_loggedin") === "true"
}


export function setLoggedIn() {
  localStorage.setItem("soul_loggedin", "true")
}


export function logout() {
  localStorage.setItem("soul_loggedin", "false")
}
