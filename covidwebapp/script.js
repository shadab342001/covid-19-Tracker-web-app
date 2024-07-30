'use strict';

/**
 * Add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * Navbar toggle
 */

const navbar = document.querySelector("[data-navbar");
const navToggler = document.querySelector("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * Active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElemOnScroll);

/**
 * Fetch COVID-19 data and update UI
 */

// API endpoint from rootnet.in
const apiUrl = '(https://api.covid19india.org/data.json)';

// Function to fetch data from API
async function fetchCases() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const summary = data.data.summary;
        document.getElementById('total-cases').innerHTML = summary.total;
        document.getElementById('active-cases').innerHTML = summary.active;
        document.getElementById('recovered-cases').innerHTML = summary.discharged;
        document.getElementById('death-cases').innerHTML = summary.deaths;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch cases
fetchCases();
