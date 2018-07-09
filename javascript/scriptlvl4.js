let scoreboard = document.querySelector('#score');
const audioright = new Audio('../sounds/rocketwin.mp3');
const audiowrong = new Audio('../sounds/wrong.mp3');
const audiohint = new Audio('../sounds/rockethint.mp3');

function showchar(){
    let leon = document.getElementById('pic2');
    let leon1 = document.getElementById('pic1');
    const inputfield = document.querySelector('#inputbox');

        if (inputfield.value === 'rocket raccoon'){
            leon1.style.display = "none";
            leon.style.display = "block";
            scoreboard.innerHTML = 80;
            audioright.play();
            }
            else {
                audiowrong.play();
            }  
    }


function hint(){
    audiohint.play();   
}      