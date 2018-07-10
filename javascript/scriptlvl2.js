

  function addElement2() { 
    const para2 = document.createElement("h1");  
    para2.id = "loserdiv"                   
    const text2 = document.createTextNode("LOSER!");  
    para2.appendChild(text2);                                          
    document.getElementById("maintitle").appendChild(para2); 
  }  

let scoreboard = document.querySelector('#score');
const audioright = new Audio('../sounds/morriganwin.mp3');
const audiowrong = new Audio('../sounds/wrong.mp3');
const audiohint = new Audio('../sounds/morriganhint.mp3');
const youlose = new Audio('../sounds/youlose.mp3');
let level = document.querySelector('#nextlvl')
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

        if (inputfield.value === 'morrigan'){
            leon1.style.display = "none";
            leon.style.display = "block";
            scoreboard.innerHTML = 40;
            score += 20;
            audioright.play();
            level.style.visibility = "visible"
            }
            else {
                score -= 10;
                scoreboard.innerHTML = `${score}`;
                audiowrong.play();
            }   
            
            if(score === -50){
                addElement2();
                endgame();
                youlose.play();
            
                 }  
    }

function hint(){
    audiohint.play();   
}  

if(score === -50){
    addElement();

     }