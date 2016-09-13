// let _ = require('lodash');
function peepDom(people) {
    for (let i = 0; i < people.length; i++) {

        $('#friends-list').append('<li class="peep"><p><img src="' + people[i].photo + '"></p><h2 class="friendsinfo">' + people[i].firstName + ' ' + people[i].lastName + '</h2><p class="username friendsinfo">' + people[i].userName + '</p><p class="friendsinfo">' + people[i].gender + '</p><p class="friendsinfo">' + people[i].birthday + '</p><p class="hidden">' + people[i].id + '</p></li>');
    }
}
//write the ajax request function


function getPeeps() {         // GET PPL OBJECTS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   
    // -populate the "friends" box--js 
    let request = new XMLHttpRequest();
    request.open('GET', "https://damp-hamlet-50601.herokuapp.com/people");

    request.addEventListener('load', function () {
        //get the json and parse it
        let response = JSON.parse(request.responseText);
        console.log(response);
        peepDom(response);
        // for (let i = 0; i < response.length; i++) {

        //     $('#friends-list').append('<li class="peep"><p><img src="' + response[i].photo + '"></p><h2 class="friendsinfo">' + response[i].firstName + ' ' + response[i].lastName + '</h2><p class="username friendsinfo">' + response[i].userName + '</p><p class="friendsinfo">' + response[i].gender + '</p><p class="friendsinfo">' + response[i].birthday + '</p><p class="hidden">' + response[i].id + '</p></li>');

        $('.peep').draggable({
            revert: true,
            containment: $('#groups'),
            helper: 'clone',
        });
        // }
        //make all li's draggable
        

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
        console.log(response);

        //render all DOM elements inside 

        for (let i = 0; i < response.length; i++) {
            let groupName = response[i].groupName;
            $('#groups-box').append('<div class="groups ' + groupName + 's-group"><div id="' + groupName + '" class="group-boxes ' + groupName + 's-box"><ul class="peepsNgroup"></ul></div></div>')
            for (let j = 0; j < response[i].people.length; j++) {

                $('#' + groupName + ' ul').append('<li class="peepNgroup">' + response[i].people[j].firstName + ' ' + response[i].people[j].lastName + '</li>')
            }
        }
        console.log('hoy')


        console.log('droppsers')
        console.log($(".group-boxes"));
        //make the dropzones droppable
        $(".group-boxes").droppable({
            drop: function (event, ui) {
                console.log('drop');
                // peep should be the user id. 
                let peep = ui.draggable.find('.hidden').text();
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
                        console.log('cyborg');
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
        console.log("groups sent")
        console.log(response);
    });

    request.send();
}

// function getGroupID(num) {
//     let request = new XMLHttpRequest();
//     request.open('GET', "https://damp-hamlet-50601.herokuapp.com/group/" + num);

//     request.addEventListener('load', function () {
//         //get the json and parse it
//         let response = JSON.parse(request.responseText);
//         console.log("group id sent")
//         console.log(response);
//     })
//     request.send();
// }

// -set up post fuction--js
//-- on drop
function postGroup(user, group) {
    console.log('what were sending: ' + user + ', ' + group);
    // post the group info
    let request = new XMLHttpRequest();
    request.open('POST', "https://damp-hamlet-50601.herokuapp.com/group/" + group + "/" + user);
    request.send();
    console.log(group);

    // ---msg needs to be an object with user id and group id

}
// POST GROUP @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



//add event listener to load dom & getPeeps once page loads


window.addEventListener('load', function () {
    console.log('hello world');
    getPeeps();
    getGroups();
    let submitBtn = document.querySelector("#srchBtn");
    //add a click listener for it that sends a get request with the variable userInput on end
    submitBtn.addEventListener('click', function () {
        let request = new XMLHttpRequest();
        request.open('GET', "https://damp-hamlet-50601.herokuapp.com/people/?search=" + userInput);
        //add eventlistener looking for load
        request.addEventListener('load', function () {
            //parse the response
            let response = JSON.parse(request.responseText);
            console.log(response);
            peepDom(response);
        })
    });

});


// document.querySelector("Search-box")


//set the search button as a variable









// --display group type on friend


