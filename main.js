import { getCurrentYear } from './assets/js/custom/date.js';

window.onload = function() {

    init();

}

function init(){
    document.querySelector('#footer-date').innerHTML = getCurrentYear();

}


document.querySelector('#search-button').addEventListener('click', function(){
    console.log('Test');
});

