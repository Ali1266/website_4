$(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplayspeed: 2000
    });
});

const burger = document.querySelector('.burger'),
        menuList = document.querySelector('.menu__list');

burger.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list-active');
});

let buttonPlay = document.querySelector('.video-inner');
buttonPlay.onclick = function() {
  this.innerHTML = '<div><iframe class="video" width="1000px" height="500px" src="https://www.youtube.com/embed/lq149gCzkvE?autoplay=1" title="Youtube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>';
};