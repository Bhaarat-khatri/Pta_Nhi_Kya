
const DownScroll =()=>{
    window.addEventListener("scroll",function(){
      var header = document.querySelector(".navbar");
      header.classList.toggle("shadow", window.scrollY > 0);
    } );
}

DownScroll();
























