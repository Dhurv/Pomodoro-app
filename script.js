console.log("JS is loaded!")

const progressBar = document.getElementById('progressBar');

const timmer = document.getElementById('timmer');
const countDown = document.getElementById('countDown');

const btnStart = document.getElementById('btnStart');
const btnReStart = document.getElementById('btnReStart');
const btnPause = document.getElementById('btnPause');

let initial = '00:00:00';
countDown.innerText = initial;
let min = 1;
let hour = 0;
let sec = 0;



btnStart.addEventListener('click', () => {
    console.log('Btn Start Clicked')
    startTheClock();
})

btnReStart.addEventListener('click', () => {
    startTheClock();
})


function startTheClock() {    
    console.log('Enter into startTheClock, with Initial value: ' +  initial)
    var time = setInterval(() => {
        console.log('Entering into SetInterval'+ (min ==0))
        if(min == 0 && sec == 0){
            //send reminder 
            min = 5;
            sec = 0;
            // countDown.innerText = initial;
            clearInterval(time);
            userInput();
        }

        initial = `${hour}:${min}:${sec}`
        if(sec == 0 && min != 0){
            min = min - 1;
            sec = 59;
            console.log('inside first if with hour: '+hour+ ' and min: '+ min)
        }

        if(sec != 0){
            sec = sec - 1
        }

        

        countDown.innerText = initial;
    }, 1000)
    
}

function userInput() {

}