// animate the sub menu sliding in and out

// animation to slide in the menu and out
// click event for the menu button

var menubtn = document.getElementById("nav-menu-btn");
var closebtn = document.getElementById("close-menu-btn");
var menu = document.getElementById("menu-window");
var navMenuItem = document.getElementsByClassName("nav-menu-item");

console.log(navMenuItem);

// Hide the menu
closebtn.onclick = function buttonClicked() {
  console.log("close button clicked");
  closeMenu();

  setTimeout(function() {
    menu.style.visibility = "hidden";
  }, 500);
};

//display the menu
menubtn.onclick = function buttonClicked() {
  console.log("menu button clicked");
  openMenu();
  menu.style.visibility = "visible";
};

// Animations--------------------------------------------
// Close menu animation
function closeMenu() {
  gsap.to(".menu-window", { x: "100%", duration: 0.5 });
}

// Open menu animation
function openMenu() {
  gsap.fromTo(
    ".menu-window",
    { x: "100%", duration: 1 },
    { x: 0, duration: 0.5 }
  );
}
