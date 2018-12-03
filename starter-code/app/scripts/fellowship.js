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
  var createMiddleEarth = document.createElement('section');
  createMiddleEarth.setAttribute('id', 'middle-earth');
  // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
  for (var i=0; i<lands.length; i++) {
     var addLand = document.createElement('article');
     var newh1Tag = document.createElement('h1');
     newh1Tag.innerHTML = lands[i];
     addLand.appendChild(newh1Tag);
     createMiddleEarth.appendChild(addLand);
    };
  // // append middle-earth to your document body
  var addToBody = document.getElementsByTagName('body')[0];
  addToBody.appendChild(createMiddleEarth);
};

setTimeout(makeMiddleEarth, 1000);


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
  for (var i=0; i<hobbits.length; i++) {
    var puttingHobbitsHere = document.getElementsByTagName('article')[0]
    var newHobbit = document.createElement('ul');
    newHobbit.innerHTML = hobbits[i];
    newHobbit.setAttribute('class', 'hobbit');
    puttingHobbitsHere.appendChild(newHobbit);
  }
}

setTimeout(makeHobbits, 3000);

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var newRing = document.createElement('div');
  newRing.setAttribute('id', 'the-ring');
  newRing.setAttribute('class', 'magic-imbued-jewelry');
  var getFrodo = document.getElementsByTagName('ul')[0];
  getFrodo.appendChild(newRing);
  newRing.addEventListener('click', nazgulScreech);
};

setTimeout(keepItSecretKeepItSafe, 6000);


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var createAside = document.createElement('aside');
  for (var i=0; i<buddies.length; i++) {
    var newBuddies = document.createElement('ul');
    newBuddies.innerHTML = buddies[i];
    createAside.appendChild(newBuddies);
  };
  var getRivendell = document.getElementsByTagName('article')[1];
  getRivendell.appendChild(createAside);
};

setTimeout(makeBuddies, 9000);


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var changeStrider = document.querySelectorAll('aside > ul')[3];
  changeStrider.innerHTML = 'Aragorn';
};

setTimeout(beautifulStranger, 12000);

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
var newPlace = document.querySelectorAll('aside')[0];
var hobbits = document.querySelectorAll('article > ul');
for (var i=0; i<hobbits.length; i++) {
newPlace.appendChild(hobbits[i]);
};
};

setTimeout(leaveTheShire, 15000);
// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  var getRivendell = document.getElementsByTagName('article')[1];
  getRivendell.appendChild(theFellowship);
  var hobbitGroup = document.querySelectorAll('aside > .hobbit');
  var buddiesGroup = document.querySelectorAll('aside > :not(.hobbit)');
  // theFellowship.appendChild(buddiesGroup[0]);
  // oldGroup.parentNode.removeChild(oldGroup);
  // var totalGroup = hobbits.length + buddies.length;

  for (var i=0; i<4; i++) {
    theFellowship.appendChild(buddiesGroup[i]);
    alert(buddiesGroup[i].innerText + ' has joined the party!');
    theFellowship.appendChild(hobbitGroup[i]);
    alert(hobbitGroup[i].innerText + ' has joined the party!');
  };
  var sadBoy = document.querySelectorAll('aside > ul')[0]
  theFellowship.appendChild(sadBoy);
  alert(sadBoy.innerText + ' has joined the party!');
  // for (var i=0; i<1; i++) {
  //   theFellowship.appendChild(buddiesGroup[i]);
  //   alert(buddiesGroup[i].innerText + ' has joined the party!');
  // };
};

setTimeout(forgeTheFellowShip, 18000);
// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var changeGandalf = document.querySelectorAll('#the-fellowship > ul')[0];
  changeGandalf.innerText = 'Gandalf the White';
  changeGandalf.setAttribute('style', 'background-color: white; border: 1px solid grey;');


};

setTimeout(theBalrog, 25000);


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert('The horn of gondor has been blown!\nBoromir\'s been killed by the Uruk-hai!');
  var killedBoromir = document.querySelectorAll('#the-fellowship > ul')[8];
  killedBoromir.setAttribute('style', 'text-decoration: line-through;')
  killedBoromir.removeAttribute('id', '#the-fellowship');
};

setTimeout(hornOfGondor, 28000);
// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var getFrodo = document.querySelectorAll('#the-fellowship > ul')[1];
  var getSam = document.querySelectorAll('#the-fellowship > ul')[3];
  var getMordor = document.querySelectorAll('article')[2];
  var addMountDoom = document.createElement('div');
  addMountDoom.setAttribute('id', 'mount-doom');
  getMordor.appendChild(addMountDoom);
  addMountDoom.appendChild(getFrodo);
  addMountDoom.appendChild(getSam);
};

setTimeout(itsDangerousToGoAlone, 31000);

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var addGollum = document.createElement('div');
  var getMountDoom = document.querySelectorAll('#mount-doom')[0];
  var getRing = document.querySelectorAll('#the-ring')[0];
  addGollum.setAttribute('id', 'gollum');
  getMountDoom.appendChild(addGollum);
  addGollum.appendChild(getRing);
};

setTimeout(weWantsIt, 34000);

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var getGollum = document.querySelector('#gollum');
  var getHobbits = document.getElementsByClassName('hobbit');
  var getShire = document.querySelectorAll('article')[0];
  var getBuddies = document.querySelectorAll('#the-fellowship > :not(.hobbit)');
  getGollum.remove();
  for (var i=0; i<4; i++) {
  getShire.appendChild(getHobbits[i]);
    };
  for (var i=0; i<5; i++) {
  getBuddies[i].remove();
  };
};

setTimeout(thereAndBackAgain, 37000);

