let Hours=document.querySelector('.hours');
let Minutes=document.querySelector('.minutes');
let Secondes=document.querySelector('.secondes');

function second(){
    let mm=new Date();
Hours.textContent=mm.getHours()+":";
Minutes.textContent=mm.getMinutes()+":";
let s=Secondes.textContent=mm.getSeconds();
}

let time=setInterval(second,Infinity);

let btn_start=document.querySelector('#start');
let btn_stop=document.querySelector('#stop');

btn_start.addEventListener('click',()=>{
    if(time===null){
    time=setInterval(second,Infinity);
    }
});
btn_stop.addEventListener('click',()=>{
    
   clearInterval(time);
   time=null;
});




