'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '100%';
box.style.cssText = 'background-color: blue; width: 100%;';
btns[2].style.borderRadius = '250px';
btns[2].style.backgroundColor = 'red';
circles[0].style.backgroundColor = 'yellow';

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});


