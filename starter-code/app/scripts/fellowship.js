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
  var section = document.createElement("section");
  section.setAttribute("id", "middle-earth");
  // add each land as an article tag
  for(var i = 0; i < lands.length; i++){
    var landArt = document.createElement("article");
    // inside each article tag include an h1 with the name of the land
    var landSize = document.createElement("h1");
    landSize.innerHTML = lands[i];
    landArt.appendChild(landSize);
    section.appendChild(landArt);
    }
    // append middle-earth to your document body
    document.body.appendChild(section);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var shire = section.children[0];
  for(var i = 0; i < hobbits.length; i++){
    var hobbitsArr = document.createElement("ul");
    var hobbitsList = document.createElement("li");
    // give each hobbit a class of hobbit
    hobbitsList.setAttribute("class", "hobbit");
    hobbitsList.innerHTML = hobbits[i];
    hobbitsArr.appendChild(hobbitsList);
  }
  shire.appendChild(hobbitsArr);
}


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement("div");
  theRing.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute("class", "magic-imbued-jewelry");
  // add the ring as a child of Frodo
  var frodo = document.querySelector('li');
  frodo.appendChild(theRing);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  document.getElementById("the-ring").addEventListener('click', nazgulScreech);
}


// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside");
  var rivendell = section.children[1];
  // attach an unordered list of the 'buddies' in the aside
  var buddiesArr = document.createElement("ul");
    for(var i = 0; i < buddies.length; i++){
        var buddiesList = document.createElement("li")
        buddiesList.innerHTML = buddies[i];
        buddiesArr.appendChild(buddiesList);
        aside.appendChild(buddiesArr);
  }
  // insert your aside as a child element of rivendell
  rivendell.appendChild(aside);
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.getElementsByTagName('li')[4].innerHTML = "Aragorn";
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
    rivendell.appendChild(hobbitsArr);
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement("div");
  rivendell.appendChild(fellowship);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


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
