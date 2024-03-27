let email = document.getElementById("email")
let password = document.getElementById("password")
let loginBtn = document.getElementById("loginBtn")
let arr = []
loginBtn.onclick = () =>{
  let user = {
    email : email.value,
    password: password.value
  }
  let userJson = JSON.stringify(user)
  arr.push(userJson)
  let info = localStorage.setItem("Accounts", arr)
  email.value = ""
  password.value = ""
}

