let f1=document.getElementById('food1');
let f2=document.getElementById('food2');
let f3=document.getElementById('food');

f1.addEventListener('click',()=>{
    f3.style.backgroundImage="url('v2.png')";
})

f2.addEventListener('click',()=>{
    f3.style.backgroundImage="url('v1.png')";
})