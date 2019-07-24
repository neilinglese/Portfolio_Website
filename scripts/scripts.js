var performances = [

    {
        title: 'Banana',
        href: '../images/portfolio/sportslock/slOne.png',
        type: 'image/jpeg',
        thumbnail: 'https://example.org/thumbnails/banana.jpg'
      },
      {
        title: 'Banana',
        href: '../images/portfolio/sportslock/sltwo.png',
        type: 'image/jpeg',
        thumbnail: 'https://example.org/thumbnails/banana.jpg'
      },
      {
        title: 'Banana',
        href: '../images/portfolio/sportslock/slFour.png',
        type: 'image/jpeg',
        thumbnail: 'https://example.org/thumbnails/banana.jpg'
      },
      // {
      //   title: 'Banana',
      //   href: '../img/chicagoFour.jpg',
      //   type: 'image/jpeg',
      //   thumbnail: 'https://example.org/thumbnails/banana.jpg'
      // },

];


blueimp.Gallery.prototype.options.toggleControlsOnReturn = false;
blueimp.Gallery.prototype.options.toggleControlsOnSlideClick = false;

blueimp.Gallery( performances, {
    container: '#blueimp-image-carousel',
    carousel: true,
    continuous: true,
    startSlideshow: false,
    youTubeClickToPlay: false
});


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