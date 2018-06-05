console.log("Linked.");

var doomCount = 0;

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

// If I'm going to keep making lists.....
function makeList(arr, tagToAppendTo, classname = '') {
  arr.forEach(thing => {
    let l = document.createElement('li');
    if (classname != '') {l.className = classname;}
    l.textContent = thing;
    tagToAppendTo.appendChild(l);
  })
};

// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  let elem = document.createElement('section');
  elem.id = 'middle-earth';
  lands.forEach(land => {
    let art = document.createElement('article');
    let name = document.createElement('h1');
    name.textContent = land;
    art.appendChild(name);
    elem.appendChild(art);
  })
  document.body.appendChild(elem);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
  let ul = document.createElement('ul');
  makeList(hobbits, ul, 'hobbit');
  document.querySelector('article').appendChild(ul);
}

makeHobbits();

// Part 3
// Ensure that the frodo element has the class 'frodo-in' to here. Moving it around and creating it elsewhere may have omitted that class.
// If it doesn't, add it in. This is needed for the fade-in. Then, toggle the fade-out class which uses CSS animations to fade it out.
// Increment the doomCount global variable. If it hits 3, remove and re-create the body. Problem is, the body has lots of CSS stylings.
// So we remove just what's sufficient to give us a plain white background with black (legible) text, then display the text.
// Note that we use a filter here for the array iterator because we're looking for a specific element in the array. The forEach iterator
// could be used, combined with a if-else check, but the filter is designed for this purpose. Because the frodo-out class is toggled on and
// off by the classList.toggle method, we can call this same callback function in the setTimeout function :D Just make sure not to increase
// the doomCount on both fade IN and fade OUT. I've chosen to increase it when it fades out here.
function spookFrodo() {
  let frodo = Array.from(document.getElementsByTagName('li')).filter(fella => fella.textContent === 'Frodo Baggins')[0];
  if (!frodo.classList.contains('frodo-in')) {
    frodo.classList.toggle('frodo-in');
  };
  frodo.classList.toggle('frodo-out');
  if (frodo.classList.contains('frodo-out')) {
    doomCount++;
    if (doomCount === 3) {
      document.body.parentNode.removeChild(document.body);
      let d = document.createElement('body');
      d.textContent = "The Ring has been returned to Sauron and the world is over.";
      d.style.backgroundImage = '';
      d.style.background = 'white';
      d.style.fontFamily = 'Arial';
      d.style.color = 'black';
      d.style.textTransform = 'none';
      d.style.textShadow = 'none';
      d.style.padding = '10% 0 0 0';
      d.style.textAlign = 'center';
      document.querySelector('html').appendChild(d);
      return;
    }
    setTimeout(spookFrodo, 2000);
  }
}

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  let d = document.createElement('div')
  d.className = 'magic-imbued-jewelry';
  d.addEventListener('click', nazgulScreech);
  d.addEventListener('click', spookFrodo);
  let frodo = Array.from(document.getElementsByTagName('li')).filter(fella => fella.textContent === 'Frodo Baggins')[0];
  frodo.class = 'hobbit frodo-in';
  frodo.appendChild(d);
}

keepItSecretKeepItSafe();
// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  let a = document.createElement('aside');
  let ul = document.createElement('ul');
  makeList(buddies, ul);
  a.appendChild(ul);
  document.querySelectorAll('article')[1].appendChild(a);
}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  let l = Array.from(document.getElementsByTagName('li')).filter(fella => fella.textContent === 'Strider');
  l[0].textContent = 'Aragorn';
}

// beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  
  // I did this first to move each hobbit one by one...
  // let toMove = document.querySelectorAll('.hobbit');
  // let rivendell = document.querySelectorAll('article')[1];
  // toMove.forEach(m => {
  //   m.parentNode.removeChild(m); 
  //   rivendell.appendChild(m)
  // })

  // Makes more sense to move the entire unordered list?
  let toMove = document.querySelector('.hobbit').parentNode;
  let rivendell = document.querySelectorAll('article')[1];
  toMove.parentNode.removeChild(toMove);
  rivendell.appendChild(toMove);
}

// leaveTheShire();


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  let rivendell = document.querySelectorAll('article')[1];
  let d = document.createElement('div');
  d.id = 'the-fellowship';
  let ul = document.createElement('ul');
  let l = Array.from(document.getElementsByTagName('li'));
  l.forEach(fella => {
    if (hobbits.includes(fella.textContent) || buddies.includes(fella.textContent) || fella.textContent === 'Aragorn') { // Detect 'Aragorn' here in case his name has been changed already. 'Strider' was in the list of buddies.
      ul.appendChild(fella)
      console.log(fella.textContent + " has joined the party!"); //I hate alerts. Gonna use console.log instead.
    }
  });
  d.appendChild(ul);
  rivendell.appendChild(d);
}

// forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  let l = Array.from(document.getElementsByTagName('li')).filter(fella => fella.textContent === 'Gandalf the Grey')[0];
  l.textContent = 'Gandalf the White';
  l.style.backgroundColor = 'white';
  l.style.border = '2px solid gray';
};

// theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  console.log("The horn of gondor has been blown!");
  let l = Array.from(document.getElementsByTagName('li')).filter(fella => fella.textContent === 'Boromir')[0];
  l.style.textDecoration = 'line-through';
  l.parentNode.removeChild(l);
}

// hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  let d = document.createElement('div');
  d.id = 'mount-doom';
  let l = Array.from(document.getElementsByTagName('li')).filter(fella => {return fella.textContent === 'Frodo Baggins' || fella.textContent === 'Samwise \'Sam\' Gamgee'});
  let mordor = document.querySelectorAll('article')[2];
  let ul = document.createElement('ul');
  ul.appendChild(l[0]);
  ul.appendChild(l[1]);
  mordor.appendChild(ul);
  mordor.appendChild(d);
}

// itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  let d = document.createElement('div');
  d.id = 'gollum';
  let ring = document.querySelector('.magic-imbued-jewelry');
  d.appendChild(ring);

  let mountDoom = document.getElementById('mount-doom');
  mountDoom.appendChild(d);
}

// weWantsIt();

// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  let gollum = document.getElementById('gollum');
  gollum.parentNode.removeChild(gollum);

  let h = Array.from(document.querySelectorAll('.hobbit'));
  let ul = document.createElement('ul');
  h.forEach(l => ul.appendChild(l));
  document.querySelector('article').appendChild(ul);
}

// thereAndBackAgain();