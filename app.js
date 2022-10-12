
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


//-------------------------------------- Working on DOM
const cardX = document.querySelectorAll('.cardx'),
startBtn = document.querySelector('.start-game');



startBtn.addEventListener('click',()=>{
    cardX.forEach(card=>{
        card.querySelector('div img').style.opacity = 1;
    })

    let counter = 0;
    let x = setInterval(()=>{
        counter++;
        if(counter==3){
            cardX.forEach(card=>{
                card.querySelector('div img').style.opacity = 0;
            })
            clearInterval(x);
        }
    },1000)
})

let firstSelect, secondSelect;
let selection = [];
function showImg(any){
    // console.log(any.querySelector('img').src);
    firstSelect = any.querySelector('img').src;
    any.querySelector('img').style.opacity = '1';
    selection.push(firstSelect);  
    if(selection.length==2){
        if(selection[0]==selection[1]){
            console.log('Matched');
        }else{
            console.log('Did not match');
        }
        selection.splice(0,2);
    }
    console.log(selection);
}



for(let i=0;i<=cardX.length; i++){    
    let div = document.createElement('div');
    div.innerHTML = `<img src="assets/img/img (${arr3[i]}).jpg">`;
    cardX[i].appendChild(div);    
}

