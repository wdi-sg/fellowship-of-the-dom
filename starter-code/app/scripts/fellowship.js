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
    // append middle-earth to your document body
    var section = document.createElement("section");
    section.id = "middle-earth";
    document.body.appendChild(section);
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    for (i = 0; i < lands.length; i++) {
        var article = document.createElement("article");
        var h1 = document.createElement("h1");
        h1.innerText = lands[i];
        article.appendChild(h1);
        section.appendChild(article);
    }

}
makeMiddleEarth();


// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
  var unorderedList = document.createElement("ul");
  var landElements = document.getElementsByTagName("article");

  for (i = 0; i < hobbits.length; i++) {
    var list = document.createElement("li");
    list.className = "hobbit";
    list.innerText = hobbits[i];
    unorderedList.appendChild(list);
  }
  for (i = 0; i < landElements.length; i++) {
    var h1text = landElements[i].firstChild.innerText;
    if (h1text === "the shire") {
        landElements[i].appendChild(unorderedList);
    }
  }
 }
 makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
    var div = document.createElement("div");
    div.id = "the-ring";
    div.className = "magic-imbued-jewelry";

// add the ring as a child of Frodo
    /*var frodoElements = document.getElementsByTagName("li");
    frodoElements.appendChild(div);
*/


  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
    // create an aside tag
    var aside = document.createElement("aside");
    var unorderedList = document.createElement("ul");
  // attach an unordered list of the 'buddies' in the aside
  var rivendell = body.querySelectorAll("article")[1];
  for (i = 0; i < buddies.length; i++) {
    var list = document.createElement("li");
    list.innerText = buddies[i];
    unorderedList.appendChild(list);
    aside.appendChild(list);
  }
  // insert your aside as a child element of rivendell
  rivendell.appendChild(aside);
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


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