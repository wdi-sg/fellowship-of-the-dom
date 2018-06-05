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
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

function makeMiddleEarth() {
  var middleEarth = document.createElement('section');
  // middleEarth.setAttribute('id, middle-earth');
  for (var i=0; i<lands.length; i++) {
    var land = document.createElement('article');
    land.innerHTML = "<h1>" + lands[i] + "</h1>";
    middleEarth.appendChild(land);
    body.appendChild(middleEarth);
  }
}    

makeMiddleEarth();

// Part 2
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit

function makeHobbits() {
  var theHobbits = document.createElement('ul');
  for (var i=0; i<hobbits.length; i++) {
    var eachHobbit = document.createElement('li');
    eachHobbit.className = 'hobbits';
    eachHobbit.innerText = hobbits[i];
    theHobbits.appendChild(eachHobbit);
  }
  theShire.appendChild(theHobbits);
}
makeHobbits();

// Part 3
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

function keepItSecretKeepItSafe() {
  var theRing = document.createElement('div');
  theRing.setAttribute('id, the-ring');
  theRing.setAttribute('class, magic-imbued-jewelry');
  theRing.addEventListener('click', nazgulScreech);
  frodo.appendChild(theRing);
}
keepItSecretKeepItSafe();

// Part 4
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

function makeBuddies() {
  var buddyList = document.createElement('aside');
  buddyList.document.createElement('ul');
  for (var i=0; i<buddies.length; i++) {
    var unorderedBuddies = document.createElement('li');
    unorderedBuddies = buddies[i];
    buddyList.appendChild(unorderedBuddies);
  }
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
}
makeBuddies();


// Part 5
  // change the 'Strider' textnode to 'Aragorn'
  // .getElementsByTagName("title")[0].childNodes[0].nodeValue = "new content"

function beautifulStranger() {
  var striderAragon = rivendell.querySelectorAll('li')[3];
  strider.textContent = 'Aragorn';
}
beautifulStranger();

// Part 6
  // assemble the hobbits and move them to Rivendell

function leaveTheShire() {
  rivendell.appendChild(hobbits);
}
leaveTheShire();


// Part 7

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var theFellowship = document.createElement('div');
  fellowship.setAttribute('id, the-fellowship');
  var theFellowship = rivendell.querySelectorAll('li');
  for (i=o; i<theFellowship.length; i++) {
    alert(theFellowship[i].textContent + "has joined your party.");
  }
  rivendell.appendChild('theFellowship')
}
forgeTheFellowShip()

// Part 8
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

function theBalrog() {
  var gandalfColorChange = rivendell.querySelector('li')[0];
  gandalf.textContent = 'Gandalf the White';
  gandalf.style.background = 'white';
  gandalf.style.border = 'grey';
}
theBalrog();

// Part 9
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

function hornOfGondor() {
  alert('Horn of Gondor has been blown!');
  boromir.style.textDecoration = linethrough;
  boromir.parentNode.removeChild(boromir);
}
hornOfGondor();


// Part 10
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor

function itsDangerousToGoAlone(){
  var sam = theFellowship[6]
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  var mountDoom = document.createElement('div');
  mountDoom.setAttribute=('id, mount-doom');
  mordor.appendChild(mountDoom);
}
itsDangerousToGoAlone();

// Part 11
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom

function weWantsIt() {
  var gollum = document.createElement('div');
  mordor.appendChild(gollum);
  gollum.appendChild(theRing);
  mountDoom.appendChild(gollum);
}
weWantsIt();

// Part 12
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire

function thereAndBackAgain() {
  gollum.parentElement.removeChild(gollum);
}
