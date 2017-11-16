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