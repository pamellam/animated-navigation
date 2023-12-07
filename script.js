const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItems = [nav1, nav2, nav3, nav4, nav5];

//  Control navigation animations
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, index) => {
    nav.classList.replace(
      `slide-${direction1}-${index + 1}`,
      `slide-${direction2}-${index + 1}`
    );
  });
}

function toggleNav() {
  // Toggle: Menu bars open/close
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active');

  if (overlay.classList.contains('overlay-active')) {
    // animate in - overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // animate in - nav elements
    navAnimation('out', 'in');
  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // animate out - nav elements
    navAnimation('in', 'out');
  }
}

// Event listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});
