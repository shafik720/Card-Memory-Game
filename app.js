
const cardX = document.querySelector('.cardx'),
img = cardX.querySelector('img');


// document.getElementById('card1').addEventListener('click',()=>{
//     img.style.opacity = '1';
// })

function showImg(any){
    console.log(any.querySelector('img'));
    any.querySelector('img').style.opacity = '1';
}