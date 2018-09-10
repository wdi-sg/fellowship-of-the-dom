console.log("Linked.");

// Dramatis Personae
var hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

var buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

var lands = ["The Shire", "Rivendell", "Mordor"];
var body = document.querySelector("body");

// Part 1

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");
  // add each land as an article tag
  lands.forEach(function(land) {
    var landArticle = document.createElement("article");
    // inside each article tag include an h1 with the name of the land
    landArticle.innerHTML = "<h1>" + land + "</h1>";
    middleEarth.appendChild(landArticle);
    // append middle-earth to your document body
    body.appendChild(middleEarth);
  });
}

makeMiddleEarth();

// Part 2
var shire = document.getElementById("middle-earth").children[0];
var hobbitList = document.createElement("ul");

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  hobbits.forEach(function(hobbit) {
    var singleHobbit = document.createElement("li");
    singleHobbit.textContent = hobbit;
    // give each hobbit a class of hobbit
    singleHobbit.className = "hobbit";
    hobbitList.appendChild(singleHobbit);
    shire.appendChild(hobbitList);
  });
}
makeHobbits();
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement("div");
  theRing.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute("class", "magic-imbued-jewelry");
  // add the ring as a child of Frodo
  var frodo = document.getElementsByClassName("hobbit")[0];
  frodo.appendChild(theRing);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener("click", nazgulScreech);
}

keepItSecretKeepItSafe();

// Part 4
var rivendell = document.getElementById("middle-earth").children[1];
var buddiesList = document.createElement("ul");

function makeBuddies() {
  // create an aside tag
  var asideBuddies = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  buddies.forEach(function(buddy) {
    var singleBuddy = document.createElement("li");
    singleBuddy.textContent = buddy;
    singleBuddy.className = "buddy";
    buddiesList.appendChild(singleBuddy);
  });
  // insert your aside as a child element of rivendell
  rivendell.appendChild(buddiesList);
}
makeBuddies();

// Part 5
var strider = buddiesList.children[3];

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = "Aragorn";
}
beautifulStranger();

// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbitList);
}
leaveTheShire();

// Part 7
// create a new div called 'the-fellowship' within rivendell

function forgeTheFellowShip() {
  var theFellowship = document.createElement("div");
  theFellowship.id = "the-fellowship";
  // add each hobbit and buddy one at a time to 'the-fellowship'
  var fellowshipList = rivendell.querySelectorAll("li");
  fellowshipList.forEach(function(person) {
    theFellowship.appendChild(person);
    // after each character is added make an alert that they have joined your party
    alert(person.textContent + " has joined your party.");
  });
  //append the fellowship to rivendell.
  rivendell.appendChild(theFellowship);
  return theFellowship;
}
forgeTheFellowShip();

// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalf = document.getElementsByTagName("li")[0];
  gandalf.textContent = "Gandalf the White";
  // apply style to the element
  gandalf.style.backgroundColor = "white";
  // make the background 'white', add a grey border
  gandalf.style.border = "10px solid grey";
}
theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  alert(
    "The horn of Gondor has been blown. Boromir's been killed by the Uruk-hai!"
  );
  // put a linethrough on boromir's name
  var boromir = document.getElementsByTagName("li")[4];
  boromir.style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship
  var theFellowship = document.getElementById("the-fellowship");
  theFellowship.removeChild(theFellowship.children[4]);
}
hornOfGondor();

// Part 10
var mordor = document.getElementById("middle-earth").children[2];
function itsDangerousToGoAlone() {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var frodo = document.getElementsByTagName("li")[4];
  var sam = document.getElementsByTagName("li")[5];

  mordor.appendChild(frodo);
  mordor.appendChild(sam);
}
// add a div with an id of 'mount-doom' to Mordor
var mountDoom = document.createElement("div");
mountDoom.id = "mount-doom";
mordor.appendChild(mountDoom);

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement("div");
  gollum.id = "gollum";
  mordor.appendChild(gollum);
  // Remove the ring from Frodo and give it to Gollum
  var theRing = document.getElementById("the-ring");
  gollum.appendChild(theRing);
  // Move Gollum into Mount Doom
  mountDoom.appendChild(gollum);
}
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var gollum = document.getElementById("gollum");
  var theRing = document.getElementById("the-ring");
  mountDoom.remove(gollum);
  mountDoom.remove(theRing);
  // remove all the baddies from the document
  var buddies = document.getElementsByClassName("buddies");
  // Move all the hobbits back to the shire
}
thereAndBackAgain();
