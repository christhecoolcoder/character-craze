let scoreboard = document.querySelector('#score');

function showchar(){
    let leon = document.getElementById('pic2');
    const inputfield = document.querySelector('#inputbox');

        if (inputfield.value === 'morrigan'){
            leon.style.display = "block";
            scoreboard.innerHTML = '40';
            }
    }