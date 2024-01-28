'use strict';

const btn = document.querySelector('button');

let counter = 0;

btn.addEventListener('click', () => {
    
    const h1 = document.querySelector('h1');

    if(counter == 0) {
        h1.innerText = 'Zapraszamy do nas!';
        counter++;
    } else {
        h1.innerText = 'Najlepsza pizza w Krakowie';
        counter--;
    }

});