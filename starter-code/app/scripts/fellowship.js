console.log("Linked.");

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
  for (var i=0; i<lands.length; i++){
    var land = document.createElement("article");
    var landH1 = document.createElement("h1");

    landH1.textContext = lands[i];
    land.appendChild(landH1);
    middleEarth.appendChild(land);
  }
  body.appendChild(middleEarth);
}

makeMiddleEarth();

var theShire = body.querySelectorAll('article')[0];
var rivendell  = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];

console.log(theShire);
console.log(rivendell);
console.log(mordor);

// Part 2

function makeHobbits() {
var hobbitsUL = document.createElement("ul");
for(var i=0; i<hobbits.length; i++) {
    var hobbitsLi = document.createElement("li");
    hobbitsLi.classList.add("hobbit");
    hobbitsLi.textContent = hobbits[i];
    hobbitsUL.appendChild(hobbitsLi);
}
  theShire.appendChild(hobbitsUL);
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
}

makeHobbits();


// Part 3

var Frodo = theShire.querySelectorAll("li")[0]

function keepItSecretKeepItSafe() {

var theRing = document.createElement("div");
theRing.classList.add("magic-imbued-jewelry");
theRing.id = "the-ring";
Frodo.appendChild(theRing);
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
var aside = document.createElement("aside");
var buddyList = document.createElement("ul");

for (var i=0; i<buddies.length; i++) {
    var buddy = document.createElement("li");
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
}
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

makeBuddies();

// Part 5

var strider = rivendell.querySelectorAll("li")[3];

function beautifulStranger() {

strider.innerHTML = "Aragorn";
  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger();

// Part 6

var hobbits = theShire.querySelector("ul");

function leaveTheShire() {

rivendell.appendChild(hobbits);
  // assemble the hobbits and move them to Rivendell
}

leaveTheShire();

// Part 7

var fellowshipTeam = rivendell.querySelectorAll("li");

function forgeTheFellowShip() {

  var theFellowship = document.createElement("div");
  theFellowship.id = "the-fellowship";

for (var i=0; i<fellowshipTeam.length; i++) {
    theFellowship.append(fellowshipTeam[i]);
    alert(fellowshipTeam[i].textContent + " has joined your party!");
}
rivendell.appendChild(theFellowship);
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
};

forgeTheFellowShip();

// Part 8

var gandalf = fellowshipTeam[0];

function theBalrog() {

gandalf.innerHTML = "Gandalf the White";
gandalf.style.background = "White";
gandalf.style.border = "5px solid grey";
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}

theBalrog();

// Part 9

var boromir = fellowshipTeam[4];

function hornOfGondor() {

alert("The horn of Gondor has been blown.");
alert("Boromir's been killed by the Uruk-hai!");

boromir.style.textDecoration = "line-through";
boromir.removeChild(boromir.childNodes[0]);
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}

hornOfGondor();
// Part 10

var sam = fellowshipTeam[6];
var frodo1 = fellowshipTeam[5];

function itsDangerousToGoAlone(){

var mtDoom = document.createElement("div");
mtDoom.id = "mount-doom";
mordor.appendChild(frodo1);
mordor.appendChild(sam);

mordor.appendChild(mtDoom);
   // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

itsDangerousToGoAlone();
// Part 11

function weWantsIt() {

var gollum = document.createElement("div");
gollum.id = "gollum";

theRing = Frodo.querySelector("#the-ring");
gollum.appendChild(theRing);
var mountDoom = mordor.querySelector("#mount-doom");
mountDoom.appendChild(gollum);
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
weWantsIt();

// Part 12

function thereAndBackAgain() {

gollum.remove(gollum);
for (var i=0; i<document.querySelectorAll(".hobbit").length; i++) {
    theShire.appendChild(document.querySelectorAll(".hobbit")[i]);
}

  // theShire.appendChild(hobbitsMove);
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}

thereAndBackAgain();