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
  var sect = document.createElement("section");
  sect.id = "middle-earth";
  //console.log(sect);
  // add each land as an article tag
  for (var i = 0; i < lands.length; i++){
    var addLand = document.createElement("article");
  // inside each article tag include an h1 with the name of the land
    var header1 = document.createElement("h1");
    header1.textContent = lands[i];
    //console.log(header1);
    addLand.appendChild(header1);
    //console.log(addLand);
    sect.appendChild(addLand);
    //console.log(sect);
  }
  // append middle-earth to your document body
  document.body.appendChild(sect);
  //console.log(body);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  var unorderedList = document.createElement('ul');
  for(var i = 0; i < hobbits.length; i++){
    var lists = document.createElement('li');
    lists.textContent = hobbits[i];
    lists.className = "hobbit";
    //console.log(lists);
    unorderedList.appendChild(lists);
  }
  //console.log(unorderedList);
  //display the unordered list in the shrine(second article tag)
  var secondArticle = document.getElementsByTagName("article")[1];
  secondArticle.appendChild(unorderedList);
  //console.log(secondArticle);
}
makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var div1 = document.createElement('div');
  div1.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'
  div1.className = "magic-imbued-jewelry";
  //console.log(div1);
  // add the ring as a child of Frodo
  var frodo = document.getElementsByClassName("hobbit")[0];
  frodo.appendChild(div1);
  //console.log(frodo);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  div1.addEventListener("click",nazgulScreech);
}
keepItSecretKeepItSafe();



// Part 4
function makeBuddies() {
  // create an aside tag
  var asideElem = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  var unordList2 = document.createElement('ul');
  for (var i = 0; i < buddies.length; i++){
    var list2 = document.createElement('li');
    list2.textContent = buddies[i];
    unordList2.appendChild(list2);
  }
  //console.log(unordList2);
  asideElem.appendChild(unordList2);
  //console.log(asideElem);
  // insert your aside as a child element of rivendell
  var rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(asideElem);
  //console.log(rivendell);
}
makeBuddies();

// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var aragorn = document.getElementsByTagName("li")[7];//7 is strider in the list.
  aragorn.textContent = "Aragorn";
  //console.log(aragorn);
  // aragorn

}
beautifulStranger();

// Part 6
// assemble the hobbits and move them to Rivendell; Put as global variable for part 6 and 7
var assemble = document.querySelector(".hobbit");
function leaveTheShire() {
  //console.log(assemble);
  var rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(assemble);
  console.log(rivendell);
}
leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var div2 = document.createElement('div');
  div2.id = "the-fellowship";
  var rivendell = body.querySelectorAll('article')[1];
  rivendell.appendChild(div2);
  console.log(rivendell);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  var hobbitList = document.getElementsByTagName("ul")[1];
  var party = document.getElementsByTagName("div")[2];
  while (hobbitList.hasChildNodes()) {
    party.appendChild(hobbitList.firstChild);
  }

  // after each character is added make an alert that they have joined your party
  //alert(party.lastChild.textContent + " has joined the Fellowship!");
}

forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var theWhite = document.getElementsByTagName("li")[4];
  theWhite.textContent = "Gandalf the White";
  // apply style to the element
  theWhite.style.border = "10px solid grey";
  // make the background 'white', add a grey border
  theWhite.style.backgroundColor = "white";
}
theBalrog();


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
