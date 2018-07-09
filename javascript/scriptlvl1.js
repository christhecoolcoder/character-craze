let scoreboard = document.querySelector('#score');
const audioright = new Audio('../sounds/leonwin.mp3');
const audiowrong = new Audio('../sounds/wrong.mp3');
const audiohint = new Audio('../sounds/leonhint.mp3');

function showchar(){
    let leon = document.getElementById('pic2');
    let leon1 = document.getElementById('pic1');
    const inputfield = document.querySelector('#inputbox');

        if (inputfield.value === 'leon kennedy'){
            leon1.style.display = "none";
            leon.style.display = "block";
            scoreboard.innerHTML = 20;
            audioright.play();
            }
        else {
            scoreboard.innerHTML = -10;
            audiowrong.play();
        }    
    }

 function hint(){
    audiohint.play();   
 }  
 



    // const modal = document.getElementById('signin');
    // const button = document.getElementById("modbutton");
    // const span = document.getElementsByClassName("close")[0];
    
    
    // button.onclick = function() {
    //     modal.style.display = "block";
    // }
    
    
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }    