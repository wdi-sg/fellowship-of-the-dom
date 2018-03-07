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
  var middleEarth = document.createElement('section');
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  lands.forEach( function(item) {
    var land = document.createElement('article');
    var h1 = document.createElement('h1');
    h1.innerText = item;
    land.appendChild(h1);
    middleEarth.appendChild(land);
  });
  // append middle-earth to your document body
  document.body.appendChild(middleEarth);
}

makeMiddleEarth();

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page) - should be first
  var shire = document.querySelector('article');
  var ul = document.createElement('ul');
  hobbits.forEach( function(item) {
    var li = document.createElement('li');
    li.innerText = item;
    li.class = "hobbit"; // give each hobbit a class of hobbit
    ul.appendChild(li);
  });
  shire.appendChild(ul);
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  var div = document.createElement('div');
  div.id = 'the-ring';
  div.setAttribute('class', 'magic-imbued-jewelry');
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  div.addEventListener('click', nazgulScreech);
  // add the ring as a child of Frodo
  var frodo = document.querySelector('li'); // frodo is the first hobbit
  frodo.appendChild(div);
}

keepItSecretKeepItSafe();

// Part 4

function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  var ul = document.createElement('ul');
  buddies.forEach(function(item) {
    var li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
  });
  aside.appendChild(ul);
  // insert your aside as a child element of rivendell
  var rivendell = document.querySelectorAll('article')[1]; // second article
  rivendell.appendChild(aside);
}

makeBuddies();

// Part 5

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var rivendell = document.querySelectorAll('article')[1]; // second article

  rivendell.children[1].children[0].children[3].innerText = 'Aragorn';
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var shire = document.querySelectorAll('article')[0];
  var rivendell = document.querySelectorAll('article')[1];

  var hobbits = shire.children[1].children;

  while (true) {
    if (hobbits.length == 0) break;
    var node = hobbits[0];
    node.parentNode.removeChild(node);
    rivendell.children[1].children[0].appendChild(node);
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
