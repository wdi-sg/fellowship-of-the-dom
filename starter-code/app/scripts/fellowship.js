console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {

    var section = document.createElement("section");

    section.setAttribute('id', 'middle-earth');

    for (var i = 0; i < lands.length; i++) {

        var newArticle = document.createElement("article");

        var newHeader = document.createElement("h1");

        newHeader.textContent = lands[i];

        newArticle.appendChild(newHeader);

        section.appendChild(newArticle);
    }

    document.body.appendChild(section);
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {

    var unorderList = document.createElement('ul');

    var middleEarth = document.querySelectorAll('h1');

    var shire = middleEarth[0];

    for (var i = 0 ; i < hobbits.length ; i++ ) {

        var list = document.createElement('li');

        list.classList.add('hobbit');

        list.textContent = hobbits[i];

        unorderList.appendChild(list);

    }

    shire.appendChild(unorderList);

  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
}

 makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {

    var ringDiv = document.createElement('div');

    ringDiv.classList.add('magic-imbued-jewelry');

    ringDiv.setAttribute('id', 'the-ring');

    var frodo = document.querySelector('li');

    frodo.appendChild(ringDiv);

    //  var fadeOut =function(){

    // frodo.style="opacity:0;transition: opacity .25s ease-in-out";

    //  }

    //  var fadeIn =function(){

    //     frodo.style="opacity:1;transition: opacity .25s ease-in-out";
    //  }

     ringDiv.addEventListener("click", function() {

        nazgulScreech();

    //     fadeOut();

    //     setTimeout(fadeIn,1000);

    //      if (event.detail ===3){

    //         alert("The Ring has been returned to Sauron and the world is over.");

    //         document.body.innerHTML = '';
        // }
    });


  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
}

 keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {

    var middleEarth = document.querySelectorAll('h1');

    var rivdendell = middleEarth[1];

    var asideTag = document.createElement('aside');

    var unorderList = document.createElement('ul');

    for (var i=0 ; i < buddies.length ; i++) {

        var list = document.createElement('li')

        list.textContent = buddies[i];

        unorderList.appendChild(list);

        asideTag.appendChild(unorderList);
    };

rivdendell.appendChild(asideTag);

    // var aside = document.createElement('aside');

    // var unorderList = document.createElement('ul');

    // for (var i = 0; i < buddies.length; i++) {

    //     var unorderedListBuddies = document.createElement("li");

    //     unorderedListBuddies.textContent = buddies[i];

    //     unorderList.appendChild(unorderedListBudddies);

    //     aside.appendChild(newArticle);
    // }

    // document.body.appendChild(article;



  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
