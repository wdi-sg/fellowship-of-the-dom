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
//var body = document.querySelector('body');
var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag, include an h1 with the name of the land
  // append middle-earth to your document body

    var middleEarth = document.createElement("section"); //create a section tag
    middleEarth.id = "middle-earth";    //set id of middle earth

    for(var i = 0; i < lands.length;i++)
    {
        var land = document.createElement('article'); //  inside each article tag include an h1
        var landHeaderOne = document.createElement('h1');

        landHeaderOne.textContent = lands[i];  // add lands arrany strings into h1 element landHeaderOne
        land.appendChild(landHeaderOne);  //append Child h1 to article
        middleEarth.appendChild(land);   //append article to section
    }
    body.appendChild(middleEarth); //append article to body tag
}
//middle-earth.insertBefore(h1, article);
makeMiddleEarth();

var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit

  var hobbitsUL = document.createElement("ul");

  for(var i = 0; i < hobbits.length; i++)
  {
    var hobbitsLi = document.createElement('li');  // create <li> tags under the <ul>
    hobbitsLi.className = 'hobbit';
    hobbitsLi.textContent = hobbits[i];    // add every hobbit in array with text content into <li> element
    //hobbits[i] = hobbitsLi.setAttribute('class', 'hobbit');
    hobbitsUL.appendChild(hobbitsLi);

  }
  theShire.appendChild(hobbitsUL);
}
makeHobbits();


// Part 3
var getFrodo = body.querySelectorAll('li')[0];
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var theRing = document.createElement('div');
  theRing.classList.add('magic-imbued-jewelry');  // add div a class
  theRing.id = 'the-ring';
  getFrodo.appendChild(theRing);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
    var aside = document.createElement('aside');
    var buddyList = document.createElement('ul');
    for(var i = 0; i < buddies.length; i++)
    {
        var buddy = document.createElement('li');
        buddy.textContent = buddies[i];
        buddyList.appendChild(buddy);
    }

    aside.appendChild(buddyList);
    rivendell.appendChild(aside);
}
makeBuddies();

// Part 5

var findStrider = rivendell.querySelectorAll('li')[3];

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'

    findStrider.textContent = 'Aragorn';
}

beautifulStranger();

// Part 6
var hobbits = theShire.querySelector('ul');
//var hobbits = theShire.querySelector('ul');

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbits);

}

leaveTheShire();
// Part 7

var fellowshipMembers = rivendell.querySelectorAll('li');

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party

   var theFellowship = document.createElement('div');
   theFellowship.id = 'the-fellowship';

   for(var i = 0; i < fellowshipMembers.length; i++ )
   {
        theFellowship.append(fellowshipMembers[i]);
        alert(fellowshipMembers[i].textContent + " has joined!");
   }
   rivendell.appendChild(theFellowship);
}


//forgeTheFellowShip();
// Part 8

var gandalf = fellowshipMembers[0];

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.textContent = "Gandalf the White";
  gandalf.style.backgroundColor = 'white';
  gandalf.style.border = '5px solid gray';
}

theBalrog();

// Part 9
var boromir = fellowshipMembers[4];

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  //alert("The horn of Gondor has been blown");
  boromir.style.textDecoration = 'line-through';
  boromir.parentNode.removeChild(boromir);

}

hornOfGondor();

// Part 10
//var frodo = fellowshipMembers[4];
var sam = fellowshipMembers[6];

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  mordor.appendChild(getFrodo);
  mordor.appendChild(sam);

  var mtDoom = document.createElement('div');
  mtDoom.id = 'mount-doom';
  mordor.appendChild(mtDoom);


}
itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.createElement('div');
  gollum.id = 'gollum';

  theRing = getFrodo.querySelector('#the-ring');
  gollum.appendChild(theRing);
  var mountDoom = mordor.querySelector('#mount-doom');
  mountDoom.appendChild(gollum);
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire

  gollum.parentNode.removeChild(gollum);
  var hobbitslist = document.createElement('ul');
  var hobbits = body.querySelectorAll('.hobbit');
  for (var i = 0; i < hobbits.length; i++)
  {
    hobbitslist.appendChild(hobbits[i]);

  }
  theShire.appendChild(hobbitslist);
}

thereAndBackAgain();