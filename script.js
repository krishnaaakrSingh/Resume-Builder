let firstInput = document.getElementById("input1")
let secondInput = document.getElementById("input2")
let thirdInput = document.getElementById("input3")
let fourthInput = document.getElementById("input4")
let btn = document.querySelector(".btn")
let icon = document.querySelector(".img")
let icon1 = document.querySelector(".img1")
let show = 0
let show1 = 0


icon.addEventListener("click",()=>{
  if(show===0){
    show = 1
    thirdInput.type = "text"
    
  }
  else{
    show = 0
    thirdInput.type = "password"
  }
})


icon1.addEventListener("click",()=>{
  
  if (show1===0){
    show1 = 1
    fourthInput.type = "text"
  }
  else{
    show1 = 0
    fourthInput.type = "password"
  }
})


btn.addEventListener("click",()=>{
  
  if(firstInput.value===""|| secondInput.value===""|| thirdInput.value===""|| fourthInput.value===""){
  alert("Oops First Complete the form")
  
  firstInput.value =""
  secondInput.value =""
  thirdInput.value =""
  fourthInput.value =""
  return;
  }
  
    if(thirdInput.value !== fourthInput.value){
    alert("Wrong pass")
    return
  }
  localStorage.setItem("username", firstInput.value)
  window.location.href = "second.html"


})
  
