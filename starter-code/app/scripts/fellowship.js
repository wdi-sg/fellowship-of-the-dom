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
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

  var middleEarth = document.createElement("section");
  middleEarth.id = "middle-earth";

  for (i in lands) {
    var newElement = document.createElement("article");
    middleEarth.appendChild(newElement);
    var newh1 = document.createElement("h1");
    newh1.innerText = lands[i];
    newElement.appendChild(newh1);
  }
  document.body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit

  var ulHobbits = document.createElement("ul");
  for (i in hobbits) {
    var newElement = document.createElement("li");
    newElement.innerText = hobbits[i];
    newElement.classList.add("hobbit");
    ulHobbits.appendChild(newElement);
  }
  var theShire = document.querySelectorAll("article")[0];
  theShire.appendChild(ulHobbits);
}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

  var theRing = document.createElement("div");
  theRing.id = "the-ring";
  theRing.classList.add("magic-imbued-jewelry");
  var frodo = document.querySelectorAll(".hobbit")[0];
  frodo.appendChild(theRing);
  theRing.addEventListener('click',nazgulScreech);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

  var asideBuddies = document.createElement("aside");
  ulBuddies = document.createElement("ul");
  for (i in buddies) {
    var newElement = document.createElement("li");
    newElement.innerText = buddies[i];
    newElement.classList.add("buddy");
    ulBuddies.appendChild(newElement);
  }
  asideBuddies.appendChild(ulBuddies);
  var rivendell = document.querySelectorAll("article")[1];
  rivendell.appendChild(asideBuddies);
}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var target = document.getElementsByTagName("li");
  for (i in target) {
    if (target[i].textContent === "Strider") {
      target[i].textContent = "Aragorn";
    }
  }
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var theShire = document.querySelectorAll("article")[0];
  var rivendell = document.querySelectorAll("article")[1];
  var ulHobbits = document.getElementsByTagName("ul")[0];
  theShire.removeChild(ulHobbits);
  rivendell.appendChild(ulHobbits);
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

  var theFellowship = document.createElement("div");
  theFellowship.id = "the-fellowship";
  var rivendell = document.querySelectorAll("article")[1];
  rivendell.appendChild(theFellowship);

  var inHobbits = document.querySelectorAll(".hobbit");
  for (i = 0; i < inHobbits.length; i++) {
    newElement = document.querySelector(".hobbit");
    var ulHobbits = document.getElementsByTagName("ul")[1];
    ulHobbits.removeChild(newElement);
    alert(`${newElement.textContent} has joined the party!`);
    theFellowship.appendChild(newElement);
  }

  var inBuddies = document.querySelectorAll(".buddy");
  for (i = 0; i < inBuddies.length; i++) {
    newElement = document.querySelector(".buddy");
    var ulBuddies = document.getElementsByTagName("ul")[0];
    ulBuddies.removeChild(newElement);
    alert(`${newElement.textContent} has joined the party!`);
    theFellowship.appendChild(newElement);
  }
}

forgeTheFellowShip();


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
