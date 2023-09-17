console.log("JS is loaded!")

const progressBar = document.getElementById('progressBar');

const timmer = document.getElementById('timmer');
const countDown = document.getElementById('countDown');

const btnStart = document.getElementById('btnStart');
const btnReStart = document.getElementById('btnReStart');
const btnPause = document.getElementById('btnPause');

let initial = '00:25:00';
countDown.innerText = initial;
let min = 25;
let hour = 0;
let sec = 5;
var time;


btnStart.addEventListener('click', () => {
    clearInterval(time);
    console.log('Btn Start Clicked')
    min = 1;
    sec = 0;
    startTheClock();
})

btnReStart.addEventListener('click', () => {
    initial = '00:25:00';
    countDown.innerText = initial;
    console.log('Btn Re-Start Clicked')
    clearInterval(time);
    min = 1;
    sec = 0;
    startTheClock();
})

btnPause.addEventListener('click', () => {
    clearInterval(time)
    if(btnPause.innerText == 'RESUME'){
        startTheClock()
    }
    var currentTime = countDown.innerText;
    var timeArray = currentTime.split(':');
    min = Number(timeArray[1]);
    sec = Number(timeArray[2]);
    btnPause.innerHTML = btnPause.innerText == 'PAUSE' ? 'RESUME' : 'PAUSE';
    console.log(timeArray);
})

function startTheClock() {    
    time = setInterval(() => {
        if(hour == 0 && min == 0 && sec == 0){
            clearInterval(time);
            userInput();
        }
        if(hour != 0 && min == 0 && sec == 0){
            hour = hour - 1
            min = 60
        }
        if(min != 0 && sec == 0){
            min = min - 1;
            sec = 60
            initial = Display();
            countDown.innerText = initial;
        }
        if(sec != 0){
            sec = sec - 1;
            initial = Display();
            countDown.innerText = initial;
        }
    }, 1000);
}

function userInput() {
    confirm("Hey Buddy It's time for a break!!!")
    if(confirm){
        min = 5;
        sec = 0;
        startTheClock();
    }
}

function Display() {
    
    return formattedTime = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}