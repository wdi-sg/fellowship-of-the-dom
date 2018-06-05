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
  var middleEarth = document.createElement('section')
  // middleEarth.setAttribute('id');
  middleEarth.id = "middle-earth";

  var land;
  var title;
  for (var i = 0; i < lands.length; i++) {
    land = document.createElement('article');
    title = document.createElement('h1');
    title.innerText = lands[i];
    land.appendChild(title);
    middleEarth.appendChild(land);
  }

  body.appendChild(middleEarth);  
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var list = document.createElement("ul");
  for (var i = 0; i < hobbits.length; i++) {
    var hobbit = document.createElement('li');
    hobbit.innerText = hobbits[i];
    hobbit.className = "hobbit";
    list.appendChild(hobbit);
  }

  var arr = document.getElementsByTagName('article');
  arr[0].appendChild(list);
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var horrorMovie = document.createElement('div');
  horrorMovie.id = 'the-ring';
  horrorMovie.className = 'magic-imbued-jewelry';

  // console.log(clickedRing);
  horrorMovie.addEventListener('click', nazgulScreech());

  var foo = document.getElementsByClassName('hobbit');
  // for (var i = 0; i < foo.length; i++) {
  //   if(foo[i].includes('Frodo')){
  //     foo[i].appendChild(horrorMovie);
  //   }
  // }

  foo[0].appendChild(horrorMovie);  
}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var side = document.createElement('aside');
  var list = document.createElement('ul');

  for (var i = 0; i < buddies.length; i++) {
    var forEach = document.createElement('li');
    forEach.innerText = buddies[i];
    list.appendChild(forEach);
  }

  side.appendChild(list);

  var finding = document.getElementsByTagName('article');
  // for (var i = 0; i < finding.length; i++) {
  //   if(finding[i].innerText=='Rivendell'){
  //     finding[i].appendChild(side);
  //   }
  // }

  finding[1].appendChild(side);
}

makeBuddies();



// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var finding = document.getElementsByTagName('li');
   for (var i = 0; i < finding.length; i++) {
    if(finding[i].innerText=='strider'){
      finding[i].innerText = 'Aragon';
    }
  }
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var finding = document.getElementsByTagName('article');

  for (var i = 0; i < finding.length; i++) {
    var heading = finding[i].getElementsByTagName('h1');
    console.log(heading);
    if(heading.innerText == 'the shire'){

    }
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
