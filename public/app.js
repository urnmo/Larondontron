



//write the ajax request function


function getPeeps() {
    let request = new XMLHttpRequest();
    request.open('GET', "http://damp-hamlet-50601.herokuapp.com");

    request.addEventListener('load', function () {

        //get the json and parse it
        let response = JSON.parse(request.responseText);

    })
        request.send();
}











//add event listener to load dom & getPeeps once page loads


window.addEventListener('load', function() {
console.log ('hello world');
getPeeps();
});
