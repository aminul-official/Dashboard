// Add active class to the current button (highlight it)
// var navMain = document.getElementById("navMain");
// var navItem = navMain.getElementsByClassName("nav-item");
// for (var i = 0; i < navItem.length; i++) {
//     navItem[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active-nav");
//   current[0].className = current[0].className.replace(" active-nav", "");
//   this.className += " active-nav";
//   });
// }

function activeClass(id,className){
    var navMain = document.getElementById(id);
    var navItem = navMain.getElementsByClassName(className);
    for (var i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active-nav");
      current[0].className = current[0].className.replace(" active-nav", "");
      this.className += " active-nav";
      });
    }
}
activeClass("navMain","nav-item")
activeClass("mobileNavMain","nav-item")

// mobileNavMain
// Open menu

function openMenu() {
    var x = document.getElementById("navMain");
    console.log('this is from sibilings');
  }


// mobile menu

function mobileMenu() {
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuCloseIcon = document.getElementById("mobileMenuCloseIcon");
    mobileMenu.style.width = '30px';
    mobileMenuIcon.classList.toggle("mobile-menu-icon");
    mobileMenuCloseIcon.classList.toggle('mobile-menu-close-icon')
    console.log('working');
    var mobileNavMainx = document.getElementById("mobileNavMain");
    mobileNavMainx.classList.toggle('mobileNavMain-open');
    mobileNavMainx.classList.toggle('mobileNavMain-close')
}