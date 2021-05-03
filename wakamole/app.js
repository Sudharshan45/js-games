const square=document.querySelectorAll('.square');
const mole=document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score =document.querySelector('#score');
let result = 0
let hitPosition
let currentTime = 60
let timerId = null
function randomSquare(){
    square.forEach(className=>{
        className.classList.remove('mole');
    })
    let randomPostion=square[Math.floor(Math.random()*9)]
    randomPostion.classList.add('mole')
    hitPosition=randomPostion.id
}
square.forEach(id=>{
    id.addEventListener('mouseup',()=>{
        if(id.id===hitPosition){
            result+=1;
            score.textContent=result;
        }
    })
})
function moveMole(){
  
    timerId=setInterval(randomSquare, 1000);
}
moveMole()
function countDown(){
    currentTime--
    timeLeft.textContent=currentTime;
    if(currentTime===0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game Over! Your fianlly'+result)
    }
   // if(curr)
}
let countDownTimerId=setInterval(countDown, 1000);