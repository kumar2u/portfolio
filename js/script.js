// JavaScript

$(document).ready(function() {
  $(window).on("scroll", function() {
    var navbar = $('nav');
    var scrollTop = $(window).scrollTop();

    // Specify the scroll position where you want to add the class
    var scrollThreshold = 50;

    if (scrollTop > scrollThreshold) {
      navbar.addClass('scrolled fixed');
    } else {
      navbar.removeClass('scrolled fixed');
    }
  });
});

// Toggle javascript

$(document).ready(function() {
  var $sidemenu = $("#sidemenu");

  function openmenu() {
    $sidemenu.css("right", "0px");
  }

  function closemenu() {
    $sidemenu.css("right", "-200px");
  }

  function hideMenuOnClick() {
    closemenu();
  }

  // Add click event listeners to open and close the sidemenu
  $sidemenu.on("click", hideMenuOnClick);

  // Add click event listeners to each navigation item
  $("#sidemenu li").on("click", hideMenuOnClick);

  // Add click event listener to the "hamburger" icon to open the menu
  $(".fa-bars").on("click", openmenu);
});

// Toggle javascript End

// // About Section javascript

$(document).ready(function() {
  function opentab(index) {
    $(".tab-links").removeClass("active-link");
    $(".tab-contents").removeClass("active-tab");

    $(".tab-links").eq(index).addClass("active-link");
    $(".tab-contents").eq(index).addClass("active-tab");
  }

  // Add click event listener to the tab links
  $(".tab-links").on("click", function() {
    var index = $(this).index();
    opentab(index);
  });
});
// // About Section javascript End


// This logic for Portfolio button using jQurey

// $(document).ready(function() {
//   var buttons = $('.button');
//   var works = $('.work');

//   buttons.on('click', function() {
//     var filter = $(this).text();
//     works.hide();

//     if (filter === 'All') {
//       works.show();
//     } else if (filter === 'PSD') {
//       works.slice(0, 3).show();
//     } else if (filter === 'Bootstrap') {
//       works.slice(3, 5).show();
//     } else if (filter === 'JavaScript') {
//       works.slice(5, 8).show();
//     } else if (filter === 'WordPress') {
//       works.slice(8, 10).show();
//     }
//   });
// });
$(document).ready(function() {
  var works = $('.work');

  function showWorks(startIndex, count) {
    works.hide();
    works.slice(startIndex, startIndex + count).fadeIn(500);
  }

  // Show 3 works by default
  showWorks(0, 3);

  // Handle button click events
  $(".button").on("click", function() {
    $(".button").removeClass("active");
    $(this).addClass("active");

    var filter = $(this).text();

    if (filter === 'PSD') {
      showWorks(0, 3);
    } else if (filter === 'Bootstrap') {
      showWorks(3, 2);
    } else if (filter === 'JavaScript') {
      showWorks(5, 3);
    } else if (filter === 'WordPress') {
      showWorks(8, 2);
    }
  });
});


// This logic for Portfolio button using jQurey End


// // Go to top button
// Get the button element
let btn = document.querySelector('.top');
// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Check if the user has scrolled down more than 500 pixels
  if (window.scrollY > 100) {
    // If so, show the button
    btn.style.display = 'block';
  } else {
    // Otherwise, hide the button
    btn.style.display = 'none';
  }
});

// Add a click event listener to the button
btn.addEventListener('click', function() {
  // Scroll the page to the top
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

AOS.init();
