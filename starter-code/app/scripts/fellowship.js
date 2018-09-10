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
  var midEarth = document.createElement("section");
  midEarth.setAttribute("id", "middle-earth");
  // add each land as an article tag
  for (var i=0; i<lands.length;i++){
    var land = document.createElement("article");
    var landH = document.createElement("h1");
    landH.innerHTML = lands[i];
    land.appendChild(landH);
   // land.innerHTML = "<h1>"+lands[i]+"</h1>";
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
    midEarth.appendChild(land);
  }

  body.appendChild(midEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var unOrdered = document.createElement("ul");
  for (var i=0; i<hobbits.length;i++){
    var list = document.createElement("li");
    // give each hobbit a class of hobbit

    list.classList.add("hobbit");
    list.textContent = hobbits[i];
    unOrdered.appendChild(list);
  }
  document.getElementsByTagName("article")[0].appendChild(unOrdered);
}
makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement("div");
  theRing.setAttribute("id","the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  theRing.classList.add("magic-imbued-jewelry");
  // add the ring as a child of Frodo
  document.getElementsByClassName("hobbit")[0].appendChild(theRing);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  document.addEventListener('click',nazgulScreech);
}

keepItSecretKeepItSafe();
// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var unOrdered = document.createElement("ul");
  for (var i =0; i<buddies.length;i++){
    var list = document.createElement("li");
    list.textContent = buddies[i];
    list.classList.add("buddies");
    unOrdered.appendChild(list);
  }
  aside.appendChild(unOrdered);
  // insert your aside as a child element of rivendell
  document.getElementsByTagName("article")[1].appendChild(aside);
}

makeBuddies();
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var buddy = document.getElementsByClassName("buddies")[3];
  buddy.textContent = "Aragon";
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  for (var i=0; i<hobbits.length;i++){
    var list = document.getElementsByTagName("ul")[0];
    var oldChild = list.removeChild(list.childNodes[0]);
    document.getElementsByTagName("ul")[1].appendChild(oldChild);
  }
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
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
