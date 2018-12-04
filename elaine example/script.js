// Part 1
 function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
    var middleEarth = document.createElement("section");
    middleEarth.id = "middle-earth";
  // append middle-earth to your document body
    document.body.appendChild(middleEarth);
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  // document.landArticle.appendChild(landH1);
    lands.forEach(function(name) {
        var land = document.createElement("article");
        var landName = document.createElement("h1");
        landName.textContent = name;
        land.appendChild(landName);
        middleEarth.appendChild(land);
    });
}
setTimeout(makeMiddleEarth, 1000);
 makeMiddleEarth();
 // Part 2
 function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
    var theShire = document.getElementsByTagName("article")[0];
    var hobbitList = document.createElement("ul");
    theShire.appendChild(hobbitList);
        hobbits.forEach (function (name) {
        var hobbit = document.createElement("li");
        hobbit.textContent = name;
// give each hobbit a class of hobbit
        hobbit.setAttribute("class", "hobbit");
        hobbitList.appendChild(hobbit);
     });
}
 setTimeout(makeHobbits,3000);
 // Part 3
 function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
    var theRing = document.createElement("div");
    theRing.id = "the-ring";
    theRing.classList.add("magic-imbued-jewelry");
  // add the ring as a child of Frodo
    var frodo = document.getElementsByTagName("li")[0];
    frodo.appendChild(theRing);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    theRing.addEventListener("click",nazgulScreech)
}
 setTimeout(keepItSecretKeepItSafe,6000);
 // Part 4
 function makeBuddies() {
  // create an aside tag
    var asideTag = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
    var buddyList = document.createElement("ul");
    asideTag.appendChild(buddyList);
    buddies.forEach(function (name) {
        var buddy = document.createElement("li");
        buddy.textContent =  name;
        buddyList.appendChild(buddy);
  // insert your aside as a child element of rivendell
        var rivendell = document.getElementsByTagName("article")[1];
        rivendell.appendChild(asideTag);
    });
}
 setTimeout(makeBuddies,9000);
 // Part 5
 function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
    var Rivendell = document.getElementsByTagName("article")[1];
    var newName = Rivendell.getElementsByTagName("li")[3];
    newName.textContent ="Aragorn";
}
 setTimeout(beautifulStranger,12000);
 // Part 6
 function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
    var Rivendell = document.getElementsByTagName("article")[1];
    var theShire = document.getElementsByTagName("article")[0];
    var hobbitList = theShire.getElementsByTagName("ul")[0];
    Rivendell.appendChild(hobbitList);
}
setTimeout(leaveTheShire,15000);
 // Part 7
 function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
     var Rivendell = document.getElementsByTagName("article")[1];
    var theFellowship = document.createElement("div");
    theFellowship.classList.add("the-fellowship");
  // add each hobbit and buddy one at a time to 'the-fellowship'
    var hobbitAndBuddy = document.querySelectorAll("li");
    var unorderedList = document.createElement("ul");
    for (i = 0; i < hobbitAndBuddy.length; i++) {
        nameAdded = hobbitAndBuddy[i];
        unorderedList.appendChild(nameAdded);
  // after each character is added make an alert that they have joined your party
        alert(nameAdded.textContent + "has joined the fellowship");
    }
    theFellowship.appendChild(unorderedList);
    Rivendell.appendChild(theFellowship);
    document.querySelectorAll("article > aside")[0].remove();
    document.querySelectorAll("article > ul")[0].remove();
}
 setTimeout(forgeTheFellowShip,18000);
 // Part 8
 function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
    var gandalf = document.querySelectorAll("li")[0];
    gandalf.textContent = "Gandalf the White";
  // apply style to the element
    gandalf.style.backgroundColor ="white";
  // make the background 'white', add a grey border
    gandalf.style.border ="grey";
}
 setTimeout(theBalrog,21000);
 // Part 9
 function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
    alert("The horn of gondor has been blown! Boromir's been killed by the Uruk-hai!")
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
    var boromic = document.querySelectorAll("li")[4];
    boromic.innerHTML= "<strike>Boromir</strike>"
  // Remove Boromir from the Fellowship
    boromic.remove();
}
setTimeout(hornOfGondor,24000);
 // Part 10
// // Part 10
 function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
    frodo = document.querySelectorAll(".the-fellowship > ul > li")[4]
    sam = document.querySelectorAll(".the-fellowship > ul > li")[5]
    unorderedList = document.createElement("ul");
    morodor = document.getElementsByTagName("Article")[2]
    unorderedList.appendChild(frodo);
    unorderedList.appendChild(sam);
  // add a div with an id of 'mount-doom' to Mordor
    newDiv = document.createElement("div");
    newDiv.setAttribute("id", "mount-doom");
    morodor.appendChild(newDiv);
    newDiv.appendChild(unorderedList);
}
setTimeout(itsDangerousToGoAlone,27000);
 // Part 11
// // Part 11
 function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
    gollumDiv = document.createElement("div");
    gollumDiv.setAttribute("id", "gollum");
    morodor = document.getElementsByTagName("Article")[2]
    morodor.appendChild(gollumDiv);
  // Remove the ring from Frodo and give it to Gollum
    theRing = document.querySelector("#the-ring");
    gollumDiv.appendChild(theRing);
  // Move Gollum into Mount Doom
    mountDoom = document.querySelector("#mount-doom");
    mountDoom.appendChild(gollumDiv);
}
setTimeout(weWantsIt,30000);
 // Part 12
// // Part 12
 function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
    gollumDiv.setAttribute("id", "gollum");
    theRing = document.querySelector("#the-ring");
    gollumDiv.remove();
    theRing.remove();
  // remove all the baddies from the document
    buddies = document.querySelectorAll("ul > :not(.hobbit)");
    buddies.forEach(function(name){
        name.remove();
    });
  // Move all the hobbits back to the shire
    var theShire = document.getElementsByTagName("article")[0];
    unorderedList = document.createElement("ul");
    theShire.appendChild(unorderedList);
    hobbits = document.querySelectorAll(".hobbit");
    hobbits.forEach(function(name){
        unorderedList.appendChild(name);
    });
    document.querySelector(".the-fellowship").remove();
    document.querySelector("#mount-doom").remove();
}
setTimeout(thereAndBackAgain,33000);