/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sectionArr = [];
const sectionElm = document.getElementsByTagName('section');
const headerElm = document.getElementsByTagName('header');
const menuLinkElm = document.getElementsByClassName('menu__link');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
document.addEventListener("DOMContentLoaded", function() {
    const navbarList = document.getElementById('navbar__list');
    const section1 = 'Section 1';

    getSectionArr();

    for (section of sectionArr) {
        const itemMenu = document.createElement('li');
        const itemMenuLink = document.createElement('a');
        itemMenuLink.classList.add('menu__link');
        itemMenuLink.textContent = section;

        // Add class active when load page for only Section 1
        if (section1 == itemMenuLink.innerText) {
            itemMenuLink.classList.add('active');
        }

        // Append menu section to Navbar
        itemMenu.appendChild(itemMenuLink);
        navbarList.append(itemMenu);
    }
});

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
const getSectionArr = () => {
    for (const section of document.querySelectorAll('h2')) {
        sectionArr.push(section.innerText);
    }
}

// Scroll to section on link click
document.addEventListener('click', function(element) {
    for (let i = 0; i < sectionArr.length; i++) {
        if (element.target.innerText == sectionArr[i]) {
            const section = document.querySelector('#section' + (i + 1));
			setActiveMenuSection(i);
            section.scrollIntoView({behavior: "smooth", block: "start"});
        }
    };
});

// Set menu and sections as active
const setActiveMenuSection = (index) => {
    for (let i = 0; i < sectionArr.length; i++) {
        if (i == index) {
            sectionElm[i].classList.add('your-active-class');
            menuLinkElm[i].classList.add('active');
        } else {
            sectionElm[i].classList.remove('your-active-class');
            menuLinkElm[i].classList.remove('active');
        }
    }
};
