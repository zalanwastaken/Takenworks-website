//try catch me !
const image = document.getElementById("neocitiesimage")
const para = document.getElementById("trycatchmep")
const scorepara = document.getElementById("score")
let score = 0
image.addEventListener("mouseover", function(){
    const randomx = Math.floor(Math.random() * (window.innerWidth - image.offsetWidth))
    const randomy = Math.floor(Math.random() * (window.innerHeight - image.offsetHeight))
    image.style.position = "absolute"
    para.style.position = "absolute"
    image.style.top = randomy + "px"
    image.style.left = randomx + "px"
    para.style.top = (randomy + 40) + "px"
    para.style.left = (randomx + (image.offsetWidth / 4)) + "px"
    score++
    scorepara.textContent = "Score: " + score
})
