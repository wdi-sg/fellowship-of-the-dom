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
  for (i=0; i < lands.length; i++) {
  var land = document.createElement("article");
  // inside each article tag include an h1 with the name of the land
  var landH1 = document.createElement("h1");
    landH1.textContent = lands[i];
    land.appendChild(landH1);
    middleEarth.appendChild(land);
  }
  // append middle-earth to your document body
  body.appendChild(middleEarth);
}

makeMiddleEarth();

var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
  var hobbitUL = document.createElement("ul");
  for (j=0; j < hobbits.length; j++) {
    var hobbitLi = document.createElement("li");
    hobbitLi.addClassList = "hobbit";
    hobbitLi.textContent = hobbits[j];
    hobbitUL.appendChild(hobbitLi);
  }
  theShire.appendChild(hobbitUL);
}

makeHobbits();

var Frodo = theShire.querySelectorAll("li")[0];

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var ring = document.createElement("div");
  ring.id = "the-ring";
  ring.addClassList = "magic-imbued-jewelry";
  Frodo.appendChild(ring);
}

keepItSecretKeepItSafe();

// Part 4

function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var buddiesB = document.createElement("aside");
  var buddiesUL = document.createElement("ul");
   for (k=0; k < buddies.length; k++) {
    var buddiesList = document.createElement("li");
    buddiesList.textContent = buddies[k];
    buddiesUL.appendChild(buddiesList);
    buddiesB.appendChild(buddiesUL);
  }
  rivendell.appendChild(buddiesB);
}

makeBuddies();

// Part 5

var strider = rivendell.querySelectorAll("li")[3];
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.innerHTML = "Aragorn";
}

beautifulStranger();

// Part 6

var hobbits = theShire.querySelector("ul");
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbits);
}

leaveTheShire();

// Part 7

var fellowshipGrp = rivendell.querySelectorAll("li");


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
var fellowship = document.createElement("div");
fellowship.id = "the-fellowship";
  for (l=0; l < fellowshipGrp.length; l++) {
  fellowship.append(fellowshipGrp[l]);
    alert(fellowshipGrp[l].textContent + " has joined your party!");
  }
  rivendell.appendChild(fellowship);
}

forgeTheFellowShip();

// Part 8

var gandalf = rivendell.querySelectorAll("li")[0];
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.innerHTML = "Gandalf the White";
  gandalf.setAttribute("style", "background-color: white; border: solid grey;");
}

theBalrog();

// Part 9

var boromir = fellowshipGrp[4];
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("The horn of Gondor has been blown!");
  alert("Boromir's been killed be the Uruk-hai!");
  boromir.setAttribute("style", "text-decoration: line-through;");
}

hornOfGondor();

// Part 10

var frodo = fellowshipGrp[5];
var sam = fellowshipGrp[6];
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  mordor.id = "mount-doom";
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
}

itsDangerousToGoAlone();


// Part 11

var ring = frodo.querySelector("div");

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.createElement("div");
  gollum.id = "gollum";
  mordor.appendChild(gollum);
  frodo.removeChild(ring);
  gollum.appendChild(ring);
}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
