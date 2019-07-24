AOS.init();

//#region Nav Bar Handlers
var navBar = document.getElementById('navBar');
var menuIcon = document.getElementById('menuIcon');
var nav = document.getElementById('nav');
var navLink = document.getElementsByClassName('navLink');

navBar.addEventListener('click', function () {
    menuIcon.classList.toggle('is-clicked');
    navBar.classList.toggle('menu-is-open');
    nav.classList.toggle('is-visible');
});


for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
        menuIcon.classList.toggle('is-clicked');
        navBar.classList.toggle('menu-is-open');
        nav.classList.toggle('is-visible');
    });
}
//#endregion
blueimp.Gallery.prototype.options.toggleControlsOnReturn = false;
blueimp.Gallery.prototype.options.toggleControlsOnSlideClick = false;

document.getElementById('photoGallery').onclick = function (event) {
  event = event || window.event;
  var parent = getClosest(event.target, '.bpImage');
  var target = event.target || event.srcElement,
      link = target.src ? parent : parent,
      options = {
          index: link,
          event: event
      },
      links = this.getElementsByTagName('a');
  console.log(parent);
  blueimp.Gallery(links, options);
};
var getClosest = function (elem, selector) {

  // Element.matches() polyfill
  if (!Element.prototype.matches) {
      Element.prototype.matches =
          Element.prototype.matchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector ||
          Element.prototype.webkitMatchesSelector ||
          function (s) {
              var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                  i = matches.length;
              while (--i >= 0 && matches.item(i) !== this) {}
              return i > -1;
          };
  }

  // Get the closest matching element
  for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
  }
  return null;

};

function openModal(string){
  var photoGallery = document.getElementById('photoGallery');
  while (photoGallery.firstChild) {
    photoGallery.removeChild(photoGallery.firstChild);
}
var photoFragment = document.createDocumentFragment();

  console.log(string);
  projects[string].images.forEach(element => {
    console.log(element);
    var galleryItem = document.createElement('div');
    galleryItem.classList.add('column');
    galleryItem.classList.add('is-one-third');
    galleryItem.classList.add('is-full-mobile');
    var galleryLink = document.createElement('a');
    galleryLink.classList.add('bpImage');
    galleryLink.href = element;


    galleryItem.appendChild(galleryLink);

    var galContent = document.createElement('div');
    galContent.className = 'gallery-item';

    var galImage = document.createElement('img');
    galImage.className = 'gallery-image';
    galImage.src = element;
    galContent.appendChild(galImage);




    galleryLink.appendChild(galContent);

    photoFragment.appendChild(galleryItem);
});

photoGallery.appendChild(photoFragment);

var modalTitle = document.getElementById('modalTitle');
modalTitle.innerText = projects[string].Name;

var modalDescription = document.getElementById('modalDescription');
modalDescription.innerText = projects[string].Description;

var modalLanguages = document.getElementById('modalLanguages');
modalLanguages.innerText = "Langauges: " + projects[string].Languages;

var modalDatabase = document.getElementById('modalDatabase');
modalDatabase.innerText = "Database: " + projects[string].DataBase;

var modalDesign = document.getElementById('modalDesign');
modalDesign.innerText = "Design: " + projects[string].Design;




}
// var skills = document.getElementById("SkillGrid");
// var fragment = document.createDocumentFragment();
// tags.forEach(element => {
//   var tagItem = document.createElement('div');
//   tagItem.classList.add('column');
//   tagItem.classList.add('is-1');
//   tagItem.classList.add('SkillTag');
//   tagItem.classList.add(element.Type);
//   tagItem.innerText = element.Name;
//   fragment.appendChild(tagItem);
// });

// skills.appendChild(fragment);


// projects.forEach(element => {
//   var card = document.createElement('a');
//   card.className = 'card';
//   card.id = 'modelBtn';
//   var cardHeader = document.createElement('span');
//   cardHeader.className = 'card-header';
//   cardHeader.style.backgroundImage = 'url(' + element.images[0] + ')';
//   var cardTitle = document.createElement('span');
//   cardTitle.className = 'card-title';
//   var cardH3 = document.createElement('h3');
//   cardH3.innerText = element.Name;
//   cardTitle.appendChild(cardH3);
//   cardHeader.appendChild(cardTitle);
//   var cardSummary = document.createElement('span');
//   cardSummary.className = 'card-summary';
//   cardSummary.innerText = element.ShortDescription;
//   card.appendChild(cardHeader);
//   card.appendChild(cardSummary);

//   card.onclick = function () {
//     openModal(projects.indexOf(element));
//   };
//   card.ontouchstart = function () {
//     openModal(projects.indexOf(element));
//   };
//   cards.appendChild(card);
// });

// var cardDiv = document.getElementById('cards');
// cardDiv.appendChild(cards);