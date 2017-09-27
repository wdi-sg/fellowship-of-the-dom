$(function () {
  console.log('Dom is ready.')
// Dramatis Personae
  var hobbits = [
    'Frodo Baggins',
    'Samwise \'Sam\' Gamgee',
    'Meriadoc \'Merry\' Brandybuck',
    'Peregrin \'Pippin\' Took'
  ]

  var buddies = [
    'Gandalf the Grey',
    'Legolas',
    'Gimli',
    'Strider',
    'Boromir'
  ]

  var lands = ['The Shire', 'Rivendell', 'Mordor']
  var $body = $('body')

// Part 1

  function makeMiddleEarth () {
    var $middleEarth = $('<section id ="middle-earth">')  // jquery will create the closing brackets

    var landArr = lands.map(function (land) {
      console.log('land', land)
      var landArticle = $(`
<article>
<h1>${land}</h1>
</article>`)

      return landArticle
    })
    console.log(landArr)
// create a section tag with an id of middle-earth
// add each land as an article tag
// inside each article tag include an h1 with the name of the land
// append middle-earth to your document body
    $middleEarth.append(landArr)
    $body.append($middleEarth)
  }

  makeMiddleEarth()

// Part 2

  function makeHobbits () {
    var $hobbitList = $('<ul>')
    var theShire = $('article').first()
// display an unordered list of hobbits in the shire (which is the first article tag on the page)
// give each hobbit a class of hobbit

    var hobbitsArr = hobbits.map(function(a) {
      var $hobbitLi = $('<li>').text(a)
      $hobbitLi.addClass('hobbit')
      return $hobbitLi
    })

    $hobbitList.append(hobbitsArr)
    theShire.append($hobbitList)
  }
  makeHobbits()
// Part 3

var $ring = $('<div id="the-ring" class="magic-imbued-jewelry">')
  function keepItSecretKeepItSafe () {
    $ring.on('click',nazgulScreech)
    $('li').first().append($ring)
// create a div with an id of 'the-ring'
// give the div a class of 'magic-imbued-jewelry'
// add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
// add the ring as a child of Frodo
  }

  keepItSecretKeepItSafe()

// Part 4

  function makeBuddies () {
    var $aside = $('<aside>')
    var $budUList = $('<ul>')
    var $budArray = buddies.map(function(b) {
      var $budList = $('<li>').text(b)
      return $budList
    })
      $budUList.append($budArray)
      $aside.append($budUList)
      $('article').eq(1).append($aside)

// create an aside tag
// attach an unordered list of the 'buddies' in the aside
// insert your aside as a child element of rivendell
  }
  makeBuddies()

// Part 5

  function beautifulStranger () {
    $('aside').find('li').eq(3).text("Aragorn")

// change the 'Strider' textnode to 'Aragorn'
  }
  beautifulStranger()
// Part 6

  function leaveTheShire () {
    $('aside').find('ul').append($('.hobbit'))
// assemble the hobbits and move them to Rivendell
  }
  leaveTheShire ()

// Part 7

  function forgeTheFellowShip () {
    var Rivendell = $('aside').find('li')
    console.log(Rivendell[1])
    var div = $('<div id= "the-fellowship">')
    $('article').eq(1).append(div)
    for (i = 0; i < Rivendell.length; i ++) {
    div.append(Rivendell[i])
    // alert(Rivendell.eq(i).text() +"has joined my party")
    }

// create a new div called 'the-fellowship' within rivendell
// add each hobbit and buddy one at a time to 'the-fellowship'
// after each character is added make an alert that they have joined your party
  }
  forgeTheFellowShip ()
// Part 8

  function theBalrog () {
    var $gandalf = $('div').find('li').eq(0)
    $gandalf.text("Gandalf the White")
    $gandalf.css("background","white")
    $gandalf.css("border","3px solid grey")
// change the 'Gandalf' textNode to 'Gandalf the White'
// apply style to the element
// make the background 'white', add a grey border
  }
  theBalrog ()
// Part 9

  function hornOfGondor () {
    var boromir = $('div').find('li').eq(4)
    // alert("Horn of gondor has been blown")
    boromir.css("textDecoration","line-through")
    boromir.remove()
// pop up an alert that the horn of gondor has been blown
// Boromir's been killed by the Uruk-hai!
// put a linethrough on boromir's name
// Remove Boromir from the Fellowship
  }
  hornOfGondor ()
// Part 10

var $Modor = $('article').eq(2)
  function itsDangerousToGoAlone () {
    var Frodo = $('div').find('li').eq(4)
    var Sam = $('div').find('li').eq(5)
    $Modor.append(Frodo,Sam)
    var div = $('<div id="mount-doom">')
    $Modor.append(div)
// take Frodo and Sam out of the fellowship and move them to Mordor
// add a div with an id of 'mount-doom' to Mordor
  }
  itsDangerousToGoAlone ()
// Part 11

var gollum = $('<div id="gollum">')
  function weWantsIt () {
    $Modor.append(gollum)
    gollum.append($ring)
    $('#mount-doom').append(gollum)
// Create a div with an id of 'gollum' and add it to Mordor
// Remove the ring from Frodo and give it to Gollum
// Move Gollum into Mount Doom
  }
  weWantsIt ()
// Part 12

  function thereAndBackAgain () {
    gollum.remove()
    var $hobbros = $('.hobbit')
    var theShire = $('article').first()
    theShire.append($hobbros)
// remove Gollum and the Ring from the document
// remove all the baddies from the document
// Move all the hobbits back to the shire
  }
  thereAndBackAgain ()
})
