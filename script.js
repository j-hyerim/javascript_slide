const slide_w =document.querySelector('.slide-wrapper');
const slide = document.querySelector('.slide');
const slide_img =document.querySelectorAll('.slide li');
const l_btn =document.querySelector('.prev');
const r_btn =document.querySelector('.next');

const img_n = slide_img.length;
console.log(img_n);
const img_w= 400;
const m=30;
const s_con = 3;
let count = 0;
slide.style.width = (img_w+m)*img_n -m+'px';

let timer=setInterval(function(){
  if(count == 4){
    mslide(count=0);
  }else{
    mslide(count+=1);
  }
},3000);

function mslide(n){
  slide.style.left =- (img_w+m)*n+'px';
  count = n;
}

l_btn.addEventListener('click',function(){
  if(count == 0){
    mslide(count=4);
  }else{
    mslide(count-=1);
  }
});
r_btn.addEventListener('click',function(){
  if(count == 4){
    mslide(count=0);
  }else{
    mslide(count+=1);
  }
});