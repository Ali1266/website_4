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