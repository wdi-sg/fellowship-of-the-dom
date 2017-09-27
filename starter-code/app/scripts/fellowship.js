$(function(){
  console.log("Dom is ready.")

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
var $body = $('body');


// Part 1


function makeMiddleEarth() {

  var $middleEarth = $('<section id = "middle-earth">')
  var landsArr = lands.map(function(land){
    console.log("land",land)
  var landArticle = $(`<article><h1>${land}</h1></article>`)

    return landArticle
  })
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  $middleEarth.append(landsArr)
  $('body').append($middleEarth)
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  var theShire = $('article').first() //or use article: nth-child(index)
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var $hobbitList = $("<ul>")
    var hobbitArr = hobbits.map(function(hobbit){
    // console.log(hobbit,"hobbit")
    var $hobbitLi = $('<li class="hobbit">').text(hobbit)
    return $hobbitLi

  })
  $hobbitList.append(hobbitArr)
  theShire.append($hobbitList)
}
makeHobbits()


// Part 3

function keepItSecretKeepItSafe() {
  var $theRing = $('<div id="the-ring">')
  $theRing.addClass("magic-imbued-jewelry")
  $theRing.on("click", nazgulScreech)
  $('article ul li:nth-child(1)').append($theRing)
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

}
keepItSecretKeepItSafe()


// Part 4


function makeBuddies() {
  var $aside = $('<aside>')// create an aside tag
  var $buddyList = $("<ul>")// attach an unordered list of the 'buddies' in the aside
  var $buddyArr = buddies.map(function(buddies){
  var $buddyLi = $('<li>').text(buddies)
  return $buddyLi

})
$buddyList.append($buddyArr)
  $aside.append($buddyList)
  var rivendell = $('article:nth-child(2)')
  rivendell.append($aside)

    // insert your aside as a child element of rivendell
}
makeBuddies()

// Part 5


function beautifulStranger() {
  var rivendell = $('article:nth-child(2) aside ul li:nth-child(4)')
  rivendell.text('Aragorn')
   // change the 'Strider' textnode to 'Aragorn'
}
beautifulStranger()


// Part 6

function leaveTheShire() {
  var $theShireHobbits = $('article:nth-child(1) ul li')
  var $rivendellBuddies = $('article:nth-child(2) ul')
  $rivendellBuddies.append($theShireHobbits)
  // assemble the hobbits and move them to Rivendell
}
leaveTheShire()


// Part 7


function forgeTheFellowShip() {
  var $fellowShip = $('<div id="the-fellowship">')
  var $rivendell = $('article:nth-child(2)')
  var $rivendellDwellers = $('article:nth-child(2) ul li ')

    $fellowShip.append($rivendellDwellers)
    $rivendellDwellers.map(function(){
          alert($(this).text()+ "has joined your party!") 
    })


  $rivendell.append($fellowShip)


  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}
forgeTheFellowShip()


// Part 8


function theBalrog() {
    var $gandalf = $('article:nth-child(2) div li').first()
    $gandalf.text("Gandalf the White")
    $gandalf.css("backgroundColor","white")
    $gandalf.css("border","3px solid gray")
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}

theBalrog()


// Part 9

function hornOfGondor() {
  alert("Horn of gondor has been blown!")
  var $boromir = $('article:nth-child(2) div li:nth-child(5)')
  $boromir.css("text-decoration-line","line-through")
  $boromir.remove()
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}
hornOfGondor()

// Part 10
var $mordor = $('article:nth-child(3)')

function itsDangerousToGoAlone(){
  var $sam = $('article:nth-child(2) div li:nth-child(5)')
  var $frodo = $('article:nth-child(2) div li:nth-child(6)')


    $mordor.append($sam)
    $mordor.append($frodo)
    var mountDoom = $('<div id="mount-doom">')
    $mordor.append(mountDoom)
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}
itsDangerousToGoAlone()

// Part 11

function weWantsIt() {
  var $gollum = $('<div id = "gollum">')
  $mordor.append($gollum)
  var $sam = $('article:nth-child(3) li:nth-child(2)')
  $('.hobbit #the-ring').remove();

  var $theRing = $('<div id="the-ring">')
  $theRing.addClass("magic-imbued-jewelry")
  $theRing.on("click", nazgulScreech)
  $gollum.append($theRing)
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
weWantsIt()

// Part 12

function thereAndBackAgain() {
  var $gollum = $('#gollum')
  $gollum.remove()
  var $hobbit = $('.hobbit')
  var $theShire = $('article:nth-child(1)')

  $theShire.append($hobbit)
  $('article:nth-child(3)').css("background-image","none")
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
thereAndBackAgain()

})
