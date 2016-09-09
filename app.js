let _ = require('lodash');


//write the ajax request function


function getPeeps() {
    let request = new XMLHttpRequest();
    request.open('GET', "https://damp-hamlet-50601.herokuapp.com/people");

    request.addEventListener('load', function () {
        //get the json and parse it
        let response = JSON.parse(request.responseText);
console.log (response);
    })
        request.send();  
}













//add event listener to load dom & getPeeps once page loads


window.addEventListener('load', function() {
console.log ('hello world');
getPeeps();
});
// -populate the "friends" box--js 
//      -parse json
//      -pass data into a constructor

// -make  'friends'draggable and droppable--jquery

// -set up post fuction--js
    //-- on drop
    //--set up "codename" property and function
    

// -make boxes all scrollable --css

// --display group type on friend


