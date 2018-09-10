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
var ringClicked = 0;


// Part 1

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement('section');
  middleEarth.id = 'middle-earth';

  lands.forEach(function (land) {
    var article = document.createElement('article');
    var heading = document.createElement('h1');
    heading.innerHTML = land;
    article.appendChild(heading);
    middleEarth.appendChild(article);
  });

  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var list = document.createElement('ul');
  var shire = document.querySelector('article');

  hobbits.forEach(function (hobbit) {
    var listItem = document.createElement('li');
    listItem.innerHTML = hobbit;
    listItem.classList.add('hobbit');
    list.appendChild(listItem);
  });

  shire.appendChild(list);
}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var ring = document.createElement('div');
  var frodo = document.querySelector('li');
  var span = document.createElement('span');
  var text = frodo.firstChild;

  frodo.insertBefore(span, text);
  span.appendChild(text);

  var fade = function () {
    var end = document.createElement('p');
    var html = document.querySelector('html');
    var body = document.querySelector('body');

    ringClicked++;
    if (ringClicked === 3) {
      html.removeChild(body);
      end.innerHTML = 'The Ring has been returned to Sauron and the world is over.';
      html.appendChild(end);
    }

    span.className = '';
    span.classList.add('hide');

    setTimeout(function () {
      span.classList.add('fade-in');
    }, 2000);
  };

  ring.id = 'the-ring';
  ring.classList.add('magic-imbued-jewelry');
  ring.addEventListener('click', nazgulScreech);
  ring.addEventListener('click', fade);

  frodo.appendChild(ring);
}

keepItSecretKeepItSafe();


// Part 4

function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside');
  var list = document.createElement('ul');
  var rivendell = document.querySelectorAll('article')[1];

  buddies.forEach(function (buddy) {
    var listItem = document.createElement('li');
    listItem.innerHTML = buddy;
    listItem.classList.add('buddy');
    list.appendChild(listItem);
  });

  aside.appendChild(list);
  rivendell.appendChild(aside);
}

makeBuddies();

// Part 5

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var rivendell = document.querySelectorAll('article')[1];
  var strider = rivendell.querySelectorAll('li')[3];
  strider.innerHTML = 'Aragorn';
}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var shire = document.querySelector('article');
  var rivendell = document.querySelectorAll('article')[1];
  var hobbits = shire.querySelector('ul');
  rivendell.appendChild(hobbits);
}

leaveTheShire();


// Part 7

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var theFellowship = document.createElement('div');
  var rivendell = document.querySelectorAll('article')[1];
  var members = rivendell.querySelectorAll('li');
  var list = document.createElement('ul');

  theFellowship.id = 'the-fellowship';

  members.forEach(function (member) {
    list.appendChild(member);
    alert(member.textContent + ' has joined your party');
  });

  theFellowship.appendChild(list);
  rivendell.appendChild(theFellowship);
}

forgeTheFellowShip();


// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalf = document.querySelector('li');
  gandalf.innerHTML = 'Gandalf the White';
  gandalf.style.background = 'white';
  gandalf.style.border = '2px solid grey';
}

theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert('The horn of gondor has been blown');
  var theFellowship = document.getElementById('the-fellowship');
  var boromir = theFellowship.querySelectorAll('li')[4];
  boromir.style.textDecoration = 'line-through';
  boromir.parentElement.removeChild(boromir);
}

hornOfGondor();

// Part 10

function itsDangerousToGoAlone() {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var mordor = document.querySelectorAll('article')[2];
  var theFellowship = document.getElementById('the-fellowship');
  var list = document.createElement('ul');
  var frodo = theFellowship.querySelectorAll('li')[4];
  var sam = theFellowship.querySelectorAll('li')[5];
  var mountDoom = document.createElement('div');

  list.appendChild(frodo);
  list.appendChild(sam);
  mordor.appendChild(list);

  mountDoom.id = 'mount-doom';
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.createElement('div');
  var mordor = document.querySelectorAll('article')[2];
  var theRing = document.getElementById('the-ring');
  var mountDoom = document.getElementById('mount-doom');

  gollum.id = 'gollum';
  mordor.appendChild(gollum);

  gollum.appendChild(theRing);
  mountDoom.appendChild(gollum);
}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the buddies from the document
  // Move all the hobbits back to the shire
  var gollum = document.getElementById('gollum');
  var buddies = document.querySelectorAll('.buddy');
  var hobbits = document.querySelectorAll('.hobbit');
  var shire = document.querySelector('article');

  buddies.forEach(function (buddy) {
    buddy.parentElement.removeChild(buddy);
  });

  hobbits.forEach(function (hobbit) {
    shire.appendChild(hobbit);
  });

  gollum.parentElement.removeChild(gollum);
}

thereAndBackAgain();
