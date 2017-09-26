$(function() {
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
  var $body = $('body');


  function makeMiddleEarth() {
    // create a section tag with an id of middle-earth
    var $middleEarth = $('<section id="middle-earth">')

    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    var landArr = lands.map(function(land) {
      var landArticle = $(`
        <article>
          <h1>${land}</h1>
        </article>
      `)
      return landArticle
    })

      // append middle-earth to your document body
    $middleEarth.append(landArr)
    $body.append($middleEarth)
  }
    makeMiddleEarth();


    // Part 2

    function makeHobbits() {
      var theShire = $('article').first()
      var $hobbitList = $('<ul>')

      var hobbitsArr = hobbits.map(function(hobbit) {
        var $hobbitLi = $('<li>').text(hobbit)
        $hobbitLi.addClass('Hobbit')
      return $hobbitLi
      })
      // display an unordered list of hobbits in the shire (which is the second article tag on the page)
      // give each hobbit a class of hobbit
      $hobbitList.append(hobbitsArr)
      theShire.append($hobbitList)
    }
    makeHobbits()

    // Part 3

    function keepItSecretKeepItSafe() {
      var $theRing = $('<div id="the-ring" class="magic-imbued-jewelry">')
      $theRing.on('click', nazgulScreech)
      var $frodo = $('.Hobbit').first()
      $frodo.append($theRing)
      // create a div with an id of 'the-ring'
      // give the div a class of 'magic-imbued-jewelry'
      // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
      // add the ring as a child of Frodo
    }
    keepItSecretKeepItSafe()


    // Part 4

// targeting 'article ul li:nth-child(3)'
    function makeBuddies() {
      var $rivendell = $('article:nth-child(2)')
      // create an aside tag
      var $asideTag = $('<aside>')
      // attach an unordered list of the 'buddies' in the aside --
      var $buddyList = $('<ul>')
      var buddiesArr = buddies.map(function(buddy) {
        var $buddyLi = $('<li class="buddies">').text(buddy)
        return $buddyLi
      })
      // insert your aside as a child element of rivendell
      $buddyList.append(buddiesArr)
      $asideTag.append($buddyList)
      $rivendell.append($asideTag)
    }
    makeBuddies()

    // Part 5


    function beautifulStranger() {
      $('article:nth-child(2) aside ul li:nth-child(4)').text('Aragorn')
      // change the 'Strider' textnode to 'Aragorn'
    }
    beautifulStranger()


    // Part 6

    function leaveTheShire() {
      var $moveHobbits = $('article:nth-child(2) aside ul ')
    $('article:nth-child(1) ul li').detach().appendTo($moveHobbits)
      // assemble the hobbits and move them to Rivendell & combine them with the hobbits
    }
    leaveTheShire()


    // Part 7


    function forgeTheFellowShip() {
      var $rivendell = $('article:nth-child(2)') // append div into rivendell
      var $fellowship = $('<div id="the-fellowship">') // create div
      $rivendell.append($fellowship) // - div into article

      var $fellowshipLi =$('<ul>') // create Ul for div
      $fellowship.append($fellowshipLi) // - Ul into div

      var $moveHobbitsAndBuddies = $('article:nth-child(2) aside ul li') // where the hobbies & buddies are at

      $moveHobbitsAndBuddies.each(function() {
        $fellowshipLi.append($(this))
        // alert('Hobbits & Buddies coming through!')
    // after each character is added make an alert that they have joined your party
      })
    }
forgeTheFellowShip()

    // Part 8


    function theBalrog() {
      var $gandalf = $('article:nth-child(2)').find('li').eq(0).text('Gandalf the White')
      $gandalf.css({
        "background-color": `rgba(255,0,0,0.7)`,
        "border": "1px solid grey",
         "width": "80px"
      })
      // change the 'Gandalf' textNode to 'Gandalf the White'
      // apply style to the element
      // make the background 'white', add a grey border
    }
    theBalrog()

    // Part 9

    function hornOfGondor() {
      alert('The horn of gondor has been blown!')
      var $boromir =$('article:nth-child(2) div ul li:nth-child(5)')
      $boromir.css({
        "text-decoration" : "line-through"
      })
      $boromir.remove();
      // pop up an alert that the horn of gondor has been blown
      // Boromir's been killed by the Uruk-hai!
      // put a linethrough on boromir's name
      // Remove Boromir from the Fellowship
    }
    hornOfGondor()


    // Part 10

    function itsDangerousToGoAlone(){
      var $mordor = $('article:nth-child(3)') // define mordor
      var $mordorDiv = $('<div id="mount-doom">')
      $mordor.append($mordorDiv)
      var $mordorList = $('<ul>') // create Ul
      $mordor.append($mordorList)
      $('article:nth-child(2) div ul li').eq(4).detach().appendTo($mordor.find('ul')) // frodo
      $('article:nth-child(2) div ul li').eq(4).detach().appendTo($mordor.find('ul'))
      // take Frodo and Sam out of the fellowship and move them to Mordor
      // add a div with an id of 'mount-doom' to Mordor
    }
    itsDangerousToGoAlone()

    // Part 11

    function weWantsIt() {
      var $gollumDiv = $('<div id="gollum">')
      var $mordor = $('article:nth-child(3)')
      $mordor.append($gollumDiv) // put golum into mordor
      $('#the-ring').detach().appendTo($gollumDiv) // transfer ring from frodo to gollum
      $('#gollum').detach().appendTo($("#mount-doom"))
      // Create a div with an id of 'gollum' and add it to Mordor
      // Remove the ring from Frodo and give it to Gollum
      // Move Gollum into Mount Doom
    }
    weWantsIt()

    // Part 12

    function thereAndBackAgain() {
      $('#gollum').remove();
      $('.Hobbit').detach().appendTo(('article:nth-child(1) ul'))
      $('.buddies').detach().appendTo(('article:nth-child(1) ul'))
      // remove Gollum and the Ring from the document
      // remove all the baddies from the document
      // Move all the hobbits back to the shire
    }
    thereAndBackAgain()

})
