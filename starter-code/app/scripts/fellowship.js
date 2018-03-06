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
  let section = document.createElement('section');
  section.id = 'middle-earth';
  body.appendChild(section);
  // add each land as an article tag
  lands.forEach(land => {
    let landArticle = document.createElement('article');
    let section = document.getElementById('middle-earth');
    section.appendChild(landArticle);
    let h1 = document.createElement('h1');
    h1.innerText = land;
    landArticle.appendChild(h1);
  });
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  let shireArticle = document.getElementsByTagName('article')[0];
  let ul = document.createElement('ul');
  shireArticle.appendChild(ul);
  hobbits.forEach(hobbit => {
    let li = document.createElement('li');
    li.className = 'hobbit';
    li.innerText = hobbit;
    ul.appendChild(li);
  });
}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  let ringDiv = document.createElement('div');
  ringDiv.id = 'the-ring';

  // give the div a class of 'magic-imbued-jewelry'
  ringDiv.className = 'magic-imbued-jewelry';

  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ringDiv.addEventListener('click', nazgulScreech);

  // add the ring as a child of Frodo
  let hobbits = document.getElementsByClassName('hobbit');
  let frodo = Array.from(hobbits).filter(hobbit => {
    return hobbit.innerText.includes('frodo');
  });
  frodo[0].appendChild(ringDiv);
}

keepItSecretKeepItSafe();
// Part 4


function makeBuddies() {
  // create an aside tag
  let aside = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  let ul = document.createElement('ul');
  aside.appendChild(ul);
  buddies.forEach(buddy => {
    let li = document.createElement('li');
    li.innerText = buddy;
    ul.appendChild(li);
  })
  // insert your aside as a child element of rivendell
  let h1s = document.getElementsByTagName('h1');
  let h1WithRivendell = Array.from(h1s).filter(h1 => {
    return h1.innerText.includes('rivendell');
  });
  let rivendell = h1WithRivendell[0].parentNode;
  rivendell.appendChild(aside);
}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  let lis = document.getElementsByTagName('li');
  // returns an array containing strider
  let strider = Array.from(lis).filter(li => {
    return li.innerText === 'strider'
  });
  strider[0].innerText = 'Aragorn';
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

  // find hobbits
  let hobbits = document.getElementsByClassName('hobbit');

  // find rivendell
  let h1s = document.getElementsByTagName('h1');
  let h1WithRivendell = Array.from(h1s).filter(h1 => {
    return h1.innerText.includes('rivendell');
  });
  let rivendell = h1WithRivendell[0].parentNode;
  let ul = document.createElement('ul');
  rivendell.appendChild(ul);
  Array.from(hobbits).forEach(hobbit => {
    ul.appendChild(hobbit);
  });

}

leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  let div = document.createElement('div');
  div.id = 'the-fellowship';


  // find rivendell 
  let h1s = document.getElementsByTagName('h1');
  let h1WithRivendell = Array.from(h1s).filter(h1 => {
    return h1.innerText.includes('rivendell');
  });
  let rivendell = h1WithRivendell[0].parentNode;
  rivendell.appendChild(div);
  // console.log(rivendell);
  
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // find all hobbit;
  let fellowship = [];
  let chars = document.getElementsByTagName('li');
  // console.log(chars);

  Array.from(chars).forEach(char => {
    div.appendChild(char);
    alert(`new char ${char.innerText} added!`);
  });
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  let chars = document.getElementsByTagName('li');
  let gandalfArr = Array.from(chars).filter(char => {
    return char.innerText.includes('gandalf');
  });
  let gandalf = gandalfArr[0];
  gandalf.innerText = 'Gandalf the White';

  // apply style to the element
  gandalf.style.backgroundColor = 'white';
  gandalf.style.border = '1px solid grey';
  // make the background 'white', add a grey border
}

theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('Horn of gondor has been blown');
  // Boromir's been killed by the Uruk-hai!
  alert('Uruk-hai has been killed');

  // put a linethrough on boromir's name

  let chars = document.getElementsByTagName('li');
  let boromirArr = Array.from(chars).filter(char => {
    return char.innerText.includes('boromir');
  });
  let boromir = boromirArr[0];
  // console.log(boromir);
  boromir.style.textDecoration = 'line-through';
  // Remove Boromir from the Fellowship
}

hornOfGondor();


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  let chars = document.getElementsByTagName('li');
  let frodo = Array.from(chars).filter(char => {
    return char.innerText.includes('frodo');
  })[0];
  let sam = Array.from(chars).filter(char => {
    return char.innerText.includes('sam');
  })[0];

  let h1s = document.getElementsByTagName('h1');
  let mordor = Array.from(h1s).filter(h1 => {
    return h1.innerText.includes('mordor');
  })[0].parentNode;
  // console.log(mordor);
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  // add a div with an id of 'mount-doom' to Mordor
  let mountDoom = document.createElement('div');
  mountDoom.id = 'mount-doom';
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  let h1s = document.getElementsByTagName('h1');
  let mordor = Array.from(h1s).filter(h1 => {
    return h1.innerText.includes('mordor');
  })[0].parentNode;

  // Create a div with an id of 'gollum' and add it to Mordor
  let gollum = document.createElement('div');
  gollum.id = 'gollum';
  mordor.appendChild(gollum);

  // Remove the ring from Frodo and give it to Gollum
  let ring = document.getElementById('the-ring');
  gollum.appendChild(ring);
  // Move Gollum into Mount Doom
  let mountDoom = document.getElementById('mount-doom');
  mountDoom.appendChild(gollum);
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
