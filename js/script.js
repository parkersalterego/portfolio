const hamMenu = document.getElementById('hamMenu');
const barOne = document.getElementById('barOne');
const barTwo = document.getElementById('barTwo');
const barThree = document.getElementById('barThree');
const navBar = document.getElementById('navBar');

const navAnimation = [barOne, barTwo, barThree, navBar];
let x = 0;
 
hamMenu.addEventListener('click', () => {
    if(x === 0){
        // console.log('first');
        navAnimation.forEach(function(element){
            element.classList.add('animate');
        });
        x++;

    } else if(x % 2 === 1 ){
        // console.log('second');
        navAnimation.forEach(function(element){
            element.classList.add('animate-reverse');
            element.classList.remove('animate');
        });
        x++;

    } else {
        // console.log('third');
        navAnimation.forEach(function(element){
            element.classList.remove('animate-reverse');
            element.classList.add('animate');
        });
        x--;

    } 
});

const hamMenuD = document.getElementById('hamMenuD');
const barOneD = document.getElementById('barOneD');
const barTwoD = document.getElementById('barTwoD');
const barThreeD = document.getElementById('barThreeD');
const navBarD = document.getElementById('navBarD');

const navAnimationD = [barOneD, barTwoD, barThreeD, navBarD];

 
hamMenuD.addEventListener('click', () => {
    if(x === 0){
        // console.log('first');
        navAnimationD.forEach(function(element){
            element.classList.add('animate');
        });
        x++;

    } else if(x % 2 === 1 ){
        // console.log('second');
        navAnimationD.forEach(function(element){
            element.classList.add('animate-reverse');
            element.classList.remove('animate');
        });
        x++;

    } else {
        // console.log('third');
        navAnimationD.forEach(function(element){
            element.classList.remove('animate-reverse');
            element.classList.add('animate');
        });
        x--;

    } 
});

const desktop = document.getElementById('desktop');
const mobile = document.getElementById('mobile');

window.addEventListener('resize', () => {
    if (window.innerWidth > 700 ) {
        mobile.classList.add('display-none');
        desktop.classList.remove('display-none');
    } else if (window.innerWidth < 700 ) {
        mobile.classList.remove('display-none');
        desktop.classList.add('display-none');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 700 ) {
        mobile.classList.add('display-none');
        desktop.classList.remove('display-none');
    } else if (window.innerWidth < 700 ) {
        mobile.classList.remove('display-none');
        desktop.classList.add('display-none');
    }
});

// nav behavior

const navLi = document.querySelectorAll('.nav-li');
const nav = document.querySelector('.nav');
const navD = document.querySelector('.nav-desktop');
const bar = document.querySelector('.bar');

for(i = 0; i < navLi.length; i++) {
    navLi[i].addEventListener('click', () => {
        navAnimationD.forEach(function(element){
            element.classList.add('animate-reverse');
            element.classList.remove('animate');
        });

        navAnimation.forEach(function(element){
            element.classList.add('animate-reverse');
            element.classList.remove('animate');
        });
        
        console.log('working');
    });
}

