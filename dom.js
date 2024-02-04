//  dom pillars
//  1. Selector
//  2. change hTML
// 3.CHANGE CSS
//  4. addEventListener
// let edit = document.querySelector('h1').innerHTML = 'I am a web developer'
let edit = document.querySelector('h1')
let btn = document.querySelector('button')
let result = edit.textContent = 'I am a passionate web developer'
let flag =0;
btn.addEventListener('click', function(){
   if(flag == 0){
       edit.style.backgroundColor = 'red'
       flag = 1;
    }
    else{
        edit.style.backgroundColor = 'blue'
        flag = 0;
    }
})
