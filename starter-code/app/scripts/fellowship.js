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
  for (var i=0; i<lands.length; i++) {
    // add each land as an article tag
    var land = document.createElement("article");
    // inside each article tag include an h1 with the name of the land
    land.innerHTML = "<h1>" + lands[i] + "</h1>";
    middleEarth.appendChild(land);
  }
  // append middle-earth to your document body
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

var theShire = body.querySelectorAll("article")[0];
var rivendell = body.querySelectorAll("article")[1];
var mordor = body.querySelectorAll("article")[2];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var listOfHobbit = document.createElement("ul");

  for( var i=0; i<hobbits.length; i++) {
    // give each hobbit a class of hobbit
    var hobbit = document.createElement("li");
    hobbit.className = "hobbit";
    hobbit.innerText = hobbits[i];
    listOfHobbit.appendChild(hobbit);
  }
  theShire.appendChild(listOfHobbit);
}

makeHobbits();


// Part 3

var frodo = body.querySelectorAll("li")[0];

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement("div");
  theRing.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  theRing.className = "magic-imbued-jewelry";
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener("click", nazgulScreech);
  // add the ring as a child of Frodo
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  var asideBuddy = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var listOfBuddies = document.createElement("ul");
  for(var i=0; i<buddies.length; i++) {
    var buddy = document.createElement("li");
    buddy.className = "buddy";
    buddy.innerText = buddies[i];
    listOfBuddies.appendChild(buddy);
  }
  asideBuddy.appendChild(listOfBuddies);
  // insert your aside as a child element of rivendell
  rivendell.appendChild(asideBuddy);
}

makeBuddies();

// Part 5

var strider = rivendell.querySelectorAll("li")[3];

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = "Aragorn";
}

beautifulStranger();

// Part 6

var newHobbit = theShire.querySelector("ul");

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(newHobbit);
}

leaveTheShire();

// Part 7

var fellowshipTeam = rivendell.querySelectorAll("li");

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowshipDiv = document.createElement("div");
  fellowshipDiv.setAttribute("id", "the-fellowship");
  // add each hobbit and buddy one at a time to 'the-fellowship'
  for (var i=0; i<fellowshipTeam.length; i++) {
    fellowshipDiv.appendChild(fellowshipTeam[i]);
  }
    rivendell.appendChild(fellowshipDiv);
  // after each character is added make an alert that they have joined your party
  
}

forgeTheFellowShip();

// Part 8

var newGandalf = rivendell.querySelectorAll("li")[0];

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  newGandalf.textContent = "Gandalf the White";
  // apply style to the element
  // make the background 'white', add a grey border
  newGandalf.style.border = "5px solid grey";
  newGandalf.style.backgroundColor = "white";
}

theBalrog();

// Part 9
var goneBoromir = fellowshipTeam[4];
var boromirParent = rivendell.querySelectorAll("ul");

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of Gondor has been blown!");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  goneBoromir.style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship
  goneBoromir.parentNode.removeChild(goneBoromir);
}

hornOfGondor();

// Part 10

var leaveFrodo = fellowshipTeam[5];
var leaveSam = fellowshipTeam[6];

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var newFrodo = leaveFrodo.parentNode.removeChild(leaveFrodo);
  var newSam = leaveSam.parentNode.removeChild(leaveSam);
  mordor.appendChild(newFrodo);
  mordor.appendChild(newSam);
  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement("div");
  mountDoom.setAttribute("id", "mount-doom");
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");

  var theRing = frodo.querySelector("#the-ring");
  // Remove the ring from Frodo and give it to Gollum
  gollum.appendChild(theRing);
  // Move Gollum into Mount Doom
  var mountDoom = mordor.querySelector("#mount-doom");
  mountDoom.appendChild(gollum);
}

weWantsIt();


// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  gollum.parentNode.removeChild(gollum);
  // remove all the baddies from the document
  var hobbitUnited = document.createElement("ul");
  var hobbits = body.querySelectorAll(".hobbit");
  for(var i=0; i<hobbits.length; i++) {
    hobbitUnited.appendChild(hobbits[i]);
  }
  // Move all the hobbits back to the shire
  theShire.appendChild(hobbitUnited);
}

thereAndBackAgain();
