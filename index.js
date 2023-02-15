let scoreHome = document.getElementById("score-home") 
let scoreGuest = document.getElementById("score-guest")

let countHome = 0
let countGuest = 0

function home1() {
    countHome += 1
    scoreHome.innerText = countHome
}

function home2() {
    countHome += 2
    scoreHome.innerText = countHome
}

function home3() {
    countHome += 3
    scoreHome.innerText = countHome
}

function guest1() {
    countGuest += 1
    scoreGuest.innerText = countGuest
}

function guest2() {
    countGuest += 2
    scoreGuest.innerText = countGuest
}

function guest3() {
    countGuest += 3
    scoreGuest.innerText = countGuest
}


function reset() {
    countGuest = 0
    countHome = 0
    scoreHome.textContent = countGuest
    scoreGuest.textContent = countHome
}

