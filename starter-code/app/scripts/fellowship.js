
$(function() {
console.log("DOM is ready");

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
  var $middleEarth = $('<section id="middle-earth">')

  var landArr = lands.map(function(land) {
    console.log('land',land)
  var landArticle =$(`<article><h1>${land}</h1></article>`)

  return landArticle
  })

  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  $middleEarth.append(landArr)
  $body.append($middleEarth)
}

makeMiddleEarth();


// Part 2
var $hobbitList = $('<ul>')
var theShire = $('article').first()

function makeHobbits() {


  var hobbitsArr = hobbits.map(function(hobbits) {
  var $hobbitLi= $('<li>').text(hobbits)
    $hobbitLi.addClass('hobbit')
    return $hobbitLi
  })

  $hobbitList.append(hobbitsArr)
  theShire.append($hobbitList)

  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
}
makeHobbits();

// Part 3
var $theRing = $('<div id="the-ring">')

function keepItSecretKeepItSafe() {
  $theRing.addClass('magic-imbued-jewelry')
  $theRing.on('click', nazgulScreech)
  $('article ul :nth-child(1)').append($theRing)
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}
keepItSecretKeepItSafe();

// Part 4

var $rivendell = $('article:nth-child(2)')

function makeBuddies() {
  var $buddies = $('<aside>')// create an aside tag
  var $buddiesList = $('<ul>')// attach an unordered list of the 'buddies' in the aside
  var buddiesArr = buddies.map(function(buddy) {
  var $buddiesLi = $('<li>').text(buddy)
  return $buddiesLi
  })
  $buddiesList.append(buddiesArr)
  $buddies.append($buddiesList)
  $rivendell.append($buddies)
  // insert your aside as a child element of rivendell
}
makeBuddies();

// Part 5


function beautifulStranger() {
var $aragorn = $rivendell.find('li').eq(3)
  $aragorn.text('Aragorn')
  // change the 'Strider' textnode to 'Aragorn'
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  $rivendell.append($hobbitList)
  // assemble the hobbits and move them to Rivendell
}
leaveTheShire();

// Part 7

$totalMembers = $rivendell.find('li')
var $theFellowship = $('<div id="the-fellowship">')// create a new div called 'the-fellowship' within rivendell


function forgeTheFellowShip() {
  var $fellowshipArr = $totalMembers.map(function(member) {
  alert($totalMembers.eq(member).text() + ' has joined the fellowship!')
  }) // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  $theFellowship.appendChild($totalMembers.eq(member).text())
  $rivendell.appendChild($theFellowship)
}
forgeTheFellowShip();

// Part 8


function theBalrog() {
  var $gandalf = $rivendell.find('li').eq(0)
  $gandalf.text('Gandalf the White')// change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.style.backgroundColor = 'white';// apply style to the element
  gandalf.style.border = '3px solid grey';// make the background 'white', add a grey border
}
theBalrog();

// Part 9

function hornOfGondor() {
  var $boromir = $rivendell.find('li').eq(4)
  alert('Horn of Gondor has been blown!')// pop up an alert that the horn of gondor has been blown
  $boromir.style.textDecoration = "line-through"// Boromir's been killed by the Uruk-hai!
  $boromir.parentNode.removeChild(boromir)// put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}
hornOfGondor();


// Part 10
var mordor = $('article:nth-child(3)')
var $sam = $theFellowship.eq(6)

function itsDangerousToGoAlone(){
  var $frodo = $theFellowship.eq(5)
  mordor.append($frodo)// take Frodo and Sam out of the fellowship and move them to Mordor
  mordor.append($sam)
  var mountDoom = $('<div id="mount-doom">')
  mordor.appendChild(mountDoom)// add a div with an id of 'mount-doom' to Mordor
}
itsDangerousToGoAlone();

// Part 11
var $gollum = $('<div id="gollum">')// Create a div with an id of 'gollum' and add it to Mordor

function weWantsIt() {
  mordor.appendChild($gollum)
  $gollum.appendChild($theRing)// Remove the ring from Frodo and give it to Gollum
  mountDoom.appendChild($gollum)// Move Gollum into Mount Doom
}
weWantsIt();


// Part 12

function thereAndBackAgain() {
  $gollum.removeChild($gollum)// remove Gollum and the Ring from the document
  var buddyRem = $gollum.find('<Bu. li>')// remove all the baddies from the document
  $gollum.removeChild(buddyRem)
  // Move all the hobbits back to the shire
}

})
thereAndBackAgain();
