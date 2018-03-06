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
  midEarth.setAttribute("id","middle-earth");
  // add each land as an article tag
  for(var i=0;i<lands.length;i++){
    var currLand = document.createElement("article");
    midEarth.appendChild(currLand);
    var landName = document.createElement("h1");
    landName.textContent=lands[i];
    currLand.appendChild(landName);
  }
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  body.appendChild(midEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var shire = document.getElementsByTagName("article")[0];
  var hobbitsList = document.createElement("ul");
  hobbitsList.setAttribute("id","hobbitsList");
  shire.appendChild(hobbitsList);
  // give each hobbit a class of hobbit
  for(var i=0;i<hobbits.length;i++){
    var currHobbit = document.createElement("li");
    currHobbit.textContent = hobbits[i];
    currHobbit.setAttribute("class","hobbit");
    hobbitsList.appendChild(currHobbit);
  }
}


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ring = document.createElement("div");
  ring.setAttribute("id","div");
  // give the div a class of 'magic-imbued-jewelry'
  ring.setAttribute("class","magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ring.addEventListener("click",nazgulScreech);
  // add the ring as a child of Frodo
  var frodo = document.getElementsByClassName("hobbit")[0];
  frodo.appendChild(ring);
}


// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var buddiesList = document.createElement("ul");
  buddiesList.setAttribute("id","buddiesList");
  aside.appendChild(buddiesList);
  for(var i =0;i<buddies.length;i++){
    var currBuddy = document.createElement("li");
    currBuddy.textContent = buddies[i];
    currBuddy.setAttribute("class","buddy");
    buddiesList.appendChild(currBuddy);
  }
  // insert your aside as a child element of rivendell
  var rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(aside);
}


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var striderNode = document.getElementsByClassName("buddy")[3];
  striderNode.textContent = "Aragorn";
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbitsList = document.getElementById("hobbitsList");
  var rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(hobbitsList);
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement("div");
  fellowship.setAttribute("id","the-fellowship");
  var rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(fellowship);
  // add each hobbit and buddy one at a time to 'the-fellowship'

  // after each character is added make an alert that they have joined your party  

  var getHobbits = document.getElementsByClassName("hobbit");
  var hobbitArr = [];
  for(i=0; i< getHobbits.length; i++){
   hobbitArr .push(getHobbits[i]);
  }

  for(var i=0; i<hobbitArr.length;i++){
   alert(hobbitArr[i].textContent + " has joined the party!");
   fellowship.appendChild(hobbitArr[i]);
  }

  var getBuddies = document.getElementsByClassName("buddy");
  var buddiesArr = [];
   for(i=0; i< getBuddies.length; i++){
   buddiesArr .push(getBuddies[i]);
  }

  for(var i=0; i<buddiesArr.length;i++){
   alert(buddiesArr[i].textContent + " has joined the party!");
   fellowship.appendChild(buddiesArr[i]);
  }

}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var getBuddies = document.getElementsByClassName("buddy");
  var Gandalf = getBuddies[0];
  Gandalf.textContent="Gandalf the White";
  Gandalf.style.backgroundColor = "white";
  Gandalf.style.borderColor = "grey"
}

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("horn of gondor has been blown! Boromir's been killed by the Uruk-hai");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var Boromir = document.getElementsByClassName("buddy")[4];
  Boromir.style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship
  Boromir.remove();
}

makeHobbits();
keepItSecretKeepItSafe()
makeBuddies();
beautifulStranger();
leaveTheShire();
forgeTheFellowShip()
theBalrog();
hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var Mordor = document.getElementsByTagName("article")[2];
  var frodo = document.getElementsByClassName("hobbit")[0];
  var sam = document.getElementsByClassName("hobbit")[1];
  Mordor.appendChild(frodo);
  Mordor.appendChild(sam);
  // add a div with an id of 'mount-doom' to Mordor
  var divDoom = document.createElement("div");
  divDoom.setAttribute("id","mount-doom");
  Mordor.appendChild(divDoom);
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var divGollum = document.createElement("div");
  divGollum.setAttribute("id","gollum");
  // Remove the ring from Frodo and give it to Gollum
  var ring = document.getElementsByClassName("magic-imbued-jewelry")[0];
  divGollum.appendChild(ring);
  // Move Gollum into Mount Doom
  var mountDoom = document.getElementById("mount-doom");
  mountDoom.appendChild(divGollum);
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var Gollum = document.getElementById("divGollum");
  Gollum.remove();
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
