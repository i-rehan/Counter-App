let btnTitle = document.querySelector('#title');
let currentValue = 0 ;

let btnDecrease = document.querySelector('#decrease');
//console.log(btnDecrease);
let btnReset = document.querySelector('#reset');
let btnIncrease = document.querySelector('#increase');

btnDecrease.addEventListener('click', ()=> {
    currentValue -= 1;
    btnTitle.textContent = currentValue;
})

btnIncrease.addEventListener('click', ()=> {
    currentValue += 1;
    btnTitle.textContent = currentValue;
})

btnReset.addEventListener('click', ()=> {
    currentValue =0;
    btnTitle.textContent = currentValue;
})