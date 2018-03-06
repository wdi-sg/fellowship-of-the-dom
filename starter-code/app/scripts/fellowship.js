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
  var middleEarthElement = document.createElement("section");
  middleEarthElement.setAttribute('id', 'middle-earth');
  body.appendChild(middleEarthElement);
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  lands.forEach(function(land) {
    var articleElement = document.createElement("article");
    var h1Element = document.createElement("h1");
    h1Element.innerHTML = land;
    articleElement.setAttribute("id", land);
    articleElement.appendChild(h1Element);
    document.getElementById("middle-earth").appendChild(articleElement);
  })
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var shireElement = document.getElementById("The Shire");
  var ulElement = document.createElement("ul");
  hobbits.forEach(function(hobbit) {
    var liElement = document.createElement("li");
    liElement.innerHTML = hobbit;
    liElement.setAttribute("class", "hobbit");
    ulElement.appendChild(liElement);
  })
  shireElement.appendChild(ulElement);
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var divElement = document.createElement("div");
  divElement.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  divElement.setAttribute("class", "magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  divElement.addEventListener("click", function() {
    nazgulScreech();
  })
  // add the ring as a child of Frodo
  var frodoElement = document.querySelector("ul li:nth-child(1)");
  frodoElement.appendChild(divElement);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  var asideElement = document.createElement("aside");
  var rivendellElement = document.getElementById("Rivendell");

  // attach an unordered list of the 'buddies' in the aside
  var ulElement = document.createElement("ul");

  buddies.forEach(function(buddy) {
    var liElement = document.createElement("li");
    liElement.innerHTML = buddy;
    ulElement.appendChild(liElement);
  })

  // insert your aside as a child element of rivendell
  asideElement.appendChild(ulElement);
  rivendellElement.appendChild(asideElement);
  
}

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var striderElement = document.querySelector("aside ul li:nth-child(4)");
  striderElement.innerText = "Aragorn";
}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbitUlElement = document.querySelector("article ul");
  // var theShireElement = document.getElementById("The Shire");
  var rivendallElement = document.getElementById("Rivendell");
  // theShireElement.removeChild(hobbitUlElement);
  rivendallElement.appendChild(hobbitUlElement);
}

leaveTheShire();


// Part 7

var allCharacters = document.querySelectorAll("li");

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var divElement = document.createElement("div");
  divElement.setAttribute("id", "the-fellowship");
  var rivendallElement = document.getElementById("Rivendell");

  for (var i = 0; i < allCharacters.length; i++) {
    // after each character is added make an alert that they have joined your party
    alert(allCharacters[i] + " has joined the party!");
    divElement.appendChild(allCharacters[i])
  }
  rivendallElement.appendChild(divElement);
}

forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalfElement = allCharacters[0];
  gandalfElement.innerText = "Gandalf the White";
  // apply style to the element
  // make the background 'white', add a grey border
  gandalfElement.style["background-color"] = "white"
  gandalfElement.style["border"] = "grey"
}

theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of Gondor has been blown!");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var boromirElement = allCharacters[4];
  boromirElement.style["text-decoration"] = "line-through";
  // Remove Boromir from the Fellowship
  document.getElementById("the-fellowship").removeChild(boromirElement);
}

hornOfGondor();


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var frodoElement = allCharacters[5];
  var samElement = allCharacters[6];
  // add a div with an id of 'mount-doom' to Mordor
  var mordorElement = document.getElementById("Mordor");
  var mountDoom = document.createElement("div");
  mountDoom.id = "mount-doom";
  mountDoom.appendChild(frodoElement);
  mountDoom.appendChild(samElement);
  mordorElement.appendChild(mountDoom);
}

itsDangerousToGoAlone();


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollumElement = document.createElement("div");
  gollumElement.innerHTML = "Gollum";
  gollumElement.id = "Gollum";
  var mordorElement = document.getElementById("Mordor");
  mordorElement.appendChild(gollumElement);
  // Remove the ring from Frodo and give it to Gollum
  var frodoElement = allCharacters[5];
  var ringElement = document.getElementById("the-ring");
  // Move Gollum into Mount Doom
  gollumElement.appendChild(ringElement);
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var mordorElement = document.getElementById("Mordor");
  var gollumElement = document.getElementById("Gollum");
  var fellowshipElement = document.getElementById("the-fellowship");
  mordorElement.removeChild(gollumElement)
  // remove all the buddies from the document
  var buddies = document.querySelectorAll("#the-fellowship li:not([class=\"hobbit\"])");
  buddies.forEach(function(buddy) {
    fellowshipElement.removeChild(buddy);
  });
  // Move all the hobbits back to the shire
  var hobbits = document.querySelectorAll("[class=\"hobbit\"]");
  var theShireElement = document.getElementById("The Shire");
  hobbits.forEach(function(hobbit) {
    theShireElement.appendChild(hobbit);
  });
}

thereAndBackAgain();
