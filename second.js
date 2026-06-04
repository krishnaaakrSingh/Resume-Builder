let username = localStorage.getItem("username")
let a = document.getElementById("krishna").textContent = username + "!👋🏻"

let button = document.getElementById("button")

button.addEventListener("click",()=>{
  window.location.href = "third.html"
})
