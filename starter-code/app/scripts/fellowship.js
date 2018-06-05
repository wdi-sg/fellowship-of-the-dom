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
  var middleEarth = document.createElement("section");
  middleEarth.id = 'middle-earth';
  for (var i = 0; i < lands.length; i++) {
    var newLand = document.createElement("article");
    var newh1 = document.createElement("h1");
    newh1.textContent = lands[i];
    newLand.appendChild(newh1);
    middleEarth.appendChild(newLand);
  }
  document.body.appendChild(middleEarth);
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

// makeMiddleEarth();


// Part 2

function makeHobbits() {
  var hobbitsList = document.createElement("ul");
  for (var i = 0; i < hobbits.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = hobbits[i];
    listItem.classList.add("hobbit");
    hobbitsList.appendChild(listItem);
  }
  var article2 = document.getElementsByTagName("article")[0];
  article2.appendChild(hobbitsList);
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
}

// makeHobbits();

function weaken() {
  nazgulScreech();
  var frodo = document.getElementsByClassName("hobbit")[0];
  setTimeout(function() {
    frodo.style.opacity = "0";
  }, 1000);
  setTimeout(function() {
    frodo.style.opacity = "1";
  }, 3000);
}

// Part 3

function keepItSecretKeepItSafe() {
  var theRing = document.createElement("div");
  theRing.id = "the-ring";
  theRing.classList.add("magic-imbued-jewelry");
  theRing.addEventListener("click", weaken);
  var frodo = document.getElementsByClassName("hobbit")[0];
  frodo.appendChild(theRing);
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}

// keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  var asideTag = document.createElement("aside");
  var buddiesList = document.createElement("ul");
  for (var i = 0; i < buddies.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = buddies[i];
    buddiesList.appendChild(listItem); 
  }
  asideTag.appendChild(buddiesList);
  var rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(asideTag);
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

// makeBuddies();

// Part 5


function beautifulStranger() {
  document.getElementsByTagName("li")[7].textContent = "Aragorn";
  // change the 'Strider' textnode to 'Aragorn'
}

// beautifulStranger();

// Part 6

function leaveTheShire() {
  var theShire = document.getElementsByTagName("ul")[0];
  var rivendell = document.getElementsByTagName("ul")[1];
  while (theShire.hasChildNodes()) {
    rivendell.appendChild(theShire.firstChild);
  }
  // assemble the hobbits and move them to Rivendell
}

// leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  var rivendell = document.getElementsByTagName("article")[1];
  var newDiv = document.createElement("div");
  newDiv.id = "the-fellowship";
  rivendell.appendChild(newDiv);
  var oldList = document.getElementsByTagName("ul")[1];
  var party = document.getElementsByTagName("div")[2];
  while (oldList.hasChildNodes()) {
    party.appendChild(oldList.firstChild);
    // alert(party.lastChild.textContent + " has joined the Fellowship!");
  }
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

// forgeTheFellowShip();

// Part 8


function theBalrog() {
  var gandalf = document.getElementsByTagName("li")[0];
  gandalf.textContent = "Gandalf the White";
  gandalf.style.backgroundColor  = "white";
  gandalf.style.border = "thick solid grey";
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}

// theBalrog();

// Part 9

function hornOfGondor() {
  // alert("The Horn of Gondor has been blown!");
  var boromir = document.getElementsByTagName("li")[4];
  boromir.style.textDecoration = "line-through";
  var fellowship = document.getElementById("the-fellowship");
  fellowship.removeChild(fellowship.children[4]);
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}

// hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  var mordor = document.getElementsByTagName("article")[2];
  var frodo = document.getElementsByClassName("hobbit")[0];
  var sam = document.getElementsByClassName("hobbit")[1]
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  var newDiv = document.createElement("div");
  newDiv.id = 'mount-doom';
  mordor.appendChild(newDiv);
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  var gollum = document.createElement("div");
  gollum.id = "gollum";
  var mordor = document.getElementsByTagName("article")[2];
  mordor.appendChild(gollum);
  var divGollum = document.getElementById("gollum");
  var frodo = document.getElementById("the-ring");
  frodo.removeAttribute("id");
  frodo.classList.remove("magic-imbued-jewelry");
  divGollum.setAttribute("id", "the-ring");
  divGollum.classList.add("magic-imbued-jewelry");
  var mountDoom = document.getElementById("mount-doom");
  mountDoom.appendChild(divGollum);
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  var mountDoom = document.getElementById("mount-doom");
  mountDoom.removeChild(mountDoom.firstChild);
  var theShire = document.getElementsByTagName("ul")[0];
  var hobbits = document.getElementsByClassName("hobbit");
  for (var i = 0; i < hobbits.length; i++) {
    theShire.appendChild(hobbits[i]);
  }
  var mordor = document.getElementsByTagName("article")[2];
  mordor.removeChild(mordor.lastChild);
  mordor.style.background = "url('')";
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}

window.onload = function() {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBuddies();
  beautifulStranger();
  leaveTheShire();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
}