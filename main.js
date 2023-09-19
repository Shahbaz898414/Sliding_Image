const left=document.querySelector('.left')
const right =document.querySelector('.right')

const img=document.querySelector('.image');

let cnt=0;
let max=500;

left.addEventListener("click" ,()=>{
  if(cnt>0){
    cnt--;
    img.style.transform =`translateX(-${cnt*max}px)`;
  }else if(cnt===0){
    cnt=13;
    img.style.transform =`translateX(-${cnt*max}px)`;
  }
})


right.addEventListener("click" ,()=>{
  if(cnt<13){
    cnt++;
    img.style.transform =`translateX(-${cnt*max}px)`;
  }else if(cnt===13){
    cnt=0;
    img.style.transform =`translateX(-${cnt*max}px)`;
  }
})