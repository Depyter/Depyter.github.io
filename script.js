
const navList = document.querySelector("#Nav-list");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
  const visibility = navList.getAttribute("data-visible");

  if (visibility === "false") {
    navList.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    navList.setAttribute("data-visible", false)
    navToggle.setAttribute("aria-expanded", false);
  }
});

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


// Active states 

const home = document.querySelector("#Home");
const gateway = document.querySelector("#Gateway");
const contact = document.querySelector("#Contact");

// Set Landing page as active 
home.classList.add("active");

// Event listener for clicks that change the active state

home.addEventListener('click', () => {
  activeLink[0].classList.remove("active");
  home.classList.add("active");
});

gateway.addEventListener('click', () => {
  activeLink[0].classList.remove("active");
  gateway.classList.add("active");
});

contact.addEventListener('click', () => {
  gateway.classList.remove("active");
  home.classList.add("active");
});