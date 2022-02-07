"use strict";

// Make navbar transparent when it is on the top

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  scrollIntoView(link);
});

// Handle click on "contact me" button on home

const homeContactBtn = document.querySelector(".home__contact");

homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down

const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the "arrow up" button

arrowUp.addEventListener("click", () => {
  scrollTo({ top: 0, behavior: "smooth" });
});

// Filtering projects

const workBtnContainer = document.querySelector(".work__categories");
const categoryBtns = document.querySelectorAll(".category__btn");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new

  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode.target;
  e.target.classList.add("selected");

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

// // Navbar active filtering

// const navbarContainer = document.querySelector(".navbar__menu");
// const navbarMenuItems = document.querySelectorAll(".navbar__menu__item");

// navbarContainer.addEventListener("click", (e) => {
//   const filter = e.target.dataset.link.substring(1);
//   navbarMenuItems.forEach((navbarMenuItem) => {
//     if (filter === navbarMenuItem.dataset.link.substring(1)) {
//       navbarMenuItem.classList.add("active");
//     } else {
//       navbarMenuItem.classList.remove("active");
//     }
//   });
// });

// Common Function

function scrollIntoView(seletor) {
  const scrollTo = document.querySelector(seletor);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
