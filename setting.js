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