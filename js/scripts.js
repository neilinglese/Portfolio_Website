jQuery(document).ready(function ($) {
  //open/close primary navigation
  $(".nav-trigger").on("click", function () {
    $(".menu-icon").toggleClass("is-clicked");
    $(".nav-header").toggleClass("menu-is-open");

    //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if ($(".nav").hasClass("is-visible")) {
      $(".nav")
        .removeClass("is-visible")
        .one(
          "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
          function () {
            $("body").removeClass("overflow-hidden");
          }
        );
    } else {
      $(".nav")
        .addClass("is-visible")
        .one(
          "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
          function () {
            $("body").addClass("overflow-hidden");
          }
        );
    }
  });
  //open/close primary navigation
  $(".navLink").on("click", function () {
    $(".menu-icon").toggleClass("is-clicked");
    $(".nav-header").toggleClass("menu-is-open");

    //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if ($(".nav").hasClass("is-visible")) {
      $(".nav")
        .removeClass("is-visible")
        .one(
          "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
          function () {
            $("body").removeClass("overflow-hidden");
          }
        );
    } else {
      $(".nav")
        .addClass("is-visible")
        .one(
          "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
          function () {
            $("body").addClass("overflow-hidden");
          }
        );
    }
  });

  var tags = [{
    //0
      Name: "Ionic",
      Type: "code"
    },
    {
      //1
      Name: "React",
      Type: "code"
    },
    {
      //2
      Name: "Angular",
      Type: "code"
    },
    {
      //3
      Name: "HTML",
      Type: "code"
    },
    {
      //4
      Name: "C#",
      Type: "code"
    },
    {
      //5
      Name: "Xamarin",
      Type: "code"
    },
    {
      //6
      Name: ".Net",
      Type: "code"
    },
    {
      //7
      Name: "JavaScript",
      Type: "code"
    },
    {
      //8
      Name: "Cordova",
      Type: "code"
    },
    {
      //9
      Name: "Swift",
      Type: "code"
    },
    {
      //10
      Name: "JQUERY",
      Type: "code"
    },
    {
      //11
      Name: "SQL",
      Type: "database"
    },
    {
      //12
      Name: "AZURE",
      Type: "database"
    },
    {
      //13
      Name: "Amazon Web Services",
      Type: "database"
    },
    {
      //14
      Name: "CSS",
      Type: "design"
    },
    {
      //15
      Name: "XAML",
      Type: "design"
    },
    {
      //16
      Name: "Sketch",
      Type: "design"
    },
    {
      //17
      Name: "Photoshop",
      Type: "design"
    },
  ];

  var skills = document.getElementById("skills");
  tags.forEach(element => {
    var tagItem = document.createElement('div');
    tagItem.classList.add('SkillGrid');
    tagItem.classList.add(element.Type);
    tagItem.innerText = element.Name;
    skills.appendChild(tagItem);
  });


  var projects = [{
      Name: "SportsLock",
      ShortDescription: "A new take on daily fantasy sports. Xamarin Android application built for Chicago Startup",
      Description: "A new take on daily fantasy sports. Xamarin Android application built for Chicago Startup",
      images: ["img/projects/sportslock/slone.png", "img/projects/sportslock/slTwo.png", "img/projects/sportslock/slThree.png", "img/projects/sportslock/slFour.png"],
      TagNames: ["Xamarin", "C#", "Android", "Azure", "XAML", "Sketch"],
      TagColors: ["code", "code", "code", "database", "design", "design"],
      AvailableOn: []
    },
    {
      Name: "Rhythm Rain",
      ShortDescription: "Play to the rhythm of your own music, as music rhythm games are redefined in this creative mobile game.",
      Description: "Play to the rhythm of your own music, as music rhythm games are redefined in this creative mobile game.",
      images: ["img/projects/rhythmrain/GameOne.png", "img/projects/rhythmrain/GameTwo.png", "img/projects/rhythmrain/GameThree.png"],
      TagNames: ["C#", "UNITY", ".NET", "Photoshop"],
      TagColors: ["code", "code", "code", "design"],
      AvailableOn: [
        "img/badges/Appstore.png",
        "img/badges/Playstore.png"
      ]
    },
    {
      Name: "View Chicago",
      ShortDescription: "Self guided tour application, built for the AIA, View Chicago, and Columbia College",
      Description: "Self guided tour application, built for the AIA, View Chicago, and Columbia College",
      images: ["img/projects/viewchicago/vcOne.png", "img/projects/viewchicago/vcTwo.png", "img/projects/viewchicago/vcThree.png", "img/projects/viewchicago/vcFour.png"],
      TagNames: ["Angular", "Javascript", "HTML", "JSON", "CSS"],
      TagColors: ["code", "code", "code", "database", "design"],
      AvailableOn: [
        "img/badges/Website.png"
      ]
    },
    {
      Name: "Monologues",
      ShortDescription: "A digital Artist Book brining the Four Monologues to a digital form.",
      Description: "A digital Artist Book brining the Four Monologues to a digital form.",
      images: ["img/projects/monologues/mOne.png", "img/projects/monologues/mTwo.png", "img/projects/monologues/mThree.png", "img/projects/monologues/mFour.png", "img/projects/monologues/mFive.png"],
      TagNames: ["Ionic", "Angular", "HTML", "CSS"],
      TagColors: ["code", "code", "code", "design"],
      AvailableOn: [
        "img/badges/Appstore.png",
        "img/badges/Playstore.png"
       ]
    },

  ];

  var cards = document.getElementById('cards');

  projects.forEach(element => {
    var card = document.createElement('a');
    card.className = 'card';
    card.id = 'modelBtn';
    var cardHeader = document.createElement('span');
    cardHeader.className = 'card-header';
    cardHeader.style.backgroundImage = 'url(' + element.images[0] + ')';
    var cardTitle = document.createElement('span');
    cardTitle.className = 'card-title';
    var cardH3 = document.createElement('h3');
    cardH3.innerText = element.Name;
    cardTitle.appendChild(cardH3);
    cardHeader.appendChild(cardTitle);
    var cardSummary = document.createElement('span');
    cardSummary.className = 'card-summary';
    cardSummary.innerText = element.ShortDescription;
    card.appendChild(cardHeader);
    card.appendChild(cardSummary);
    card.onclick = function () {
      $('body').css('overflow', 'hidden');
      openModal(projects.indexOf(element));
    };
    cards.appendChild(card);
  });

  var modal = document.getElementById("simpleModal");
  var closeBtn = document.getElementsByClassName("closeBtn")[0];

  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", outsideClick);

  var inWrap = $('.inner-wrapper');
  var innerwrapper = document.getElementById("innerwrapper");

  function openModal(x) {
    modal.style.display = "block";
    var title = document.getElementById('modaltitle');
    var description = document.getElementById('modaldescription');

    title.innerText = projects[x].Name;
    description.innerText = projects[x].Description;

    while (innerwrapper.firstChild) {
      innerwrapper.removeChild(innerwrapper.firstChild);
    }


    projects[x].images.forEach(element => {
      var tdiv = document.createElement("div");
      tdiv.className = "slide";
      var test = document.createElement("img");
      test.src = element;
      test.alt = "projectimg";
      tdiv.appendChild(test);
      innerwrapper.appendChild(tdiv);




    });

    var modalskills = document.getElementById('modalskills');
    while (modalskills.firstChild) {
      modalskills.removeChild(modalskills.firstChild);
    }
    var y = 0;
 
    projects[x].TagNames.forEach(element => {
      var tdiv = document.createElement("div");
      tdiv.className = "SkillGrid";
      tdiv.innerText = element;
      tdiv.classList.add(projects[x].TagColors[y]);
      y++;
      modalskills.appendChild(tdiv);
    });

    var ydiv = document.createElement("div");
    ydiv.className = "badges";
    
    projects[x].AvailableOn.forEach(element => {
      console.log(element);
      // var tdiv = document.createElement("div");

      var badge = document.createElement("img");
      badge.src = element;
      ydiv.appendChild(badge);
      modalskills.appendChild(ydiv);
    });
  }



  $('.modal').swipeleft(function() { 
    inWrap.animate({
      left: '0%'
    }, 300, function () {
      inWrap.css('left', '-100%');
      $('.slide').first().before($('.slide').last());
    });
}).swiperight(function() { 
  inWrap.animate({
    left: '-200%'
  }, 300, function () {
    inWrap.css('left', '-100%');
    $('.slide').last().after($('.slide').first());
  });
});

  $('.prev').on('click', function () {
    inWrap.animate({
      left: '0%'
    }, 300, function () {
      inWrap.css('left', '-100%');
      $('.slide').first().before($('.slide').last());
    });
  });
  $('.next').on('click', function () {
    inWrap.animate({
      left: '-200%'
    }, 300, function () {
      inWrap.css('left', '-100%');
      $('.slide').last().after($('.slide').first());
    });
  });
  function closeModal() {
    $('body').css('overflow', 'auto');
    modal.style.display = "none";
  }
  function outsideClick(e) {
    if (e.target == modal) {
      $('body').css('overflow', 'auto');
      modal.style.display = "none";
    }
  }
});