// var loader = document.querySelector('.preloader');

// window.addEventListener('load', function () {
//   loader.style.display = 'none';
//     // loader.parentElement.removeChild(loader);
// });


const DownScroll =()=>{
    window.addEventListener("scroll",function(){
      var header = document.querySelector(".navbar");
      header.classList.toggle("shadow", window.scrollY > 0);
      header.classList.toggle("fixed", window.scrollY > 0);
    } );
}

DownScroll();


