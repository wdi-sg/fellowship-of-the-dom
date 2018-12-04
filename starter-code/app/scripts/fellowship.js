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


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var hobbitShire = document.querySelectorAll('article');
  var hobbitsUL = document.createElement("ul");

  for(var i = 0; i < hobbits.length; i++)
  {
    var hobbitsLi = document.createElement('li');  // create <li> tags under the <ul>
    hobbitsLi.textContent = hobbits[i];    // add every hobbit in array with text content into <li> element
    //hobbits[i] = hobbitsLi.setAttribute('class', 'hobbit');
    hobbitsUL.appendChild(hobbitsLi);

  }
  //hobbitShire.appendChild(hobbitsUL);
  hobbitShire[0].insertAdjacentElement('beforeend', hobbitsUL); //
  //hobbitShire[0].appendChild(hobbitsUL);
//body.appendChild(hobbitsUL);

}
makeHobbits();



// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var theRing = document.createElement('div');
  theRing.classList.add('magic-imbued-jewelry');  // add div a class

  var getFrodo = document.querySelector('li'); //ect Frodo from UL tag
//debugger;
  getFrodo.appendChild(theRing);
  //console.log(getFrodo);
  theRing.addEventListener("click", nazgulScreech);
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  //var findBuddies = document.querySelector('#middle-earth h1:nth-child(2)');
  //var findRivendell = document.querySelectorAll('h1');
  var aside = document.createElement('aside'); // create an aside tag
  var buddiesUL = document.createElement('ul');
var findRivendell = document.querySelectorAll('article');

for(var i = 0; i < buddies.length; i++)
  {
    var buddiesLi = document.createElement('li');  // create <li> tags under the <ul>
    buddiesLi.textContent = buddies[i];
    buddiesUL.appendChild(buddiesLi);



  }

    aside.insertAdjacentElement('beforeend', buddiesUL);
  //var findRivendell = docuement.querySelectorAll('h1');
  //console.log(findRivendell);
    findRivendell[1].insertAdjacentElement('beforeend',aside);

}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
    findStrider = document.getElementsByTagName('aside')[0].children[0];
    findStrider.childNodes[3].textContent = 'Aragorn';
}

beautifulStranger();
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}

leaveTheShire();
// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
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
