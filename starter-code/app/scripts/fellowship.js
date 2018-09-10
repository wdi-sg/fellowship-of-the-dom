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
  // create a section tag with an id of middle-earth
    var middleEarth = document.createElement("section");
    middleEarth.id = "middle-earth";
  // add each land as an article tag
    for (var i=0; i<lands.length; i++){
        var newLands = document.createElement("article");
        //console.log(newLands);
        var newLandsTwo = document.createElement("h1");
        //console.log(newLandsTwo);
        newLands.appendChild(newLandsTwo);

        newLandsTwo.textContent = lands[i];

        //console.log(newLands);
        middleEarth.appendChild(newLands);
}

  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
    document.body.appendChild(middleEarth);
    console.log(middleEarth);

}

makeMiddleEarth();

var theShire = body.querySelectorAll("article")[0];
var rivendell = body.querySelectorAll("article")[1];
var mordor = body.querySelectorAll("article")[2];


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    var hobbitList = document.createElement("ul");
  // give each hobbit a class of hobbit
    for(var i = 0; i < hobbits.length; i++){
        var newHobbit = document.createElement("li");
        newHobbit.textContent = hobbits[i];
        newHobbit.className = "hobbit";
        hobbitList.appendChild(newHobbit);
    }
    theShire.appendChild(hobbitList);
}

makeHobbits();

var frodo = body.querySelectorAll("li")[0];
var samwise = body.querySelectorAll("li")[1];
var merry = body.querySelectorAll("li")[2];
var pippin = body.querySelectorAll("li")[3];

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
    var theRing = document.createElement("div");
    theRing.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'
    theRing.classList.add("magic-imbued-jewelry");
  // add the ring as a child of Frodo
    frodo.appendChild(theRing);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    theRing.addEventListener("click", nazgulScreech());

}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
    var aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
    var buddiesList = document.createElement("ul");
    for (var i = 0; i < buddiesList.length; i++){
        var newBuddies = document.createElement("li");
        newBuddies.textContent = buddies[i];
        buddiesList.appendChild(newBuddies);
    }
  // insert your aside as a child element of rivendell
    aside.appendChild(buddiesList);
    rivendell.appendChild(aside);
}

makeBuddies();

var gandalf = rivendell.querySelectorAll("li")[0];
var legolas = rivendell.querySelectorAll("li")[1];
var gimli = rivendell.querySelectorAll("li")[2];
var strider = rivendell.querySelectorAll("li")[3];
var boromir = rivendell.querySelectorAll("li")[4];

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = "Aragorn";
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
    var theFellowship = document.createElement("div");
    theFellowship.id = "the-fellowship";
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
    gandalf.textContent = "Gandalf the White";
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
