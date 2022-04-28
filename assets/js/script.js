let clockId;
let time = 6;
let clock = document.querySelector('#time');


document.querySelector('#start').addEventListener('click', handleClick);

function handleClick() {
    clockId = setInterval(handleTime, 1000);
// need more code...
}

function handleTime() {
    // need more code...
    time --;
    clock.innerHTML=time;
}