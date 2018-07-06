let scoreboard = document.querySelector('#score');

function showchar(){
    let leon = document.getElementById('pic2');
    const inputfield = document.querySelector('#inputbox');

        if (inputfield.value === 'leon kennedy'){
            leon.style.display = "block";
            scoreboard.innerHTML = '20';
            }
    }


    const modal = document.getElementById('signin');
    const button = document.getElementById("modbutton");
    const span = document.getElementsByClassName("close")[0];
    
    
    button.onclick = function() {
        modal.style.display = "block";
    }
    
    
    span.onclick = function() {
        modal.style.display = "none";
    }    