$(function() {
  console.log("DOM is ready.");

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
    // create a section tag with an id of middle-earth
    // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
    // append middle-earth to your document body
    var $middleEarth = $('<section id="middle-earth">');
    var landArr = lands.map(function(land) {
      var $landArticle = $(`
        <article>
          <h1>${land}</h1>
        </article>
      `);
      return $landArticle;
    })

    $middleEarth.append(landArr);
    $body.append($middleEarth);
  }

  makeMiddleEarth();

  // Part 2

  function makeHobbits() {
    // display an unordered list of hobbits in the shire (which is the second article tag on the page)
    // give each hobbit a class of hobbit
    var theShire = $('article').first();
    var $hobbitList = $('<ul>');

    var hobbitsArr = hobbits.map(function(hobbit) {
      var $hobbitLi = $('<li class="hobbit">').text(hobbit);
      return $hobbitLi;
    })
    $hobbitList.append(hobbitsArr);
    theShire.append($hobbitList);
  }
  makeHobbits();

  // Part 3

  function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    // give the div a class of 'magic-imbued-jewelry'
    // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    // add the ring as a child of Frodo
    var $theRing = $('<div id="the-ring" class="magic-imbued-jewelry">');
    $theRing.on('click', nazgulScreech);
    var $frodo = $('.hobbit').first();
    $frodo.append($theRing);
  }
  keepItSecretKeepItSafe();

  // Part 4

  function makeBuddies() {
    // create an aside tag
    // attach an unordered list of the 'buddies' in the aside
    // insert your aside as a child element of rivendell
    var $rivendell = $('article:nth-child(2)');
    var $buddies = $('<aside>');
    var $buddiesList = $('<ul>');
    var $buddiesArr = buddies.map(function(buddy) {
      var $buddiesLi = $('<li>').text(buddy);
      return $buddiesLi;
    })
    $buddiesList.append($buddiesArr);
    $buddies.append($buddiesList);
    $rivendell.append($buddies);
  }
  makeBuddies();

  // Part 5

  function beautifulStranger() {
    // change the 'Strider' textnode to 'Aragorn'
    $('article:nth-child(2) aside ul li:nth-child(4)').text('Aragorn');
  }
  beautifulStranger();

  // Part 6

  function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
    var $hobbitList = $('.hobbit');
    var $rivendell = $('article:nth-child(2) aside');
    $rivendell.find('ul').append($hobbitList);
  }
  leaveTheShire();

  // Part 7

  function forgeTheFellowShip() {
    // create a new div called 'the-fellowship' within rivendell
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    var $theFellowship = $('<div id="the-fellowship">');
    var $rivendell = $('article:nth-child(2)');
    var $fellowshipMembers = $rivendell.find('ul>li');

    $.each($fellowshipMembers, function(key, val) {
      $theFellowship.append($(val));
      var $character = $(val).text();
      // alert(`${$character} joined the fellowship`);
    })

    $rivendell.append($theFellowship);
  }
  forgeTheFellowShip();

  // Part 8

  function theBalrog() {
    // change the 'Gandalf' textNode to 'Gandalf the White'
    // apply style to the element
    // make the background 'white', add a grey border
    var $theFellowship = $('#the-fellowship');
    var $gandalf = $theFellowship.find('li').first();
    $gandalf.text("Gandalf the White");
    $gandalf.css('background-color', 'white');
    $gandalf.css('border', '3px solid grey');
  }
  theBalrog();

  // Part 9

  function hornOfGondor() {
    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // put a linethrough on boromir's name
    // Remove Boromir from the Fellowship
  }

  // Part 10

  function itsDangerousToGoAlone(){
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor
  }

  // Part 11

  function weWantsIt() {
    // Create a div with an id of 'gollum' and add it to Mordor
    // Remove the ring from Frodo and give it to Gollum
    // Move Gollum into Mount Doom
  }

  // Part 12

  function thereAndBackAgain() {
    // remove Gollum and the Ring from the document
    // remove all the baddies from the document
    // Move all the hobbits back to the shire
  }
})
