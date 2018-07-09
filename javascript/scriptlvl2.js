let scoreboard = document.querySelector('#score');
const audioright = new Audio('../sounds/morriganwin.mp3');
const audiowrong = new Audio('../sounds/wrong.mp3');
const audiohint = new Audio('../sounds/morriganhint.mp3');

function showchar(){
    let leon = document.getElementById('pic2');
    let leon1 = document.getElementById('pic1');
    const inputfield = document.querySelector('#inputbox');

        if (inputfield.value === 'morrigan'){
            leon1.style.display = "none";
            leon.style.display = "block";
            scoreboard.innerHTML = 40;
            audioright.play();
            }
            else {
                audiowrong.play();
            }      
    }

function hint(){
    audiohint.play();   
}  