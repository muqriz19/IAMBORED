import { getCurrentYear } from './assets/js/custom/date.js';

window.onload = function() {

    init();

}

function init(){
    document.querySelector('#footer-date').innerHTML = getCurrentYear();

}


document.querySelector('#search-button').addEventListener('click', function(){
    let searchQuery = document.getElementById('search-box').value;
    console.log(searchQuery);

    searchActivity(searchQuery);


});

function searchActivity(query) {
    let headers = new Headers({

    });

    fetch(`https://www.boredapi.com/api/activity/${query}`).then(res => res.json()).then(function(data){
        console.log(data);
    }).catch(function(err) {

    });
}

