function addElement() { 
    const para = document.createElement("P");                     
    const text = document.createTextNode("YOU ARE WINNER!");  
    para.appendChild(text);                                          
    document.getElementById("nextlvl").appendChild(para); 
  }

  function addElement2() { 
    const para2 = document.createElement("h1");  
    para2.id = "loserdiv"                   
    const text2 = document.createTextNode("LOSER!");  
    para2.appendChild(text2);                                          
    document.getElementById("maintitle").appendChild(para2); 
  }

let scoreboard = document.querySelector('#score');
const audioright = new Audio('../sounds/thanoswin.mp3');
const audiowrong = new Audio('../sounds/wrong.mp3');
const audiohint = new Audio('../sounds/thanoshint.mp3');
let score = 0;

function endgame(){
const end = document.querySelector('#maincontainer');
const game = document.querySelector('#bottomdiv');
game.style.display = "none";
end.style.display = "none";

}

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
                score -=10;
                scoreboard.innerHTML = `${score}`;
                audiowrong.play();
            }  
            if(score === -50){
                addElement2();
                endgame();
                 }    

    }


function hint(){
    audiohint.play();   
}      



