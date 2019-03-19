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
    middleEarth.id = "middle-earth";
    // inside each article tag include an h1 with the name of the land
    var landArticle;
    var landH1;
    for(var i = 0; i < lands.length; i++) {
        landArticle = document.createElement("article");
        middleEarth.appendChild(landArticle);
        landH1 = document.createElement("h1");
        landH1.textContent = lands[i];
        landArticle.appendChild(landH1);
        body.appendChild(middleEarth)
    }




}



// Part 2

function makeHobbits() {

    var shireArticle = document.getElementById("middle-earth").getElementsByTagName("article")[0];
    var theHobbits  = document.createElement("ul");
    var hobbit;
    for (var i = 0; i < hobbits.length; i ++) {
    hobbit = document.createElement("li")
    hobbit.setAttribute("class", "hobbit");
    hobbit.textContent = hobbits[i];
    theHobbits.appendChild(hobbit);
    shireArticle.appendChild(theHobbits);
}
    var frodo = document.body.getElementsByTagName("ul")[0].childNodes[0];
    frodo.setAttribute("id", "hobbit-ringbearer");

  // display an unordered list of hobbits in the shire (the article tag)
  // give each hobbit a class of hobbit
}



// Part 3

function keepItSecretKeepItSafe() {

    var ringDiv = document.createElement("div");
    ringDiv.setAttribute("id",'the-ring');
    ringDiv.setAttribute("class", 'magic-imbued-jewelry');

    var hobbitFrodo = document.getElementsByClassName("hobbit")[0];

    hobbitFrodo.appendChild(ringDiv);

    document.getElementById("the-ring").addEventListener("click", nazgulScreech);
    document.getElementById("the-ring").addEventListener("click", frodoFade);

  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
}


// Part 4


function makeBuddies() {
  // create an aside tag
    var rivendellElement = document.getElementById("middle-earth").getElementsByTagName("article")[1];
    var budAside = document.createElement("aside");
    budAside.setAttribute("id","buddies");
    var budUl = document.createElement("ul");
    var budli;
    for (var i = 0; i < buddies.length; i++){
        budli = document.createElement("li");
        budli.textContent=buddies[i]
        budUl.appendChild(budli);
        budAside.appendChild(budUl);
    }

    rivendellElement.appendChild(budAside);

  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}

// Part 5


function beautifulStranger() {

    var budId = document.getElementById("buddies");
    budId.childNodes[0].childNodes[3].innerText = "Aragorn"; //childnodes down, childnodes down

  // change the 'Strider' textnode to 'Aragorn'
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
    var hobList = document.body.childNodes[8].childNodes[0].childNodes[1];
    var hobParent = document.body.childNodes[8].childNodes[0];
    var rivendellElement = document.getElementById("middle-earth").getElementsByTagName("article")[1];

    var oldChild = hobParent.removeChild(hobList);

    rivendellElement.appendChild(oldChild);

}

// Part 7


function forgeTheFellowShip() {
    //finding one parent up from hobby and buddy list
    var hobList = document.body.childNodes[8].childNodes[1].childNodes[2];//.childNodes[i]
    var buddyList = document.body.childNodes[8].childNodes[1].childNodes[1].childNodes[0];//.childNodes[i]
    var rivendellParent = document.body.childNodes[8].childNodes[1];

    var fellowshipDiv = document.createElement("div");
    var fellowshipUl = document.createElement("ul");
    fellowshipDiv.setAttribute("id","the-fellowship");
    fellowshipDiv.setAttribute("name","isildur's-bane");

    var transferChild;
    var i = 0;

    while(hobList.childNodes.length !==0 ) {
        transferChild = hobList.removeChild(hobList.childNodes[i]);
         fellowshipUl.appendChild(transferChild);
    }

    while(buddyList.childNodes.length !==0 ) {
        transferChild = buddyList.removeChild(buddyList.childNodes[i]);
         fellowshipUl.appendChild(transferChild);
    }

    fellowshipDiv.appendChild(fellowshipUl);
    rivendellParent.appendChild(fellowshipDiv);
    var unUsedUl = rivendellParent.removeChild(rivendellParent.childNodes[2]);
    var unUsedBud = rivendellParent.removeChild(rivendellParent.childNodes[1]);

    lazy();

  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

    var gandalf = document.body.childNodes[8].childNodes[1].childNodes[1].childNodes[0].childNodes[4]
    gandalf.innerText = "Gandalf the White";

    gandalf.setAttribute("style", "background-color: white;")
    gandalf.setAttribute("id","gandalf-white");

    gandalf.setAttribute("style", "border: grey;")
    document.getElementById("gandalf-white").style.border = "thick solid #5F5F5F";

}


// Part 9

function hornOfGondor() {

    alert("The Horn of Gondor has been blown!");
    alert("Boromir has been slain!");
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
    var fellowshipList = document.body.childNodes[8].childNodes[1].childNodes[1].childNodes[0]
    var boromir = document.body.childNodes[8].childNodes[1].childNodes[1].childNodes[0].childNodes[8];
    boromir.setAttribute("style", "text-decoration: line-through")

    var unUsed = fellowshipList.removeChild(boromir);
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
    var fellowshipList = document.body.childNodes[8].childNodes[1].childNodes[1].childNodes[0];
    var frodo =  document.body.childNodes[8].childNodes[1].childNodes[1].childNodes[0].childNodes[0];
    var frodoSolo = fellowshipList.removeChild(frodo);
    var sam = document.body.childNodes[8].childNodes[1].childNodes[1].childNodes[0].childNodes[0];
    var samSolo = fellowshipList.removeChild(sam);

    var mordor = document.body.childNodes[8].childNodes[2];

    var frodoAndSam = document.createElement("div");
    frodoAndSam.setAttribute("id", "mount-doom");

    frodoAndSam.appendChild(frodoSolo);
    frodoAndSam.appendChild(samSolo);

    mordor.appendChild(frodoAndSam);
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {

    var ring = document.body.childNodes[8].childNodes[2].childNodes[1].childNodes[0].childNodes[1];
    var frodo = document.body.childNodes[8].childNodes[2].childNodes[1].childNodes[0];
    var mordor = document.body.childNodes[8].childNodes[2];

    var gollum = document.createElement("div");
    gollum.setAttribute("id","gollum");

    // remove ring
    var unRinged = frodo.removeChild(ring);

    gollum.appendChild(unRinged);
    mordor.appendChild(gollum);




  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
    var mordor = document.body.childNodes[8].childNodes[2];
    var mountDoom = mordor.childNodes[1];
    var middleEarth = document.body.childNodes[8];
    var shire = document.body.childNodes[8].childNodes[0];
    var fellowship = document.body.childNodes[8].childNodes[1].childNodes[1];

  // remove Gollum and the Ring from the document
    var unUsedGollum = mordor.removeChild(gollum);

    var frodo = mordor.childNodes[1].childNodes[0];
        var frodoBacktoShire = mountDoom.removeChild(frodo);
        shire.appendChild(frodoBacktoShire);
    var sam = mordor.childNodes[1].childNodes[0];
        var samBacktoShire = mountDoom.removeChild(sam);
        shire.appendChild(samBacktoShire);

    var unUsedMordor = middleEarth.removeChild(mordor);
  // remove all the baddies from the document
  // Move all the hobbits back to the shire

  var otherHobbits = fellowship.childNodes[0];
    var hobbitMoving = otherHobbits.removeChild(otherHobbits.childNodes[0]);
        shire.appendChild(hobbitMoving);
    var hobbitMoving = otherHobbits.removeChild(otherHobbits.childNodes[0]);
        shire.appendChild(hobbitMoving);



}



makeMiddleEarth() //1
makeHobbits()//2
keepItSecretKeepItSafe()//3
makeBuddies()//4
beautifulStranger()//5
leaveTheShire()//6
forgeTheFellowShip()//7
theBalrog()//8
hornOfGondor()//9
// itsDangerousToGoAlone()//10
// weWantsIt()//11
// thereAndBackAgain()//12


function lazy() {
    var beingLazy = document.body.childNodes[8].childNodes[1].childNodes[1].childNodes[0]
    //.childNodes[0]
    for (var i = 0; i < beingLazy.childNodes.length ; i++)
    {
        alert(beingLazy.childNodes[i].textContent + " has joined the party!");
    }
}

// function

function frodoFade() {
    var frodo = document.getElementById("hobbit-ringbearer");
    frodo.setAttribute("style", "opacity: 0.3; transition: opacity 2s linear 1s;")
}


/*
sefunction frodoFade() {
      var frodo = getElementById("hobbit-ringbearer");
      frodo.setAttribute("style" , "color:red;");
  }
  */