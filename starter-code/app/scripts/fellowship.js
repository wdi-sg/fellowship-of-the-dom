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
var ringClicked = 0;

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

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
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
  theRing.addEventListener('click', nazgulScreech);
  theRing.addEventListener('click', fade);
}

// Bonus: Within the click listener for clicking '#the-ring', add functionality
// so that when it's clicked, it not only calls nazgulScreech but also causes
// Frodo's opacity to go down to 0 for a while, only to fade back in.
// If the ring is clicked three times, the entire body element should disappear,
// to be replaced with the text "The Ring has been returned to Sauron and the world is over."

var fade = function () {
  var ringOwner = document.getElementById("the-ring").parentNode;
  ringOwner.style.opacity = 0;
  ringOwner.style.transition = "opacity 2s ease-in-out";
  var fadeBackIn = setTimeout(function () {
    ringOwner.style.opacity = 1;
  }, 2000);
  ringClicked++;

  if (ringClicked >= 3) {
    document.body.innerHTML="The Ring has been returned to Sauron and the world is over.";
  }
}

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
    ulBuddies.appendChild(newElement);
  }
  asideBuddies.appendChild(ulBuddies);
  var rivendell = document.querySelectorAll("article")[1];
  rivendell.appendChild(asideBuddies);
}


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

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var theShire = document.querySelectorAll("article")[0];
  var rivendell = document.querySelectorAll("article")[1];
  var ulHobbits = document.getElementsByTagName("ul")[0];
  rivendell.appendChild(ulHobbits);
}

// Part 7

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

  var theFellowship = document.createElement("div");
  theFellowship.id = "the-fellowship";
  var rivendell = document.querySelectorAll("article")[1];
  rivendell.appendChild(theFellowship);

  var fellowshipList = rivendell.querySelectorAll("li");
  for (i = 0; i < fellowshipList.length; i++) {
    newElement = fellowshipList[i];
    alert(`${newElement.textContent} has joined the party!`);
    theFellowship.appendChild(newElement);
  }

  //two blank uls left inside
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

  gandalf = document.body.querySelector("li");
  gandalf.textContent = "Gandalf the White";
  gandalf.style.backgroundColor = "white";
  gandalf.style.border = "2px solid grey";
}

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

  alert("The horn of Gondor has been blown!");
  boromir = document.body.querySelectorAll("li")[4];
  boromir.style.textDecoration = "line-through";
  fellowship = document.getElementById("the-fellowship");
  fellowship.removeChild(boromir);
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  fellowship = document.querySelectorAll("li");
  frodo = fellowship[4];
  sam = fellowship[5];
  var mordor = document.querySelectorAll("article")[2];
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  var mountDoom = document.createElement("div");
  mountDoom.id = "mount-doom";
  mordor.appendChild(mountDoom);
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.createElement("div");
  gollum.id = "gollum";
  var theRing = document.getElementById("the-ring");
  gollum.appendChild(theRing);
  var mountDoom = document.getElementById("mount-doom");
  mountDoom.appendChild(gollum);
}

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var theRing = document.getElementById("the-ring");
  var gollum = document.getElementById("gollum");
  var mountDoom = document.getElementById("mount-doom");
  gollum.removeChild(theRing);
  mountDoom.removeChild(gollum);
  var hobbitses = document.querySelectorAll(".hobbit");
  var theShire = document.querySelector("article");
  for (var i = 0; i < hobbitses.length; i++) {
    theShire.appendChild(hobbitses[i]);
  }
}

//Bonus: Delay each step with a setTimeout, so that the DOM manipulation can be seen clearly.

makeMiddleEarth();
setTimeout(makeHobbits, 2000);
setTimeout(keepItSecretKeepItSafe, 4000);
setTimeout(makeBuddies, 6000);
setTimeout(beautifulStranger, 8000);
setTimeout(leaveTheShire, 10000);
setTimeout(forgeTheFellowShip, 12000);
setTimeout(theBalrog, 14000);
setTimeout(hornOfGondor, 16000);
setTimeout(itsDangerousToGoAlone, 18000);
setTimeout(weWantsIt, 20000);
setTimeout(thereAndBackAgain, 22000);
