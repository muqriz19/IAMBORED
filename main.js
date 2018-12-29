import {
    getCurrentYear
} from './assets/js/custom/date.js';

// during page load call init func to set up index.html page
window.onload = function () {
    init();
}

// to set up index.html page
function init() {
    document.querySelector('#footer-date').innerHTML = getCurrentYear();

}

// click button
document.querySelector('#search-button').addEventListener('click', function () {
    let searchQuery = document.getElementById('select-type').value;
    let numberOfTimes = parseInt(document.getElementById('num-of-times').value);
    console.log(searchQuery);

    searchActivity(searchQuery, numberOfTimes);

});

// http to bored rest api, then search based on query and get results on numOfTimes wanted
function searchActivity(query, numOfTimes) {

    // hold the list of activities
    let listOfActivities = [];

    if (query) {
        for (let i = 0; i < numOfTimes; i++) {

            fetch(`https://www.boredapi.com/api/activity/?type=${query}`).then(res => res.json()).then(function (data) {

                if (data) {
                    // console.log(data);
                    listOfActivities.push(data);
                }

            }).catch(function (err) {
                console.log(err);
            });

        }
        
        let activityBox = document.querySelector('.activities-box ');
        let searText = document.querySelector('.search-title');
        let ulEle = document.querySelector('.list-of-activities');
        let queryElem = document.querySelector('#query');

        // dispaly grey activitie box
        activityBox.style.display = 'block';
        // display search te        // dispaly grey activitie box
        activityBox.style.display = 'block';
        // display search text
        searText.style.display = 'block';
        // set query to search text
        queryElem.innerHTML = query;

        setTimeout(function () {
            for (let i = 0; i < listOfActivities.length; i++) {

                let liEle = document.createElement('li');
                let text = document.createTextNode(`${listOfActivities[i].activity}`);
                let buttonTxt = document.createTextNode('>');
                let buttonAct = document.createElement('button');
                buttonAct.appendChild(buttonTxt);
                buttonAct.classList.add('pull-right');

                buttonAct.addEventListener('click', function() {
                    console.log('Hello');
                });

                liEle.appendChild(text);
                liEle.appendChild(buttonAct);

                ulEle.appendChild(liEle);

            }
        }, 1000);



    } else {
        alert('Please Select A Type of Activitiy');
    }
}