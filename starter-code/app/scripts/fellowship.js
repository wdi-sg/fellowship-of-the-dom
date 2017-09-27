$(function () {
  console.log('Linked.')

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
  var $middleEarth = $('<section id ="middle-earth">')
// Part 1
  function makeMiddleEarth () {
    var landArr = lands.map(function (land) {
      console.log('land', land)
      var landArticle = $(`<article><h1>${land}</h1></article>`)
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
  var $hobbitList = $('<ul>') // creating new <ul>
  var $theShire = $('article').first()
  function makeHobbits () {
    // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    // give each hobbit a class of hobbit
     // Create list
    var hobbitsArr = hobbits.map(function (hobbit) { // Create list
      var $hobbitLi = $('<li>').text(hobbit)
      $hobbitLi.addClass('hobbit')
      return $hobbitLi
    })
    $hobbitList.append(hobbitsArr)
    $theShire.append($hobbitList)
  }
  makeHobbits()
// Part 3
  function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
    var $theRing = $('<div id="the-ring" class="magic-imbued-jewelry">')
    var $frodo = $theShire.find('.hobbit').first() // find .hobbit in the shire
    $frodo.append($theRing)
    $theRing.on('click', nazgulScreech)
  }
  keepItSecretKeepItSafe()
// Part 4
  var $rivendell = $('article:nth-child(2)')
  function makeBuddies () {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
    var $aside = $('<aside>')
    var $buddyList = $('<ul>')
    var buddyArr = buddies.map(function (buddy) {
      var $buddyLi = $('<li>').text(buddy)
      return $buddyLi
    })
    $buddyList.append(buddyArr)
    $aside.append($buddyList)
    $rivendell.append($aside)
  }
  makeBuddies()
// Part 5

  function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
    var $aragorn = $rivendell.find('li').eq(3)
    $aragorn.text('Aragorn')
  }
  beautifulStranger()
// Part 6

  function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
    $rivendell.append($hobbitList)
  }
  leaveTheShire()
// Part 7
  $totalMembers = $rivendell.find('li')
  function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
    var $fellowship = $('<div id="the-fellowship">')
    for (var i = 0; i < $totalMembers.length; i++) {
      $fellowship.append($totalMembers.eq(i))
    // alert($totalMembers[i].textContent + ' has joined the fellowship')
    }
    $rivendell.append($fellowship)
  }
  forgeTheFellowShip()
// Part 8

  function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
    var $gandalf = $totalMembers.eq(0)
    $gandalf.text('Gandalf the White')
    $gandalf.css('background', 'white')
  }
  theBalrog()
// Part 9

  function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  // alert("Boromir's been killed by the Uruk-hai!")
    var $boromir = $totalMembers.eq(4)
    $boromir.css('textDecoration', 'line-through')
    $boromir.remove()
  }
  hornOfGondor()
// Part 10
  var $mordor = $('article:nth-child(3)')
  var $mountDoom = $('<div id="mount-doom">')
  function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
    var $frodo = $totalMembers.eq(5)
    var $sam = $totalMembers.eq(6)
    $mordor.append($mountDoom)
    $mountDoom.append($frodo)
    $mountDoom.append($sam)
  }
  itsDangerousToGoAlone()
// Part 11

  function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
    var $gollum = $('<div id="gollum">')
    var $ring = $mordor.find('#the-ring')
    $mordor.append($gollum)
    $gollum.append($ring)
    $mountDoom.append($gollum)
  }
  weWantsIt()
// Part 12

  function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
    var $findRing = $mordor.find('#the-ring')
    $findRing.remove()
    var $findGollum = $mordor.find('#gollum')
    $findGollum.remove()
    var $hobbitsMove = $body.find('.hobbit')
  // console.log($hobbitsMove)
    $theShire.append($hobbitsMove)
  }
  thereAndBackAgain()
})
