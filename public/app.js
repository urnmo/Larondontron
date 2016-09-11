// let _ = require('lodash');


//write the ajax request function


function getPeeps() {         // GET PPL OBJECTS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    let request = new XMLHttpRequest();
    request.open('GET', "https://damp-hamlet-50601.herokuapp.com/people");

    request.addEventListener('load', function () {
        //get the json and parse it
        let response = JSON.parse(request.responseText);
        for (let i = 0; i < response.length; i++) {
            $('#friends-list').append('<li class="peep"><p><img src="' + response[i].photo + '"></p><h2>' + response[i].firstName + ' ' + response[i].lastName + '</h2><p>' + response[i].userName + '</p><p>' + response[i].gender + '</p><p>' + response[i].birthday + '</p></li>');
        }
        //make all li's draggable
        $('.peep').draggable({
            revert: true,
            containment: $('#groups'),
            helper: 'clone',
        });

        console.log($(".group-boxes"));
        //make the dropzones droppable
        $(".group-boxes").droppable({
            drop: function (event, ui) {
                console.log('drop');
                let peep = ui.draggable.text();
                let group = "";
                $(this);
                console.log($(this).attr('id'));
                if ($(this).attr('id') === 'human') {
                    console.log('human');
                    group = "1";
                } else if ($(this).attr('id') === "mutant") {
                    console.log('mutant');
                    group = "2";
                } else {
                    if ($(this).attr('id') === "cyborg") {
                        console.log('human');
                        group = "3";
                    }
                }
                console.log(this);
                postGroup(peep, group);
                //what happens on drop is put here
                //call post group function
            }

        })
        console.log(response);

    })
    request.send();
}
// GET @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


function getGroups() {
    let request = new XMLHttpRequest();
    request.open('GET', "https://damp-hamlet-50601.herokuapp.com/group");

    request.addEventListener('load', function () {
        //get the json and parse it
        let response = JSON.parse(request.responseText);
        console.log("groups sent")
        console.log(response);
    })
    request.send();
}

function getGroupID(num) {
    let request = new XMLHttpRequest();
    request.open('GET', "https://damp-hamlet-50601.herokuapp.com/group/" + num);

    request.addEventListener('load', function () {
        //get the json and parse it
        let response = JSON.parse(request.responseText);
        console.log("group id sent")
        console.log(response);
    })
    request.send();
}

function postGroup(user, group) {
    // post the group info
    let request = new XMLHttpRequest();
    request.open('POST', "https://damp-hamlet-50601.herokuapp.com/" + group);
    let msg = user;
    // request.send(JSON.stringify(msg));
  console.log  (JSON.stringify(msg));

    console.log(group);
    console.log(msg);

    // ---msg needs to be an object with user id and group id

}
// POST GROUP @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



//add event listener to load dom & getPeeps once page loads


window.addEventListener('load', function () {
    console.log('hello world');
    getPeeps();
    getGroups();
    getGroupID(1);

});




// -populate the "friends" box--js 
//      -parse json
//      -pass data into a constructor

// -make  'friends'draggable and droppable--jquery
        //render a li for each peeps






// -set up post fuction--js
    //-- on drop
    //--set up "codename" property and function (maybe)

// --display group type on friend


