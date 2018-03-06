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
  for (var i=0; i<lands.length; i++){
    var land = document.createElement('article');

    // inside each article tag include an h1 with the name of the land
    land.innerHTML = '<h1>' + lands[i] + '</h1>';
    middleEarth.appendChild(land);
  }

  // append middle-earth to your document body
  body.appendChild(middleEarth);
}
makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var shire = document.querySelectorAll("article")[0];
  var hobbit_list = document.createElement("ul");
  for (var i = 0; i < hobbits.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = hobbits[i];
    li.className = "hobbit";
    hobbit_list.appendChild(li);
    shire.appendChild(hobbit_list);
  }
}
makeHobbits();


// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var div = document.createElement("div");
  div.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'
  div.className = "magic-imbued-jewelry";
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  div.addEventListener('click', nazgulScreech);
  // add the ring as a child of Frodo
  var frodo = body.querySelectorAll('li')[0];
  frodo.appendChild(div);
}
keepItSecretKeepItSafe();


// Part 4
function makeBuddies() {
  // create an aside tag
  var aside_tag = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var buddy_list = document.createElement("ul");
  for (var i = 0; i < buddies.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = buddies[i];
    buddy_list.appendChild(li);
  }
  aside_tag.appendChild(buddy_list);
  // insert your aside as a child element of rivendell
  var rivendell = document.querySelectorAll("article")[1];
  rivendell.appendChild(aside_tag);
}
makeBuddies();


// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var rivendell = document.querySelectorAll("li");
  for (var i = 0; i < rivendell.length; i++) {
    if (rivendell[i].innerText === "strider") {
      console.log("Match found");
      rivendell[i].innerText = "Aragorn";
    }
  }
}
beautifulStranger();


// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbits = document.querySelectorAll("ul")[0];
  var rivendell = document.querySelectorAll("ul")[1];
  rivendell.appendChild(hobbits);
}
leaveTheShire();


// Part 7
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var rivendell = document.querySelectorAll("article")[1];
  var members = document.querySelectorAll("li");
  var fellowship = document.createElement("div");
  fellowship.id = "the-fellowship";
  for (var i = 0; i < members.length; i++) {
    fellowship.appendChild(members[i]);
    alert(members[i].innerText + " has joined the party");
  }
  rivendell.appendChild(fellowship);
}
forgeTheFellowShip();


// Part 8
var gandalf = document.querySelectorAll("li")[0];
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.innerText = "Gandalf the White";
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = "white";
  gandalf.style.border = "3px solid grey";
}
theBalrog();


// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  var fellowship_members = document.querySelectorAll("li");
  for (var i = 0; i < fellowship_members.length; i++) {
    if ((fellowship_members[i].innerText === "boromir") || (fellowship_members[i].innerText === "Boromir")) {
      fellowship_members[i].style.textDecoration = "line-through";
      var fellowship = document.getElementById("the-fellowship");
      fellowship.removeChild(fellowship_members[i]);
    }
  }
}
hornOfGondor();


// Part 10
var mordor = document.querySelectorAll("article")[2];
function itsDangerousToGoAlone(){
  // add a div with an id of 'mount-doom' to Mordor
  var mount_doom = document.createElement("div");
  mount_doom.id = "mount-doom";
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var fellowship_members = document.querySelectorAll("li");
  for (var i = 0; i < fellowship_members.length; i++) {
    if (fellowship_members[i].innerText === "frodo baggins") {
      var fellowship = document.getElementById("the-fellowship");
      fellowship.removeChild(fellowship_members[i]);
      mount_doom.appendChild(fellowship_members[i]);
    }
    else if (fellowship_members[i].innerText === "samwise 'sam' gamgee") {
      var fellowship = document.getElementById("the-fellowship");
      fellowship.removeChild(fellowship_members[i]);
      mount_doom.appendChild(fellowship_members[i]);
    }
  }
  mordor.appendChild(mount_doom);
}
itsDangerousToGoAlone();


// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement("div");
  gollum.id = "gollum";
  mordor.appendChild(gollum);

  // Remove the ring from Frodo and give it to Gollum
  var fellowship_members = document.querySelectorAll("li");
  for (var i = 0; i < fellowship_members.length; i++) {
    if (fellowship_members[i].innerText === "frodo baggins") {
      var removed_child = fellowship_members[i].firstChild.nextSibling;
      fellowship_members[i].removeChild(removed_child);
      gollum.appendChild(removed_child);
    }
  }
  // Move Gollum into Mount Doom
  document.getElementById("mount-doom").appendChild(gollum);
}
weWantsIt();


// Part 12
var fellowship = document.getElementById("the-fellowship");
var shire = document.querySelectorAll("article")[0];
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var doom = document.getElementById("mount-doom");
  var remove_gollum_ring = doom.firstChild.nextSibling.nextSibling;
  doom.removeChild(remove_gollum_ring);

  // remove all the baddies from the document
  var fellowship_members = document.querySelectorAll("li");
  for (var i = 0; i < fellowship_members.length; i++) {
    if (fellowship_members[i].className != "hobbit") {
      fellowship.removeChild(fellowship_members[i]);
    }
  }

  // Move all the hobbits back to the shire
  var fellowship_members = document.querySelectorAll("li");
  for (var i = 0; i < fellowship_members.length; i++) {
    if (fellowship_members[i].className === "hobbit") {
      shire.appendChild(fellowship_members[i]);
    }
  }
}
thereAndBackAgain();
