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
  var middleEarth= document.createElement("section")
// add each land as an article tag
  for(i=0;i<lands.length;i++){
  var land =document.createElement("article");
  land.innerHTML="<h1>"+ lands[i]+"</h1>";
  middleEarth.appendChild(land);
  body.appendChild(middleEarth);
}
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}
makeMiddleEarth();

//  2
var theShire= body.querySelectorAll("article")[0];
var Rivendell= body.querySelectorAll("article")[1];
var Mordor=body.querySelectorAll("article")[2];
function makeHobbits() { 
  var hobbitList = document.createElement('ul')
  hobbitList.id = "hobbits";
  for(var i=0;i<hobbits.length;i++){
    var hobbit = document.createElement('li')
    hobbit.className='hobbit';
    hobbit.innerText=hobbits[i];
    hobbitList.appendChild(hobbit);
  theShire.appendChild(hobbitList);
  }
}
makeHobbits();
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit



// Part 3
var frodo= body.querySelectorAll("li")[0];
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing= document.createElement("div")
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute("id","the-ring")
  theRing.setAttribute("class", "magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener("click",nazgulScreech);
    // add the ring as a child of Frodo
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  var aside= document.createElement("aside")
  // attach an unordered list of the 'buddies' in the aside
  var buddiesList=document.createElement("ul")
  for(var i=0;i<buddies.length;i++)
  {
      var buddy=document.createElement("li")
      buddy.innerText= buddies[i];
      buddiesList.appendChild(buddy);
      console.log(buddies[i]);
  }
  aside.appendChild(buddiesList)
  // insert your aside as a child element of rivendell
  Rivendell.appendChild(aside);
}
makeBuddies();


// Part 5

var strider= Rivendell.querySelectorAll("li")[3]
function beautifulStranger() {
  strider.innerText="Aragorn";
  // change the 'Strider' textnode to 'Aragorn'
}
beautifulStranger();


// Part 6

function leaveTheShire() {
  var hobbitsAssemble = document.querySelector("#hobbits");
  rivendell = document.querySelectorAll("article")[1];
  theShire.removeChild(hobbitsAssemble);
  Rivendell.appendChild(hobbitsAssemble);
  // assemble the hobbits and move them to Rivendell
}

leaveTheShire();
// Part 7

var fellowship= Rivendell.querySelectorAll("li");
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var theFellowship=document.createElement("div");
  for(i=0;i<fellowship.length;i++)
  {  // add each hobbit and buddy one at a time to 'the-fellowship'
    theFellowship.appendChild(fellowship[i]);
      // after each character is added make an alert that they have joined your party
   // alert(fellowship[i].innerText+" have joined your party!")
  }
  Rivendell.appendChild(theFellowship);
}
forgeTheFellowShip();
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party


// Part 8

var Balrog= Rivendell.querySelectorAll("li")[0];
function theBalrog() {
    // change the 'Gandalf' textNode to 'Gandalf the White'
  Balrog.innerText="Gandal the White";
   // apply style to the element
  Balrog.style.backgroundColor= "white";
    // make the background 'white', add a grey border
  Balrog.style.border="solid 10px grey";
  
}
theBalrog();


// Part 9
var Gondor= Rivendell.querySelectorAll("li")[4]
function hornOfGondor() {

  // pop up an alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown!")
  Gondor.style.textDecoration='line-through';

  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  
  Gondor.parentNode.removeChild(Gondor);
}
hornOfGondor();


// Part 10
var bigMove1=document.querySelectorAll("li")[4]
var bigMove2=document.querySelectorAll("li")[5]
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
Mordor.appendChild(bigMove1);
Mordor.appendChild(bigMove2);
  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom=document.createElement('div')
  mountDoom.id="mount-doom";
Mordor.append(mountDoom);
}
itsDangerousToGoAlone();


// Part 11
var theRing= frodo.querySelector(".magic-imbued-jewelry")
function weWantsIt() {
  var gollum= document.createElement("div");
  gollum.id="gollum";
  Mordor.appendChild(gollum);
 gollum.appendChild(theRing);

  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
weWantsIt();
//querySelector vs querySelectorAll

// Part 12
var removeGollum= document.querySelector("#gollum");
var removeBaddie= document.querySelectorAll("article")[2];
var backShire=document.querySelectorAll(".hobbit");
//var removeGollum=document.querySelectorAll("div")[3];
//var removeRing= document.querySelectorAll("div")[4];
function thereAndBackAgain() {
  //removeRing.parentNode.removeChild(removeRing);
  // remove Gollum and the Ring from the document
  removeGollum.parentNode.removeChild(removeGollum);
  // remove all the baddies from the document
removeBaddie.style.background="none";
  // Move all the hobbits back to the shire
  for(i=0;i<backShire.length;i++)
  {
  theShire.appendChild(backShire[i]);
  }
}
thereAndBackAgain();
