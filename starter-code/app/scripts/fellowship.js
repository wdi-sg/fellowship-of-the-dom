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
  middleEarth.setAttribute("id", "middle-earth");

  // add each land as an article tag
  var section = document.querySelector('section');
  for (var i = 0; i < lands.length; i++) {
    var landsArticle = document.createElement("article");
    middleEarth.appendChild(landsArticle);

    // inside each article tag include an h1 with the name of the land
    var landsH1 = document.createElement("h1");
    landsArticle.appendChild(landsH1);
    landsH1.textContent = lands[i];
    //console.log(lands[i])
  }
  // append middle-earth to your document body
    document.body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // put ul in the shire tag
  var shireTag = document.querySelector("article");
  var hobbitUl = document.createElement("ul");
  shireTag.appendChild(hobbitUl);


  for (var i = 0; i < hobbits.length; i++) {
    // put li in ul
    var findHobbitUl = document.querySelector("ul");
    var hobbitList = document.createElement("li");
    findHobbitUl.appendChild(hobbitList);

    // give each hobbit a class of hobbit
    // put hobbits in li
    var hobbitName = hobbits[i];
    hobbitList.classList.add("hobbit");
    hobbitList.textContent = hobbitName;
  }
}

makeHobbits();



// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ring = document.createElement("div");
  ring.setAttribute("id", "ring");
  // give the div a class of 'magic-imbued-jewelry'
  ring.classList.add("magic-imbued-jewelry");
  // add the ring as a child of Frodo
  var frodo = document.querySelector("li");
  frodo.appendChild(ring);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  document.addEventListener("click", nazgulScreech);
}
keepItSecretKeepItSafe();



// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var buddiesUl = document.createElement("ul");
  aside.appendChild(buddiesUl);
  for (var i = 0; i < buddies.length; i++) {
    var buddiesList = document.createElement("li");
    buddiesUl.appendChild(buddiesList);

    var buddiesName = buddies[i];
    buddiesList.textContent = buddiesName;
  }
  // insert your aside as a child element of rivendell
  var rivendell = document.querySelectorAll("article")[1];
  rivendell.appendChild(aside);

}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var li = document.querySelectorAll("li");
  //var strider = li[7];
  for (var i = 0; i < li.length; i++) {
    if (li[i].textContent === "Strider") {
        li[i].textContent = "Aragorn";
    }
  }
}

beautifulStranger();


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

console.log(document.body);