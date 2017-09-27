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
//var body = document.querySelector('body');
var $body = $('body')



// Part 1


function makeMiddleEarth() {
  var $middleEarth = $('<section id="middle-earth">')
  var landArr = lands.map(function(land){
    var landArticle = $(`<article><h1>${land}</h1></article>`)
    return landArticle

  })
  //console.log(landArr)
  $middleEarth.append(landArr)
  $body.append($middleEarth)
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}


makeMiddleEarth();

// Part 2

function makeHobbits() {
  var theShire = $('article').first()
  var $hobbitList = $('<ul>',{id: 'the-Hobbits'})



  var hobbitsArr = hobbits.map(function(hobbit) {
    var $hobbitLi = $('<li>').text(hobbit)
    return $hobbitLi
  })
  $hobbitList.append(hobbitsArr)
  theShire.append($hobbitList)
  // console.log(theShire)
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
}

makeHobbits()
var $rivendell = $('section').find('article:nth-child(2)')

// Part 3

function keepItSecretKeepItSafe() {
  var $ring = $("<div/>", {id: "the-ring", class: "magic-imbued-jewelry"})

  $ring.on('click', nazgulScreech)

  var $frodo = $('li').first()
  console.log($frodo)

  // var frodo = $('ul').first()
  // console.log(frodo)
  $frodo.append($ring)


  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}

keepItSecretKeepItSafe()

// Part 4


function makeBuddies() {

  var aside = $('<aside>')
  // create an aside tag
  var $buddiesList = $('<ul>')

  var buddiesArr = buddies.map(function(buddy) {
    var $buddiesLi = $('<li>').text(buddy)
    return $buddiesLi
  })
  $buddiesList.append(buddiesArr)
  aside.append($buddiesList)

  $rivendell.append(aside)
  //rivendell.append(aside)

  }

  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell


makeBuddies()


// Part 5


function beautifulStranger() {
  var $strider = $('section').find('article:nth-child(2) aside ul li:nth-child(4)')
  $strider.text("Aragorn")
  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger()


// Part 6

function leaveTheShire() {
  // var assHobbits = $('section').find('article:nth-child(1) ul')

  $rivendell.append($('#the-Hobbits'))


  // assemble the hobbits and move them to Rivendell
}

leaveTheShire()

// Part 7


function forgeTheFellowShip() {
  // var rivendell = $('section').find('article:nth-child(2)')
  var $theFellowship = $('<div>',{id: "the-fellowship"})
  $( "li" ).each(function( index ) {
  $theFellowship.append($('li').text());
//Where do we append the-fellowship
  //alert(`New member joined the Fellowship!`)
  //alert(`New member:${('li').text()}to the Fellowship!`)
});
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip()

// Part 8


function theBalrog() {
var $gandalf = $('section').find('article:nth-child(2) aside ul li:nth-child(1)')
$gandalf.text("Gandalf the White")
$gandalf.css({'background':'white', 'border': '3px solid grey'} )
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}

theBalrog()
// Part 9

function hornOfGondor() {
  //alert("The horn of Gondro has been blown!")
   var $boromir = $('section').find('article:nth-child(2) aside ul li:nth-child(5)')
   $boromir.css({ 'text-decoration': 'line-through'})
   $boromir.remove()
//   // pop up an alert that the horn of gondor has been blown
//   // Boromir's been killed by the Uruk-hai!
//   // put a linethrough on boromir's name
//   // Remove Boromir from the Fellowship
}
//
hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){

   var $mountDoom = $('<div>', {id: "mount-doom"})
   var $Frodo = $('section').find('article:nth-child(2) #the-Hobbits li:nth-child(1)')
   var $Sam =$('section').find('article:nth-child(2) #the-Hobbits li:nth-child(2)')
//
// //  $mountDoom.append($('<ul>'))

  var mordor = $('section').find('article:nth-child(3)')
  $mountDoom.append($Frodo, $Sam)
  mordor.append($mountDoom)
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

itsDangerousToGoAlone ()

// Part 11

function weWantsIt() {
  $gollum = $('<div>', {'id':'gollum'})
  var mordor = $('section').find('article:nth-child(3)')
  mordor.append($gollum)

  $gollum.append($('#the-ring'))
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}

weWantsIt()

// Part 12

function thereAndBackAgain() {
  $('#gollum').remove()
  $('#the-ring').remove()


  $('#the-Hobbits').append($('#mount-doom li'))


var theShire = $('article').first()
theShire.append($('#the-Hobbits'))
//$('#the-Hobbits').

  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
thereAndBackAgain()
})
