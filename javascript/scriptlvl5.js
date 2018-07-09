function addElement() { 
    const para = document.createElement("P");                     
    const text = document.createTextNode("YOU ARE WINNER!");  
    para.appendChild(text);                                          
    document.getElementById("nextlvl").appendChild(para); 
  }

let scoreboard = document.querySelector('#score');
const audioright = new Audio('../sounds/thanoswin.mp3');
const audiowrong = new Audio('../sounds/wrong.mp3');
const audiohint = new Audio('../sounds/thanoshint.mp3');


function showchar(){
    let leon = document.getElementById('pic2');
    let leon1 = document.getElementById('pic1');
    const inputfield = document.querySelector('#inputbox');

        if (inputfield.value === 'thanos'){
            leon1.style.display = "none";
            leon.style.display = "block";
            scoreboard.innerHTML = 100;
            audioright.play();
            addElement();
            }
            else {
                audiowrong.play();
            }  
    }


function hint(){
    audiohint.play();   
}      

