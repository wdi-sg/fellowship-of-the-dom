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
  var middleEarth = document.createElement("section");
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
    lands.forEach(function (places) {
      var areas = document.createElement("article");
      var areaHeader = document.createElement("h1")
      areaHeader.textContent = places;

      areas.appendChild(areaHeader);
      middleEarth.appendChild(areas);
});

 body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2
 var theShire = document.getElementsByTagName("article")[0];
function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit

  hobbits.forEach(function(hobbits) {
      var list = document.createElement("ul");
      var listItems = document.createElement("li")
      listItems.className = "hobbits";
      listItems.textContent = hobbits;
      list.appendChild(listItems);
      theShire.appendChild(list);
  })
    };

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
var theRing = document.createElement("div")
theRing.id = "the-ring";
theRing.className = "magic-imbued-jewelry";

var frodo = document.getElementsByTagName("li")[0];
theRing.addEventListener("click", nazgulScreech)

frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();


// Part 4

 var rivendell = document.getElementsByTagName("article")[1];
function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
var aside = document.createElement("aside")
buddies.forEach(function(buddies) {
    var unordered = document.createElement("ul");
    var unorderedItems = document.createElement("li");
    unorderedItems.textContent = buddies;
    unordered.appendChild(unorderedItems);

    aside.appendChild(unordered);
    rivendell.appendChild(aside);

});
    }

makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = rivendell.querySelectorAll("li")[3];
  strider.textContent = "Aragorn";
}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

  var hobbits = theShire.querySelector("ul")
  rivendell.appendChild(hobbits);
}

leaveTheShire();

// Part 7

var fellowShip = document.createElement("div");

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party


fellowShip.id = "the-fellowship";

// var eachThings = rivendell.querySelectorAll("li")

// hobbits.forEach(function(hobbits) {
//     fellowShip.appendChild(eachThings);

    var character = document.querySelectorAll("li")
    for (var i=0; i<character.length; i++) {
        fellowShip.appendChild(character[i]);
        // alert(character[i].textContent + "has joined your party!")

    rivendell.appendChild(fellowShip);
    }

};


forgeTheFellowShip();


// Part 8

var fellowShip = document.getElementById("the-fellowship");

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

    // var gandalf = fellowShip.querySelector("li");

    // gandalf.textContent = 'Gandalf the White';
    // gandalf.style.border = "1px solid grey";
    // gandalf.style.background = " white";


}

theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

  //alert("The horn of Gondor has been blown.");
  // var boromir = fellowShip.querySelectorAll("li")[4];
  // boromir.style.textDecoration = "line-through";
  // fellowShip.removeChild(boromir);

}

hornOfGondor();


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
