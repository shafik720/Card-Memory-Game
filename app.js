
function random(min, max){
    let x = Math.floor(Math.random() * (max-min+1)+min) ;
    return x;
    }8
let arr = [];
for(let i=0; i<100;i++){
    let x = random(1,8);
    if(arr.indexOf(x) == -1){
        arr.push(x);
    }    
}
let arr2 = [];
for(let i=0; i<100;i++){
    let x = random(1,8);
    if(arr2.indexOf(x) == -1){
        arr2.push(x);
    }    
}
let arr3 = [...arr2,...arr]


//-------------------------------------- Working on DOM ------------------
const cardX = document.querySelectorAll('.cardx'),
popMsg = document.querySelector('.pop-message'),
popCounter = document.querySelector('.pop-counter'), 
wrapper = document.querySelector('.wrapper'), 
resetBtn = document.querySelector('.reset-btn'), 
highscoreDiv = document.querySelector('.top-score div'), 
resetBtnP = document.querySelector('.reset-btn p'), 
scoreNumber = document.getElementById('scoreNumber'), 
remainingTime = document.getElementById('remainingTime'), 
startBtn = document.querySelector('.start-game');


let lastScore = 0;
let score = JSON.parse(localStorage.getItem('score') || '[]')
startBtn.addEventListener('click',()=>{    
    wrapper.classList.add('active');
    startBtn.style.display = 'none';
    popCounter.style.display = 'flex';
    let counter = 5;      
    // popCounter.style.opacity = 1;   
    popCounter.innerText = counter;
    let x = setInterval(()=>{          
        counter--;
        popCounter.innerText = counter;
        if(counter==0){
            popCounter.style.display = 'none';
            
            wrapper.classList.remove('active');
            clearInterval(x);            
            resetBtn.style.display = 'block';
            let remainingTimeCounter = 5;
            let remainingTimeAction = setInterval(()=>{
                remainingTime.innerText =  remainingTimeCounter;
                remainingTimeCounter--;
                if(remainingTimeCounter<=-1){
                    clearInterval(remainingTimeAction);
                    wrapper.classList.add('active');
                    resetBtnP.innerText= 'Start Again';
                    lastScore = scoreNumber.innerText;
                    if(lastScore ==''){
                        lastScore = 0 ;
                    }
                    score.push(lastScore);
                    localStorage.setItem('score', JSON.stringify(score));
                }
            },1000)
        }
    },1000)
})

// console.log(score);

let highScore = score.sort(function any(a,b){
    return b-a;
});
console.log(highScore);
for(let i=0;i<5;i++){
    let p = `<p>${highScore[i]}</p>`;
    highscoreDiv.insertAdjacentHTML('beforeend',p);
}
//----------------------------------- Working on reset btn
function resetGame(){
    window.location.reload();
}

//----------------------------------- Working on  function when window is loaded
window.addEventListener('load',()=>{
    setTimeout(()=>{
        wrapper.classList.add('active');
    },1000)
    
})

// -------------------------------  showing image function or main function
let firstSelect, secondSelect;
let selection = [];
let idSelection = [];
let x = 0;

function showImg(any){    
    firstSelect = any.querySelector('img').src;
    any.querySelector('img').style.opacity = '1';
    selection.push(firstSelect);  
    idSelection.push(any.id);
    if(selection.length==2){
        if(selection[0]==selection[1]){
            showPopUp('right');
            x = x+5;
            scoreNumber.innerText = x;
        }else{            
            showPopUp('wrong');            
            let  x =  () => {
                document.querySelector(`#${idSelection[0]} img`).style.opacity = '0';
                document.querySelector(`#${idSelection[1]} img`).style.opacity = '0';
            }
            setTimeout(x,500);
        } 
        setTimeout(()=>{
            selection.splice(0,2);      
         idSelection.splice(0,2);
        },550)       
        
    }
}

//----------------------------- Pop Up message function  ----------------
const showPopUp = (result) =>{
    let counter = 0;
            let x = setInterval(()=>{
                counter++;
                popMsg.style.opacity = 1;
                if(result == 'right'){
                    popMsg.innerText = 'Matched !'    ;
                    popMsg.style.color ='green';
                }else{
                    popMsg.innerText = 'Not Matched '    ;
                    popMsg.style.color ='red';
                }
                if(counter==10){
                    clearInterval(x);
                    popMsg.style.opacity = 0;
                }
            },100)
}


for(let i=0;i<=cardX.length; i++){    
    let div = document.createElement('div');
    div.innerHTML = `<img src="assets/img/img (${arr3[i]}).jpg">`;
    cardX[i].appendChild(div);    
}

