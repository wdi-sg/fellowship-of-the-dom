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

  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

function makeMiddleEarth() {

    var newSection = document.createElement("section");
    newSection.id = "middle-earth";

    for (i in lands) {
        var newArticle = document.createElement("article");

        var newh1 = document.createElement("h1");
        newh1.textContent = lands[i];

        newArticle.appendChild(newh1);
        newSection.appendChild(newArticle);
    }
    document.body.appendChild(newSection);
}
makeMiddleEarth();


// Part 2

  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

function makeHobbits() {

    var newHobbits = document.createElement("ul");

    for (i in hobbits) {
        var newHobbit = document.createElement("li");
        newHobbit.classList.add("hobbit");
        newHobbit.textContent = hobbits[i];
        newHobbits.appendChild(newHobbit);
    }

    document.querySelectorAll("article")[0].appendChild(newHobbits);
}
makeHobbits();


// Part 3

  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

function keepItSecretKeepItSafe() {

    var newDivRing = document.createElement("div");
    newDivRing.id = "the-ring";
    newDivRing.classList.add("magic-imbued-jewelry");
    document.querySelectorAll("li")[0].appendChild(newDivRing);

    document.getElementById("the-ring").addEventListener("click", nazgulScreech);
}
keepItSecretKeepItSafe();

// Part 4

  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell


var theShire = document.querySelectorAll("article")[0];
var Rivendell = document.querySelectorAll("article")[1];
var Mordor = document.querySelectorAll("article")[2];


function makeBuddies() {

    var newAside = document.createElement("aside");

    for (i in buddies) {
        var newBuddy = document.createElement("li");
        newBuddy.textContent = buddies[i];
        newAside.appendChild(newBuddy);
    }

    Rivendell.appendChild(newAside);
}
makeBuddies();

// Part 5

  // change the 'Strider' textnode to 'Aragorn'

function beautifulStranger() {
    document.querySelectorAll("aside li")[3].textContent = "Aragorn";
}
beautifulStranger();

// Part 6

  // assemble the hobbits and move them to Rivendell

function leaveTheShire() {
    var oldHobbits = document.querySelectorAll("ul")[0];
    var hobbits = theShire.removeChild(oldHobbits); // can instead omit this line
    Rivendell.appendChild(hobbits); // and just use oldHobbits here
}
leaveTheShire();

// Part 7

  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

function forgeTheFellowShip() {
    var fellowship = document.createElement("div");
    fellowship.id = "the-fellowship";
    Rivendell.appendChild(fellowship);

    var fellowHobbits = document.querySelectorAll("ul .hobbit");
    var fellowBuddies = document.querySelectorAll("aside li");
// debugger; -why can I not use (i in fellowHobbits) for next line??
    for (i = 0; i < fellowHobbits.length; i++) {
        fellowship.appendChild(fellowHobbits[i]);
        // alert(`${fellowHobbits[i].textContent} has joined your party.`);
    }
    for (i = 0; i < fellowBuddies.length; i++) {
        fellowship.appendChild(fellowBuddies[i]);
        // alert(`${fellowBuddies[i].textContent} has joined your party.`);
    }

}
forgeTheFellowShip();


// Part 8

  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

function theBalrog() {

    var gandalf = document.querySelectorAll("#the-fellowship li")[4];
    gandalf.textContent = "Gandalf the White";
    gandalf.style.background = "white";
    gandalf.style.border = "grey";
}
theBalrog();

// Part 9

  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

function hornOfGondor() {
    alert("The horn of Gondor has been blown.")
    var boromir = document.querySelectorAll("#the-fellowship li")[8];
    boromir.style.textDecoration = "line-through";
    document.querySelector("#the-fellowship").removeChild(boromir);
}
hornOfGondor();

// Part 10

  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor

function itsDangerousToGoAlone(){
    var frodo = document.querySelectorAll("#the-fellowship li")[0];
    var sam = document.querySelectorAll("#the-fellowship li")[1];

    Mordor.appendChild(frodo);
    Mordor.appendChild(sam);

    var newDiv = document.createElement("div");
    newDiv.id = "mount-doom";
    Mordor.appendChild(newDiv);
}
itsDangerousToGoAlone();

// Part 11

  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom

function weWantsIt() {
    var gollum = document.createElement("div");
    gollum.id = "gollum";
    Mordor.appendChild(gollum);

    var theRing = document.querySelector("#the-ring");

    gollum.appendChild(theRing);
    document.querySelector("#mount-doom").appendChild(gollum);
}
weWantsIt();

// Part 12

  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire

function thereAndBackAgain() {
    var gollum = document.querySelector("#gollum");
    var mtdoom = document.querySelector("#mount-doom");

    mtdoom.removeChild(gollum);

    var hobbitses = document.querySelectorAll(".hobbit");

    for (i = 0; i < hobbitses.length; i++) {
        theShire.appendChild(hobbitses[i]);
    }
}
thereAndBackAgain();










