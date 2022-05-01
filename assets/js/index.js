$("#close").click(function(){
    $("#navbarNavAltMarkup").removeClass("show");
});

// When the user scrolls the page, execute stickyNav
window.onscroll = function() {
  stickyNav();
  scrollFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar-toggler");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("stickyBtn")
  } else {
    navbar.classList.remove("stickyBtn");
  }
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 100px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}