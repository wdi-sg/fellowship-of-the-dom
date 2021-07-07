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
//----------------------------------------------------------------------------------------------------------
// Part 1

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var sect = document.createElement("section");
  sect.setAttribute("id", "middle-earth");
  //console.log(sect);
  // add each land as an article tag
  for (var i = 0; i < lands.length; i++){
    var addLand = document.createElement("article");
  // inside each article tag include an h1 with the name of the land
    var header1 = document.createElement("h1");
    header1.textContent = lands[i]; //textContent came out as text only, unlike innerHTML -> which comes out as HTML elements, which can be styled
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

//----------------------------------------------------------------------------------------------------------
//Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
  var theShrine = document.getElementsByTagName('article')[0];
  var unorderedList = document.createElement('ul');
  for(var i = 0; i < hobbits.length; i++){
    var lists = document.createElement('li');
    lists.textContent = hobbits[i];
    lists.className = "hobbit";
    //console.log(lists);
    unorderedList.appendChild(lists);
  }
  //console.log(unorderedList);
  //display the unordered list in the shrine(first article tag)
  theShrine.appendChild(unorderedList);
  //console.log(theShrine);
}
//makeHobbits();
//----------------------------------------------------------------------------------------------------------
//Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var div1 = document.createElement('div');
  div1.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'
  div1.className = "magic-imbued-jewelry";
  //console.log(div1);
  // add the ring as a child of Frodo
  var frodo = document.getElementsByClassName("hobbit")[0];
  //console.log(frodo);
  frodo.appendChild(div1);
  //console.log(frodo);
//----------------------------------------------------------------------------------------------------------
//make frodo fade Out and then fade In:
  function fadeOut (){
    frodo.style = "opacity:0; transition:opacity .25s ease-in-out ";
  }
  function fadeIn (){
    frodo.style = "opacity:1; transition:opacity .25s ease-in-out ";
  }
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  div1.addEventListener("click",function(event){
    nazgulScreech();
    fadeOut();
    setTimeout(fadeIn, 3000);
    });
}
//keepItSecretKeepItSafe();
//----------------------------------------------------------------------------------------------------------
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
//makeBuddies();
//----------------------------------------------------------------------------------------------------------
// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var aragorn = document.getElementsByTagName("li")[7];//7 is strider in the list.
  aragorn.textContent = "Aragorn";
  //console.log(aragorn);
  // aragorn
}
//beautifulStranger();
//----------------------------------------------------------------------------------------------------------
// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell; Put as global variable for part 6 and 7
  var hobbits = document.querySelector("ul");
  //console.log(hobbits);
  var rivendell = document.getElementsByTagName("article")[1];
  rivendell.appendChild(hobbits);
  //onsole.log(rivendell);
}
//leaveTheShire();
//----------------------------------------------------------------------------------------------------------
// Part 7
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var theFellowship = document.createElement('div');
  theFellowship.setAttribute("id", "the-fellowship");
  // add each hobbit and buddy one at a time to 'the-fellowship'
  var hobbitAndBuddyList = document.querySelectorAll('li');
  var rivendell = document.getElementsByTagName('article')[1];
  rivendell.appendChild(theFellowship);
  //console.log(rivendell);
  for (var i = 0; i < hobbitAndBuddyList.length; i++){
     var eachHobbitAndBuddy = hobbitAndBuddyList[i].textContent;
     //console.log(eachHobbitAndBuddy);
     theFellowship.appendChild( hobbitAndBuddyList[i] );
     //console.log(theFellowship);
     //after each character is added make an alert that they have joined your party
     //var alertMessage = alert(eachHobbitAndBuddy + " just joined the party!");
     //setInterval(console.log(alertMess), 10000);
  }
}
//forgeTheFellowShip();
//----------------------------------------------------------------------------------------------------------
// Part 8
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var theWhite = document.getElementsByTagName("li")[0];
  theWhite.textContent = "Gandalf the White";
  // apply style to the element
  theWhite.style.border = "10px solid grey";
  // make the background 'white', add a grey border
  theWhite.style.backgroundColor = "white";
}
//theBalrog();
//----------------------------------------------------------------------------------------------------------
// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  //var blownHorn = alert("The horn of gondor has been blown!");
  // Boromir's been killed by the Uruk-hai!
  var boromir = document.getElementsByTagName('li')[4];
  // put a linethrough on boromir's name
  boromir.style.textDecoration = "line-through";
  // Remove Boromir from the Fellowship
  var removeBoromir = document.getElementById("the-fellowship");
  //console.log(removeBoromir.childNodes);
  removeBoromir.removeChild(removeBoromir.childNodes[4]);
  // console.log(removeBoromir);
}
//hornOfGondor();
//----------------------------------------------------------------------------------------------------------
// Part 10
function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var frodo = document.getElementsByClassName("hobbit")[0];
  var sam = document.getElementsByClassName("hobbit")[1];
  var mordor = document.getElementsByTagName('article')[2];
  mordor.appendChild(sam);
  mordor.appendChild(frodo);
  //console.log(mordor);
  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement("div");
  mountDoom.setAttribute("id", "mount-doom");
  mordor.appendChild(mountDoom);
  // console.log(mordor);
}
//itsDangerousToGoAlone();
//----------------------------------------------------------------------------------------------------------
// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  var mordor = document.getElementsByTagName('article')[2];
  mordor.appendChild(gollum);
  //console.log(mordor);
  var ringId = document.getElementById('the-ring');
  var ring = ringId.parentNode.removeChild(ringId);
  //console.log(ring);
  var mountdoom = document.getElementById('mount-doom');
  gollum.appendChild(ring);
  //console.log(gollum);
  mountdoom.appendChild(gollum);
  //console.log(mountdoom);
}
//weWantsIt();
//----------------------------------------------------------------------------------------------------------
// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var mountdoom = document.getElementById('mount-doom');
  var gollum = document.getElementById("gollum");
  var ringId = document.getElementById('the-ring');
  mountdoom.removeChild(gollum);
  //console.log(mountdoom);
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  var theShire = document.getElementsByTagName('article')[0];
  var hobbits = document.getElementsByClassName("hobbit");
  console.log(hobbits);
  for (var i = 0; i < hobbits.length; i++){
    theShire.appendChild(hobbits[i]);
  }
  console.log(theShire);
}
//thereAndBackAgain();
//----------------------------------------------------------------------------------------------------------
setTimeout(makeHobbits, 4000);
setTimeout(keepItSecretKeepItSafe, 7000);
setTimeout(makeBuddies, 8000);
setTimeout(beautifulStranger, 9000);
setTimeout(leaveTheShire, 12000);
setTimeout(forgeTheFellowShip, 15000);
setTimeout(theBalrog, 16000);
setTimeout(hornOfGondor, 20000);
setTimeout(itsDangerousToGoAlone, 24000);
setTimeout(weWantsIt, 26000);
setTimeout(thereAndBackAgain, 30000);



