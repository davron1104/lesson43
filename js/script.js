'use strict';

// const box = document.getElementById('box'),
//     btns = document.getElementsByTagName('button'),
//     circles = document.getElementsByClassName('circle'),
//     hearts = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '100%';
// box.style.cssText = 'background-color: blue; width: 100%;';
// btns[2].style.borderRadius = '250px';
// btns[2].style.backgroundColor = 'red';
// circles[0].style.backgroundColor = 'yellow';

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'black';
// });


// const div = document.createElement('div');
// const text = document.createTextNode('Я всегда буду первым');

// div.classList.add('black');
// document.body.append(div);
// wrapper.appendChild(div);
// document.body.prepend(text);
// wrapper.append(div);
// div.innerHTML = '<h1 style="color: red;">Hello world!</h1>';
// div.insertAdjacentHTML("beforebegin", '<h2>Goodbye</h2>');
// div.textContent = "Hello!";
// wrapper.prepend(div);

// hearts[1].before(div);
// hearts[1].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.hert'),
    wrapper = document.querySelector('.wrapper');

// console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.append(div);
// wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);


// hearts[1].before(div);
wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = "<h1>Hello world!</h1>";

// div.textContent = 'Hello!';

// div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');
// div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');
// div.insertAdjacentHTML("beforeend", '<h2>Hello</h2>');
div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');