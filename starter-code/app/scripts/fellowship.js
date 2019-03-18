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
  // inside each article tag include an h1 with the name of the land
  for (var i = 0; i < lands.length; i++) {
      var newLand = document.createElement("article");
      var newLandName = document.createElement("h1");
      newLandName.textContent = lands[i];
      newLand.appendChild(newLandName);
      middleEarth.appendChild(newLand);
  };
  // append middle-earth to your document body
  document.body.appendChild(middleEarth);

  // var shire = document.querySelectorAll("article")[0];
  // var rivendell = document.querySelectorAll("article")[1];
  // var mordor = document.querySelectorAll("article")[2];
};

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
  var shire = document.querySelectorAll("article")[0];
  var hobbitList = document.createElement("ul");
  for (var i = 0; i < hobbits.length; i++) {
      var newHobbit = document.createElement("li");
      newHobbit.setAttribute("class", "hobbit")
      newHobbit.textContent = hobbits[i];
      hobbitList.appendChild(newHobbit);
  };
  shire.appendChild(hobbitList);

};

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  var oneRing = document.createElement("div");
  oneRing.setAttribute("id", "the-ring");
  oneRing.setAttribute("class", "magic-imbued-jewelry");
  var frodoWhere;
  var findFrodo = document.getElementsByTagName("li")
  for (var i = 0; i < findFrodo.length; i++) {
      if (findFrodo[i].innerText.includes("frodo")){
        frodoWhere = findFrodo[i];
      };
  };
  frodoWhere.appendChild(oneRing);
  oneRing.addEventListener('click', nazgulScreech);
};

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var rivendell = document.querySelectorAll("article")[1];
  var buddiesAside = document.createElement("aside");
  rivendell.appendChild(buddiesAside);
  var buddiesList = document.createElement("ul");
  buddiesAside.appendChild(buddiesList);
  for (var i = 0; i < buddies.length; i++) {
      var newBuddy = document.createElement("li");
      newBuddy.setAttribute("class", "buddy")
      newBuddy.textContent = buddies[i];
      buddiesList.appendChild(newBuddy);
  };
};

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var helloStranger;
  var getStranger = document.getElementsByTagName("li")
  for (var i = 0; i < getStranger.length; i++) {
      if (getStranger[i].innerText.includes("strider")){
        helloStranger = getStranger[i];
      };
  };
  helloStranger.innerHTML = "Aragorn";
};

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var shire = document.querySelectorAll("article")[0];
  var rivendell = document.querySelectorAll("article")[1];
  rivendell.appendChild(shire.querySelector("ul"))
};

// leaveTheShire()


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  theFellowship = document.createElement("div");
  theFellowship.id = "the-fellowship";
  var rivendell = document.querySelectorAll("article")[1];
  rivendell.appendChild(theFellowship);
  var fellows = document.querySelectorAll("li");
    for (var i = 0; i < fellows.length; i++){
        document.getElementById("the-fellowship").appendChild(fellows[i]);
        //alert(fellows[i].textContent + " has joined your party!")
    };
};

// forgeTheFellowShip();


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var helloGandalf;
  var getGandalf = document.querySelectorAll("li")
  for (var i = 0; i < getGandalf.length; i++) {
      if (getGandalf[i].innerText.includes("gandalf")){
        helloGandalf = getGandalf[i];
      };
  };
  helloGandalf.innerHTML = "Gandalf the White";
  helloGandalf.style.background = "white";
  helloGandalf.style.border = "2px solid gray";
  helloGandalf.style.color = "white";
};

theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  // alert("The horn of Gondor has been blown!");
  // alert("Boromir has been killed by the Uruk-hai!");
  var byeBoromir;
  var getBoromir = document.querySelectorAll("li")
  for (var i = 0; i < getBoromir.length; i++) {
      if (getBoromir[i].innerText.includes("boromir")){
        byeBoromir = getBoromir[i];
      };
  };
  byeBoromir.style.textDecoration = "line-through";
  setInterval(function(){byeBoromir.remove() }, 2000);
};

hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement("div");
  mountDoom.setAttribute("id", "mount-doom");
  var mordor = document.querySelectorAll("article")[2];
  mordor.appendChild(mountDoom);
};

itsDangerousToGoAlone();


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