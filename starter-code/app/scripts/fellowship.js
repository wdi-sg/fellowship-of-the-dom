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
  var tag = document.createElement("section");
  tag.id = "middle-earth";

  // add each land as an article tag
  lands.forEach(function(land) {
    var article = document.createElement("article");
    var h1 = document.createElement("h1");

    // inside each article tag include an h1 with the name of the land
    h1.innerText = land;
    article.appendChild(h1);
    tag.appendChild(article);
  });

  // append middle-earth to your document body
  body.appendChild(tag);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var unorderedList = document.createElement("ul");
  hobbits.forEach(function(hobbit) {
    var listItem = document.createElement("li");

    // give each hobbit a class of hobbit
    listItem.classList.add("hobbit");
    listItem.innerText = hobbit;
    unorderedList.appendChild(listItem);
  });

  document.querySelector("article").appendChild(unorderedList);
}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var newDiv = document.createElement("div");
  newDiv.id = "the-ring";

  // give the div a class of 'magic-imbued-jewelry'
  newDiv.classList.add("magic-imbued-jewelry");

  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  

  function test() {
    alert("test");
  }

  // add the ring as a child of Frodo
  document.querySelector("li").appendChild(newDiv);
  newDiv.addEventListener("click", nazgulScreech);
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  var newAside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var unorderedList = document.createElement("ul");
  buddies.forEach(function(buddy) {
    var listItem = document.createElement("li");
    listItem.innerText = buddy;
    listItem.classList.add("buddy");
    unorderedList.appendChild(listItem);
  });
  newAside.appendChild(unorderedList);

  // insert your aside as a child element of rivendell
  document.querySelector("article~article").appendChild(newAside);
}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var printedBuddies = document.querySelectorAll("aside li");
  printedBuddies.forEach(function(buddy) {
    // use lowercase as CSS has been applied to transform text to lowercase
    if (buddy.innerText === "strider") {
      buddy.innerText = "Aragorn";
    }
  })
}
beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbits = document.querySelectorAll("article:first-child ul li");
  var buddies = document.querySelector("article:nth-child(2) ul");
  hobbits.forEach(function(hobbit) {
    var temp = hobbit.parentNode.removeChild(hobbit);
    buddies.appendChild(temp);
  });
}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var rivendell = document.querySelector("article:nth-child(2)");
  var newDiv = document.createElement("div");
  newDiv.id = "the-fellowship";
  rivendell.appendChild(newDiv);

  var hobbits = document.querySelectorAll(".hobbit");
  var buddies = document.querySelectorAll(".buddy");

  // add each hobbit and buddy one at a time to 'the-fellowship'
  hobbits.forEach(function(hobbit) {
    var temp = hobbit.parentNode.removeChild(hobbit);  
    // after each character is added make an alert that they have joined your party
    // alert(temp.innerText+" has joined your party!");
    newDiv.appendChild(temp);
  });
  buddies.forEach(function(buddy) {
    var temp = buddy.parentNode.removeChild(buddy);
    // alert(temp.innerText+" has joined your party!");
    newDiv.appendChild(temp);
  });


}
forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var fellowship = document.querySelectorAll("#the-fellowship li");
  var gandalf;
  fellowship.forEach(function(fellow) {
    if (fellow.innerText === "gandalf the grey") {
      gandalf = fellow;
    }
  });
  gandalf.innerText = "Gandalf the White";
  // apply style to the element
  gandalf.style.fontSize = "3em";

  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = "white";
  gandalf.style.border = "5px solid grey";
}
theBalrog()

// Part 9

function hornOfGondor() {
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var fellowship = document.querySelectorAll("#the-fellowship li");
  fellowship.forEach(function(fellow) {
    if (fellow.innerText === "boromir") {
      fellow.style.textDecoration = "line-through";
      // pop up an alert that the horn of gondor has been blown
      alert("THE HORN OF GONDOR HAD BEEN BLOWN!");
      // Remove Boromir from the Fellowship
      fellow.parentNode.removeChild(fellow);
    }
  });
}
hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var fellowship = document.querySelectorAll("#the-fellowship li");
  var unordered = document.createElement("ul");
  fellowship.forEach(function(fellow) {
    if (fellow.innerText === "frodo baggins" || fellow.innerText === "samwise 'sam' gamgee") {
      var temp = fellow.parentNode.removeChild(fellow);
      unordered.appendChild(temp);
    }
  });

  document.querySelector("article:nth-child(3)").appendChild(unordered);
  // add a div with an id of 'mount-doom' to Mordor
  var newDiv = document.createElement("div");
  newDiv.id = 'mount-doom';
  document.querySelector("article:nth-child(3)").appendChild(newDiv);
}
itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var newDiv = document.createElement("div");
  newDiv.id = 'gollum';
  document.querySelector("article:nth-child(3)").appendChild(newDiv);
  var ring = document.querySelector("#the-ring");
  var temp1 = ring.parentNode.removeChild(ring);
  document.querySelector("#gollum").appendChild(temp1);
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.querySelector("#gollum");
  var temp2 = gollum.parentNode.removeChild(gollum);
  document.querySelector("#mount-doom").appendChild(temp2);
}
weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  document.querySelector("article:nth-child(3) > div").innerHTML = "";
  // Move all the hobbits back to the shire
  var frodosam = document.querySelector("article:nth-child(3) > ul");
  var temp = frodosam.parentNode.removeChild(frodosam);
  document.querySelector("article:nth-child(1)").appendChild(frodosam);
}
thereAndBackAgain();