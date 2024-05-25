const btnLike1 = ducument.getElementById("btnLike1")
const countLike1 = ducument.getElementById("countLike1")

function clickLikes(){
  let totalLikes = parsInt(countLike1.value) + 1
  countLike.textContent = totalLikes.toString()
}
