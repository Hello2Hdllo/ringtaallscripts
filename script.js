window.alert("Hello, welcome to my website!")
console.log("test")
const a = document.getElementById("pointsbutton")
const b = document.getElementById("label1")
let points = 0
a.onclick = function(){
  points = points + 1
  b.textContent = `${points} points`
}
