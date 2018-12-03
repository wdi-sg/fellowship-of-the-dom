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
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement('section');

  middleEarth.id = "middle-earth";

  for (var i=0; i<lands.length; i++) {
    var land = document.createElement('article');
    landH1 = document.createElement('h1');
    landH1.textContent = lands[i];
    land.appendChild(landH1);
    middleEarth.appendChild(land);
  }

  body.appendChild(middleEarth);

}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
    var shire = document.querySelectorAll('article');

    var ul = document.createElement('ul');

    for (var i=0; i<hobbits.length; i++) {
        var li = document.createElement('li');
        li.textContent = hobbits[i];
        ul.appendChild(li);
    }

    shire[0].insertAdjacentElement('beforeend', ul);

}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

  var shire = document.querySelectorAll('article');

  var frodo = shire[0].childNodes[1].firstChild;

  theRing = document.createElement('div');
  theRing.id = 'the-ring';
  theRing.className = 'magic-imbued-jewelry';

  frodo.insertAdjacentElement('beforeend', theRing);

  document.getElementById('the-ring').addEventListener('click', nazgulScreech);

}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell

  var aside = document.createElement('aside');
  var ul = document.createElement('ul');

  for (var i = 0; i < buddies.length; i++) {
      var li = document.createElement('li');
      li.textContent = buddies[i];
      ul.insertAdjacentElement('beforeend', li);
  }

  aside.insertAdjacentElement('beforeend', ul);

  var rivendall = document.querySelectorAll('article');

  rivendall[1].insertAdjacentElement('beforeend', aside);
}

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'

  ulList = document.getElementsByTagName('aside')[0].children[0];

  ulList.childNodes[3].textContent = 'Aragorn';

}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var shire = document.querySelectorAll('article');
  shire[1].insertAdjacentElement('beforeend', shire[0].children[1]);

}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

  var rivendell = document.querySelectorAll('article')[1];

  div = document.createElement('div');

  div.id = 'the-fellowship';

  var ul = document.createElement('ul')

  var combined = hobbits.map(function(hobbit,i) { return [hobbit, buddies[i]]; }).reduce(function(hobbit,buddy) { return hobbit.concat(buddy); });

  for (var i = 0; i < combined.length; i++) {
    var li = document.createElement('li');
    li.textContent = combined[i];
    // alert(combined[i] + ' has joined Rivendell.')
    ul.appendChild(li);
  }

  div.appendChild(ul);

  rivendell.childNodes[2].remove();
  rivendell.childNodes[1].remove();
  rivendell.appendChild(div);

}

forgeTheFellowShip();

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
