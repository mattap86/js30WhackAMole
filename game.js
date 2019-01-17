const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
let lastHole

document.getElementsByClassName('.start').addEventListener('click', function() {
    startGame
})

const startGame = () => {
    scoreBoard.textContent = 0
    timeUp = false
    score = 0
    peep()
    setTimeout(() => timeUp = true, 10000)
}

const randomTime = (min, max) => {
    return Math.random() * (max - min) * min)
}

const randomHole = holes => {
    const index = Math.floor(Math.random() * holes.length)
    const hole = holes[index]
    if (hole === lastHole) {
        return randomHole(holes)
    } 
    lastHole = hole
    return hole
}