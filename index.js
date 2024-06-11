const btnDisLike1 = document.getElementById("btnDisLike1")
const countDisLike1 = document.getElementById("countDisLike1")

function clickDisLike1(){
  let totalDisLikes = parseInt(countDisLike1.value) + 1
  countDisLike1.textContent = totalDisLikes.toString()
}  
btnDisLike1.addEventListener("click",clickDisLike1)

const btnDisLike2 = document.getElementById("btnDisLike2")
const countDisLike2 = document.getElementById("countDisLike2")

function clickDisLike2(){
  let totalDisLikes = parseInt(countDisLike2.value) + 1
  countDisLike2.textContent = totalDisLikes.toString()
}  
btnDisLike2.addEventListener("click",clickDisLike2)
