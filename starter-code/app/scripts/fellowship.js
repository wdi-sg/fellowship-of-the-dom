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

setTimeout(function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");

  for (var i = 0; i < lands.length; i++) {

    var land = document.createElement("article");
    var landH1 = document.createElement("h1");
    landH1.textContent = lands[i];
    land.appendChild(landH1);
    middleEarth.appendChild(land);

  }

  body.appendChild(middleEarth);

},1000);


// Part 2

setTimeout(function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit

  var unorderedlist = document.createElement("ul");

  for (var i = 0; i < hobbits.length; i++) {

    var hobbitList = document.createElement("li");
    hobbitList.setAttribute("class", "hobbit");
    hobbitList.setAttribute("id", hobbits[i]);
    hobbitList.textContent = hobbits[i];
    unorderedlist.appendChild(hobbitList);

  }

  var theShire = document.getElementsByTagName("article")[0];
  theShire.appendChild(unorderedlist);

}, 3000);


// Part 3

setTimeout(function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked

  var theRing = document.createElement("div");
  theRing.setAttribute("id", "the-ring");
  theRing.setAttribute("class", "magic-imbued-jewelry");
  var frodo = document.querySelectorAll(".hobbit")[0];
  frodo.appendChild(theRing);

  theRing.addEventListener("click", nazgulScreech);
  // theRing.addEventListener("click", function(){

  //   frodo.style.opacity = 1;
  //   var fadeOut = setInterval( function() {

  //       if ( frodo.style.opacity < 0.1) {

  //           clearInterval(fadeOut);
  //       }

  //       frodo.style.opacity -= 0.1}, 100);

  //   var fadeIn = setInterval( function() {

  //       if (frodo.style.opacity > 0.9) {

  //           clearInterval(fadeIn);
  //       }

  //       frodo.style.opacity += 0.1}, 100);

  // });

  theRing.addEventListener("click", function() {

        if (event.detail === 3) {

            var body = document.getElementsByTagName("body")[0];
            body.parentNode.removeChild(body);
            var html = document.getElementsByTagName("html")[0];
            var text = document.createElement("h1");
            text.textContent = "The Ring has been returned to Sauron and the world is over."
            html.appendChild(text);

        }
    })

}, 5000);

// Part 4


setTimeout(function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var side = document.createElement("aside");
  var buddiesList = document.createElement("ul");

  for (var i = 0; i < buddies.length; i++) {

    var list = document.createElement("li");
    list.setAttribute("id", buddies[i]);
    list.setAttribute("class", "buddies");
    list.textContent = buddies[i];
    buddiesList.appendChild(list);
  }

  side.appendChild(buddiesList);

  var rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(side);

}, 7000);

// Part 5


setTimeout(function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'

  var strider = document.querySelectorAll("aside ul li")[3];
  strider.textContent = "Aragorn";

}, 9000);

// Part 6

setTimeout(function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var shireRemove = document.getElementsByTagName("article")[0];
  var hobbitsMove = document.getElementsByTagName("ul")[0];
  var rivendellAppend = document.getElementsByTagName("article")[1];
  rivendellAppend.appendChild(hobbitsMove);

}, 11000);


// Part 7


setTimeout(function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var rivendell = document.getElementsByTagName("article")[1];
  var party = document.createElement("div");
  party.setAttribute("id", "the-fellowship");
  var list = document.createElement("ul");
  party.appendChild(list);
  rivendell.appendChild(party);

  var allCharacters = document.getElementsByTagName("li");

  for (var i = 0; i < allCharacters.length; i++) {


    allCharacters[i].addEventListener("click", function(){

        list.appendChild(this);
        alert(this.textContent + " have joined the party");
    });

  }

}, 13000);

// Part 8


setTimeout(function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalf = document.getElementById("Gandalf the Grey");
  gandalf.setAttribute("id", "Gandalf the White");
  gandalf.textContent = "Gandalf the White";
  gandalf.style.backgroundColor = "white";
  gandalf.style.border = "2px solid grey";

}, 15000);

// Part 9

setTimeout(function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship

  alert("The Horn of Gondor has been blown. Boromir's been killed by the Uruk-hai!");
  var boromir = document.getElementById("Boromir");
  boromir.style.textDecoration = "line-through";
  var aside = document.querySelector("aside ul");
  aside.removeChild(boromir)


}, 17000);


// Part 10

setTimeout(function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var frodo = document.getElementById("Frodo Baggins");
  var sam = document.getElementById("Samwise 'Sam' Gamgee");
  var mountDoom = document.createElement("div");
  mountDoom.setAttribute("id", "mount-doom");
  var mordor = document.getElementsByTagName("article")[2];
  mordor.appendChild(mountDoom);
  mountDoom.appendChild(frodo);
  mountDoom.appendChild(sam);

}, 19000);

// Part 11

setTimeout(function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom

  var mordor = document.getElementsByTagName("article")[2];
  var gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  mordor.appendChild(gollum);
  var ring = document.getElementById("the-ring");
  gollum.appendChild(ring);
  var mountDoom = document.getElementById("mount-doom");
  mountDoom.appendChild(gollum);

}, 21000);

// Part 12

setTimeout(function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire

  var gollum = document.getElementById("gollum");
  gollum.parentNode.removeChild(gollum);
  var buddies = document.getElementsByClassName("buddies")

  while (buddies.length !== 0) {

    buddies[0].parentNode.removeChild(buddies[0]);

  }

  var theShire = document.getElementsByTagName("article")[0];

  var hobbits = document.getElementsByClassName("hobbit");

  for (var i = 0; i < hobbits.length; i++) {

    theShire.appendChild(hobbits[i]);

  }

}, 23000);






