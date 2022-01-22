// Add active class to the current button (highlight it)
var navMain = document.getElementById("navMain");
var navItem = navMain.getElementsByClassName("nav-item");
for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-nav");
  current[0].className = current[0].className.replace(" active-nav", "");
  this.className += " active-nav";
  });
}


// Open menu

function openMenu() {
    var x = document.getElementById("navMain");
    console.log('this is from sibilings');
  }


// mobile menu

function mobileMenu() {
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.width = '44px';
    mobileMenuIcon.classList.toggle("mobile-menu-icon");
    console.log('working');
    var mobileNavMainx = document.getElementById("mobileNavMain");
    mobileNavMainx.classList.toggle('mobileNavMain-open');
}