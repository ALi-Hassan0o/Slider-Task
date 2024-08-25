const rightBtn= document.querySelector(".btn-right");
const lefttBtn= document.querySelector(".btn-left");
const slides=document.querySelectorAll(".slid");

slides.forEach((slid , index)=>{
slid.style.left =`${index * 100}%`
});

const moveSlide=()=>{
  slides.forEach((slid) =>{
slid.style.transform=`translateX(${-counter*100}%)`

});

}


let counter=0;
rightBtn.addEventListener("click",()=>{
counter++;
if (counter > 3) {
    counter = 0;
}
moveSlide();
moveAll()
});

lefttBtn.addEventListener("click",()=>{
    counter--;

    if (counter <0) {
    counter =slides.length -1;
  } 
moveSlide();
moveAll()
})
//circel
 
const btn=document.querySelectorAll('.cir');
btn.forEach((button,index)=>{
button.addEventListener("click",()=>{
counter=index;
moveSlide()
});
});
moveSlide();

const moveAll=()=>{
  btn.forEach((button,index)=>{
    if (index===counter) {
      button.classList.add("active")
    }else{
      button.classList.remove("active")
    }
  });
};
moveSlide();


