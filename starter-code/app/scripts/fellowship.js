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
  var middleEarth = document.createElement('section');
  // create a section tag with an id of middle-earth
  for (var i = 0; i < lands.length; i++) {
    var land = document.createElement('article');
    land.innerHTML = '<h1>' + lands[i] + '</h1>'
    middleEarth.appendChild(land);
  };
  // add each land as an article tag

  // inside each article tag include an h1 with the name of the land
  body.appendChild(middleEarth);
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2
var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];

function makeHobbits() {

  var hobbitList = document.createElement('ul');
  for (var i = 0; i < hobbits.length; i++) {
    var hobbit = document.createElement('li');
    hobbit.innerText = hobbits[i]
    hobbit.className = 'hobbit';
    hobbitList.appendChild(hobbit);
  }

  theShire.appendChild(hobbitList);
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
}
makeHobbits();


// Part 3
var frodo = body.querySelectorAll('li')[0];

function keepItSecretKeepItSafe() {
  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  theRing.addEventListener('click', nazgulScreech);
  frodo.appendChild(theRing);
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
};

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  var aside = document.createElement('aside');
  var buddyList = document.createElement('ul');
  for (var i = 0; i < buddies.length; i++){
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
  };
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
}

makeBuddies();
// Part 5

var strider = rivendell.querySelectorAll('li')[3];

function beautifulStranger() {
  strider.textContent = 'Aragorn';
  console.log(strider);
  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger();

// Part 6
var hobbits = theShire.querySelector('ul');

function leaveTheShire() {
  rivendell.appendChild(hobbits);
  // assemble the hobbits and move them to Rivendell
};

leaveTheShire();


// Part 7
var fellowShips = rivendell.querySelectorAll('li');

function forgeTheFellowShip() {
  var theFellowShip = document.createElement('div');
  theFellowShip.setAttribute('id', 'the-fellowship');
  for (var i = 0; i < fellowShips.length; i++){
    theFellowShip.appendChild(fellowShips[i]);
    alert(fellowShips[i].textContent + ' has joined your party!');
    console.log(theFellowShip);
  }
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  rivendell.appendChild(theFellowShip);
}

forgeTheFellowShip();


// Part 8
var gandalf = fellowShips[0];

function theBalrog() {
  gandalf.textContent = 'Gandalf the White';
  gandalf.style.backgroundColor = 'white';
  gandalf.style.border = '4px solid grey';
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}

theBalrog();

// Part 9
var boromir = fellowShips[4];

function hornOfGondor() {
  alert("the horn of gondor has been blown");
  boromir.style.textDecoration = 'line-through';
  boromir.parentNode.removeChild(boromir);
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}

hornOfGondor();


// Part 10
var sam = fellowShips[6];

function itsDangerousToGoAlone(){
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  var mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  mordor.appendChild(mountDoom);
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

itsDangerousToGoAlone();

// Part 11
var gollum = null;
var theRing = null;

function weWantsIt() {
  gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  mordor.appendChild(gollum);
  theRing = frodo.querySelector('#the-ring');
  gollum.appendChild(theRing);
  var mountDoom = mordor.querySelector('#mount-doom');
  mountDoom.appendChild(gollum);
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  gollum.parentNode.removeChild(gollum);
  var hobbs = document.createElement('ul');
  var hobbits = body.querySelectorAll('.hobbit');
  for(var i = 0, len = hobbits.length; i < len; i++){
    hobbs.appendChild(hobbits[i]);
  }
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  theShire.appendChild(hobbs);
}

thereAndBackAgain();
