/* typing effect */

const words = [
  "Programmer",
  "Web Developer",
  "IT Administrator",
  "UI/UX Designer",
  "Cloud Specialist",
];
const typingSpeed = 50;
const erasingSpeed = 50;
const delayBetweenWords = 1000;
let wordIndex = 0;
let charIndex = 0;
let isErasing = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const displayElement = document.getElementById("text");

  if (!isErasing) {
    displayElement.textContent = currentWord.substring(0, charIndex++);
    if (charIndex <= currentWord.length) {
      setTimeout(typeEffect, typingSpeed);
    } else {
      isErasing = true;
      setTimeout(typeEffect, delayBetweenWords);
    }
  } else {
    displayElement.textContent = currentWord.substring(0, charIndex--);
    if (charIndex >= 0) {
      setTimeout(typeEffect, erasingSpeed);
    } else {
      isErasing = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, typingSpeed);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

/* Tab-System */

document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((btn) => btn.classList.remove("active-btn"));
      tabContents.forEach((content) => content.classList.remove("active-tab"));
      btn.classList.add("active-btn");
      tabContents[index].classList.add("active-tab");
    });
  });
});

/* Scroll animation */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
      entry.target.classList.remove("animate");
    }
  });
});

const scroll = document.querySelectorAll(".container");
scroll.forEach((element) => {
  observer.observe(element);
});

/* responsive nav bar */

const sidemenu = document.querySelector(".Side-Menu");
const body = document.body;
const links = document.querySelectorAll(".Side-Menu a");

function showMenu() {
  sidemenu.style.right = "0";
  body.classList.add("no-scroll");
  sidemenu.classList.add("open");
}

function closeMenu() {
  sidemenu.style.right = "-200px";
  body.classList.remove("no-scroll");
  sidemenu.classList.remove("open");
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
