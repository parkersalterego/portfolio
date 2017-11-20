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
            element.classList.add('animate-reverse');
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

const services = document.getElementById('services');
const skills = document.getElementById('skills');
const work = document.getElementById('work');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

transitionSections = [services, skills, work, about, contact];

window.addEventListener('resize', () => {
    if (window.innerWidth > 700 ) {
        transitionSections.forEach((element) => {
            element.classList.add('display-none');
        });
    } else if (window.innerWidth < 700 ) {
        transitionSections.forEach((element) => {
            element.classList.remove('display-none');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 700 ) {
        transitionSections.forEach((element) => {
            element.classList.add('display-none');
        });
    } else if (window.innerWidth < 700 ) {
        transitionSections.forEach((element) => {
            element.classList.remove('display-none');
        });
    }
}, false);

console.log(hamMenu.getBoundingClientRect());

console.log(services.getBoundingClientRect());