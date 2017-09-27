$(function () {
  console.log('DOM is ready')

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
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    var $middleEarth = $('<section id="middle-earth">')

    //method 1
    var landArr = lands.map(function (land) { //from string create a new array
      console.log('land', land)
      var landArticle = $(`
        <article>
          <h1>${land}</h1>
        </article>
      `)

      return landArticle
    })
    // console.log(landArr)
    $middleEarth.append(landArr)
    $body.append($middleEarth) //body is what you want to target,
    //append, middleearth is what you you want to append to target
  }

//method 2: similar to above method
  // function changeStringToArticle(str) {
  //   var landArticle = $(`
  //     <article>
  //       <h1>${land}</h1>
  //     </article>
  //   `)
  //
  //   return landArticle
  // }
  makeMiddleEarth()

  // Part 2

  function makeHobbits () {
    // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    // give each hobbit a class of hobbit
    var theShire = $('article').first()
    var $hobbitList = $('<ul>')

    var hobbitsArr = hobbits.map(function(hobbit) {
      // console.log('hobbit', hobbit)
      var $hobbitLi = $('<li>').text(hobbit)
      $hobbitLi.addClass('hobbit')
      return $hobbitLi
    })
    $hobbitList.append(hobbitsArr)
    theShire.append($hobbitList)
  }
makeHobbits()

  // Part 3

  function keepItSecretKeepItSafe () {
    // create a div with an id of 'the-ring'
    // give the div a class of 'magic-imbued-jewelry'
    // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    // add the ring as a child of Frodo
    var $frodo = $('.hobbit').first()
    var $ring = $('<div>')
    $ring.attr('id','the-ring')
    $ring.addClass('magic-imbued-jewelry')
    $ring.on('click', nazgulScreech)
    $frodo.append($ring)
  }

keepItSecretKeepItSafe()

  // Part 4

  function makeBuddies () {
    // create an aside tag
    // attach an unordered list of the 'buddies' in the aside
    // insert your aside as a child element of rivendell
    var $buddiesAside = $('<aside>')
    var $buddiesList = $('<ul>')
    var buddiesArr = buddies.map(function(buddies) {
      var $buddiesLi = $('<li>').text(buddies)
      return $buddiesLi
    })
    $buddiesAside.append($buddiesList)
    $buddiesList.append(buddiesArr)
    var $rivendell = $( "article:nth-child(2)" )
    // console.log($rivendell)
    $rivendell.append($buddiesAside)
  }

makeBuddies()
  // Part 5

  function beautifulStranger () {
    // change the 'Strider' textnode to 'Aragorn'
    var $striderNode = $('aside').find('li').eq(3)
    $striderNode.text("Aragorn");
  }
beautifulStranger ()

  // Part 6
  function leaveTheShire () {
    // assemble the hobbits and move them to Rivendell
    var $hobbit = $('.hobbit')
    var $rivendell = $('article:nth-child(2)').find('ul')
    $rivendell.append($hobbit)
  }
leaveTheShire()

  // Part 7
var $theFellowship = $('<div id="the-Fellowship">')
var $rivendellArticle = $( "article:nth-child(2)")
var $rivendell = $rivendellArticle.find('li')
  function forgeTheFellowShip () {
    // create a new div called 'the-fellowship' within rivendell



    // console.log($rivendell);=

    // add each hobbit and buddy one at a time to 'the-fellowship'
    for (i = 0; i <$rivendell.length; i++) {
      $theFellowship.append($rivendell.eq(i))
      // alert($rivendell.eq(i).text() + " has joined your party")
    }
    // after each character is added make an alert that they have joined your party
      $rivendellArticle.append($theFellowship)
  }
forgeTheFellowShip ()

  // Part 8

  function theBalrog () {
    // change the 'Gandalf' textNode to 'Gandalf the White'
    // apply style to the element
    // make the background 'white', add a grey border
    var $gandalfNode = $rivendell.eq(0)
    $gandalfNode.text("Gandalf the White");
    $gandalfNode.css('background-color', 'white');
    $gandalfNode.css('border', 'grey 2px solid');
  }
theBalrog ()
  // Part 9

  function hornOfGondor () {
    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
    // Remove Boromir from the Fellowship
    // alert("The horn of gondor has been blown")
    var $BoromirNode = $rivendell.eq(4)
    $BoromirNode.css('textDecoration','line-through');
    $BoromirNode.remove()
  }
hornOfGondor ()
  // Part 10
var $mordor = $( "article:nth-child(3)")
var $frodo = $rivendell.eq(5)
var $mordorDiv = $('<div id="mount-doom">')
  function itsDangerousToGoAlone () {
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor

    var $sam = $rivendell.eq(6)


    $mordorDiv.append($frodo)
    $mordorDiv.append($sam)
    $mordor.append($mordorDiv)
  }
itsDangerousToGoAlone ()
  // Part 11
var $gollumDiv = $('<div id="gollum">')
var $ringLocation = $mordor.find('#the-ring')
  function weWantsIt () {
    // Create a div with an id of 'gollum' and add it to Mordor
    // Remove the ring from Frodo and give it to Gollum
    // Move Gollum into Mount Doom

    $mordor.append($gollumDiv)

    $gollumDiv.append($ringLocation)
    $mordorDiv.append($gollumDiv)
  }
weWantsIt ()
  // Part 12

  function thereAndBackAgain () {
    // remove Gollum and the Ring from the document
    // remove all the baddies from the document
    // Move all the hobbits back to the shire
    $gollumDiv.remove()
    $ringLocation.remove()
    var $hobbit = $('.hobbit')
    var $shire = $( "article:nth-child(1)" )
    $shire.append($hobbit)
  }
  thereAndBackAgain ()
})
