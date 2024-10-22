
let gameIsActive = false
let first_cont = document.querySelector(".first_cont")
let second_cont = document.querySelector(".second_cont")
let game_cont = document.querySelector(".game")
let start_button = document.querySelector(".play_button")


let player = document.querySelector(".player");
let isJumping = false;
let rightPressed = false;
let leftPressed = false;
let spacePressed = false;
document.addEventListener('keydown', function(event) {
    if (gameIsActive) {
        if (event.code == 'KeyD') {
            rightPressed = true;
        }
        else if (event.code == 'KeyA') {
            leftPressed = true;
        }
        else if (event.code == 'Space') {
            if (!isJumping) {
                isJumping = true;
                let startPositionY = getComputedStyle(player).bottom
                player.style.transition = "bottom 0.5s";
                player.style.bottom = (parseInt(startPositionY) + 100) + "px";
                setTimeout(function() {
                    player.style.transition = "bottom 0.5s";
                    player.style.bottom = "0px";
                    isJumping = false;
                }, 500);
            }
        }
    }
});

document.addEventListener('keyup', function(event) {
    if (event.code == 'KeyD') {
        rightPressed = false;
    }
    else if (event.code == 'KeyA') {
        leftPressed = false;
}})


function makeStep(){
    if (rightPressed) {
        player.style.left = (parseInt(getComputedStyle(player).left) + 1.5) + "px";
    }
    else if (leftPressed) {
        player.style.left = (parseInt(getComputedStyle(player).left) - 0.75) + "px";
    }
}

function startGame(){
    setInterval(makeStep, 10)
}

start_button.addEventListener('click', function() {
    first_cont.style.display = "none"
    second_cont.style.display = "none"
    game_cont.style.display = "block"
    gameIsActive = true
    startGame()
})
