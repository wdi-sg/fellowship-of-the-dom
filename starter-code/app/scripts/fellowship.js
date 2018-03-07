console.log("Linked.");

// Dramatis Personae
var hobbits = [
'Frodo Baggins',
'Samwise \'Sam\' Gamgee',
'Meriadoc \'Merry\' Brandybuck',
'Peregrin \'Pippin\' Took'
];

//hobbits objects
var hobbitsObjects =[];

var buddies = [
'Gandalf the Grey',
'Legolas',
'Gimli',
'Strider',
'Boromir'
];

// Part 1
function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var lands = ['The Shire', 'Rivendell', 'Mordor'];
  var body = document.querySelector('body');
  var section = document.createElement("section");
  section.setAttribute("id","middle-earth");
  // add each land as an article tag
  for (i=0; i< lands.length; i++)
  {
    var article = document.createElement("article");
  // inside each article tag include an h1 with the name of the land
  var header = document.createElement("h1")
  header.textContent = lands[i];
  article.appendChild(header);
  section.appendChild(article);
}
  // append middle-earth to your document body
  document.body.appendChild(section);
}


// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // The shire is the first article
  var hobbitsList = document.createElement("ul");
  hobbitsList.setAttribute("class","hobbitsList" );
  for(i=0; i< hobbits.length; i++){
    hobbitItem = document.createElement("li");
    hobbitItem.textContent = hobbits[i]; 
    hobbitItem.setAttribute("class",hobbits[i].replace(/[' ]/g,"-"));
    hobbitsList.appendChild(hobbitItem);
  }
  document.querySelector("#middle-earth").childNodes[0].appendChild(hobbitsList);
  // give each hobbit a class of hobbit
  function hobbit(name) {
    this.name = name;
  }
  for(i=0; i< hobbits.length; i++){
    hobbitsObjects.push(new hobbit(hobbits[i]));
  }
}


// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var div = document.createElement("div");
  div.setAttribute("id","the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  div.setAttribute("class","magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  div.addEventListener("click", nazgulScreech );
  // add the ring as a child of Frodo
  document.querySelector(".Frodo-Baggins").appendChild(div);
}


// Part 4
function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  buddiesList = document.createElement("ul");
  buddiesList.setAttribute("class","buddiesList")
  for(i=0; i< buddies.length; i++){
    buddyItem = document.createElement("li");
    buddyItem.textContent = buddies[i]; 
    buddyItem.setAttribute("class",buddies[i].replace(/[' ]/g,"-"));
    buddiesList.appendChild(buddyItem);
  }
  aside.appendChild(buddiesList);
  // insert your aside as a child element of rivendell
  document.querySelector("#middle-earth").childNodes[1].appendChild(aside);
}


// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.querySelector(".Strider").textContent = 'Aragorn';
  document.querySelector(".Strider").setAttribute("class","Aragon");
  buddies[buddies.indexOf("Strider")] = "Aragon";
}


// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var party = document.querySelector(".hobbitsList");
  document.querySelector("#middle-earth").childNodes[1].insertBefore(party,document.querySelector("aside"));
}


// Part 7
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var div = document.createElement("div");
  div.setAttribute("id","the-fellowship");
  var fellowship = document.createElement("ul");
  // add each hobbit and buddy one at a time to 'the-fellowship'
  for(i=0;i<hobbits.length;i++){
    var swop = document.querySelector("."+hobbits[i].replace(/[' ]/g,"-"));
    fellowship.appendChild(swop);
  // after each character is added make an alert that they have joined your party
  alert(hobbits[i] +" has joined the fellowship.");
}
for(i=0;i<buddies.length;i++){
  // add each hobbit and buddy one at a time to 'the-fellowship'
  var swop = document.querySelector("."+buddies[i].replace(/[' ]/g,"-"));
  fellowship.appendChild(swop);
  // after each character is added make an alert that they have joined your party
  alert(buddies[i] +" has joined the fellowship.");
}
div.appendChild(fellowship);
document.querySelector("#middle-earth").childNodes[1].insertBefore(div,document.querySelector("ul"));
}


// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  document.querySelector(".Gandalf-the-Grey").textContent = 'Gandalf the White';
  document.querySelector(".Gandalf-the-Grey").setAttribute("class","Gandalf-the-White");
  buddies[buddies.indexOf("Gandalf the Grey")] = "Gandalf the White";
  // apply style to the element
  document.querySelector(".Gandalf-the-White").setAttribute("style","");
  // make the background 'white', add a grey border
  document.querySelector(".Gandalf-the-White").style.backgroundColor = 'white';
  document.querySelector(".Gandalf-the-White").style.border = 'grey';
}


// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  alert("The horn of gondor has been blown. Boromir's been killed by the Uruk-hai!");
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  var boromir = document.querySelector(".Boromir")
  boromir.style.textDecoration = "line-through";
  document.querySelector(".buddiesList").appendChild(boromir);
}


// Part 10
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var party = document.createElement("ul");
  party.appendChild(document.querySelector(".Frodo-Baggins"));
  party.appendChild(document.querySelector(".Samwise--Sam--Gamgee"));
  document.querySelector("#middle-earth").childNodes[2].appendChild(party);
  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement("div");
  mountDoom.setAttribute("id","mount-doom");
  document.querySelector("#middle-earth").childNodes[2].appendChild(mountDoom);
}


// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement("div");
  gollum.setAttribute("id","gollum")
  // Remove the ring from Frodo and give it to Gollum
  gollum.appendChild(document.querySelector("#the-ring"));  
  // Move Gollum into Mount Doom
  document.querySelector("#mount-doom").appendChild(gollum); 
}


// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var mountDoom = document.getElementById("mount-doom");
  mountDoom.parentNode.removeChild(mountDoom);
  // remove all the buddies from the document
  for(i=0;i<buddies.length;i++){
    var buddy = document.querySelector("."+buddies[i].replace(/[' ]/g,"-"));
    buddy.parentNode.removeChild(buddy);
  }
  // Move all the hobbits back to the shire
  for(i=0;i<hobbits.length;i++){
    var hobbit = document.querySelector("."+hobbits[i].replace(/[' ]/g,"-"));
    document.querySelector(".hobbitsList").appendChild(hobbit);
  }
  document.querySelector("#middle-earth").childNodes[0].appendChild(document.querySelector(".hobbitsList"));
}

console.log("list:\n\
  makeMiddleEarth()\n\
  makeHobbits()\n\
  keepItSecretKeepItSafe()\n\
  makeBuddies()\n\
  beautifulStranger()\n\
  leaveTheShire()\n\
  forgeTheFellowShip()\n\
  theBalrog()\n\
  hornOfGondor()\n\
  itsDangerousToGoAlone()\n\
  weWantsIt()\n\
  thereAndBackAgain() ");
