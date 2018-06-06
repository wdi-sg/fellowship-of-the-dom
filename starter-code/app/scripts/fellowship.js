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


// function makeMiddleEarth() {

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var createSection = document.createElement('section');
  createSection.id= "middle-earth";
  for(var i = 0; i < lands.length; i++) {
    // add each land as an article tag
    var land = document.createElement('article');
    land.innerHTML = '<h1>' + lands[i] + '</h1>';
    // inside each article tag include an h1 with the name of the land
    createSection.appendChild(land);
  }
  body.appendChild(createSection);
}

makeMiddleEarth();


// Part 2

var shrine = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var ulHobbits = document.createElement('ul');
  for(var i = 0; i < hobbits.length; i++) {
    var liHobbits = document.createElement('li');
     // give each hobbit a class of hobbit
    liHobbits.className = 'hobbit';
    liHobbits.textContent = hobbits[i];
    ulHobbits.appendChild(liHobbits);
  }
  shrine.appendChild(ulHobbits);
}

makeHobbits();


// Part 3
var frodo = body.getElementsByTagName('li')[0];
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var makeDiv= document.createElement('div');
  makeDiv.id = 'the-ring';
  // give the div a class of 'magic-imbued-jewelry'
  makeDiv.className = 'magic-imbued-jewelry';
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  makeDiv.addEventListener('click', nazgulScreech);
  // add the ring as a child of Frodo
  frodo.appendChild(makeDiv);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  var budList = document.createElement('ul');

  for (var i = 0; i < buddies.length; i++) {
    var bud = document.createElement('li');
    bud.textContent = buddies[i];
    budList.appendChild(bud);
  }
  aside.appendChild(budList);
  // insert your aside as a child element of rivendell
  rivendell.appendChild(aside);
}
makeBuddies();


// Part 5
// change the 'Strider' textnode to 'Aragorn'

function beautifulStranger() {
  var lookup = document.getElementsByTagName('li');

  for (var i = 0; i < lookup.length; i++) {
    if (lookup[i].textContent == 'Strider') {
      (lookup[i].textContent = 'Aragon');
    }
  }
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var selectHobbits = document.getElementsByClassName('hobbit');
  var rivendell = body.querySelectorAll('article')[1];
  for (var i = selectHobbits.length-1; i >= 0; i--) {

    rivendell.appendChild(selectHobbits[i]);
  }
}

leaveTheShire();

// Part 7
var everyone = rivendell.querySelectorAll('li');

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement('div');
  fellowship.id = 'the-fellowship';
  // add each hobbit and buddy one at a time to 'the-fellowship'
  for (var i = 0; i < everyone.length; i++) {
    fellowship.appendChild(everyone[i]);
    alert(everyone[i].textContent + ' has joined the party.');
  }
  // after each character is added make an alert that they have joined your party
  rivendell.appendChild(fellowship);
}

forgeTheFellowShip();

// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var findGandalf = document.getElementsByTagName('li');
  for (var i = 0; i < findGandalf.length; i++) {
    if(findGandalf[i].textContent.includes('Gandalf')) {
      findGandalf[i].textContent = 'Gandalf the White';
  // apply style to the element
      findGandalf[i].style.border = '5px solid grey';
  // make the background 'white', add a grey border
      findGandalf[i].style.backgroundColor = '#ffffff';
    }
  }
}
theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('The horn of Gondor has been blown!');
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var byeBoromir = document.getElementsByTagName('li');
  for (var i = 0; i < byeBoromir.length; i++) {
    if(byeBoromir[i].textContent == 'Boromir') {
      byeBoromir[i].style.textDecoration = 'line-through';
  // Remove Boromir from the Fellowship
      byeBoromir[i].parentNode.removeChild(byeBoromir[i]);
    }
  }
}

hornOfGondor();

// Part 10

function itsDangerousToGoAlone() {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var moveMordor = document.getElementsByTagName('li');
    for (var i = 0; i < moveMordor.length; i++) {
       if( ( moveMordor[i].textContent.includes('Frodo') ) || ( moveMordor[i].textContent.includes('Sam') ) ) {
        mordor.appendChild(moveMordor[i]);
      }
    }
  // add a div with an id of 'mount-doom' to Mordor
  mountDoom = document.createElement('div');
  mountDoom.id = 'mount-doom';
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();


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
