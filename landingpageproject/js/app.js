/* Define global variables*/

const menu = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

let numberlists = sections.length;
/*end global variables*/

/**
 * start helper function
 */
function createlistitem() {
  for (section of sections) {
    sectionname = section.getAttribute("data-nav");
    sectionid = section.getAttribute("id");
    // creating an item for each one
    listitems = document.createElement("li");
    //adding the item text
    listitems.innerHTML = `<a class='menu__link'href='#${sectionid}'>${sectionname}</a>`;

    //add the list items to the menu bar

    menu.appendChild(listitems);
  }
}

//add class'active' to section when its near to top of view port
function inview(section) {
  const offset = Math.floor(section.getBoundingClientRect().top);
  return offset < 150 && offset >= -150;
}

//add active class and remove
function toggleactiveclass() {
  for (section of sections) {
    if (inview(section)) {
      section.classList.add("your-active-class"); //add avtive class
      section.style.cssText = "background-color: yellow;";
    } else {
      if (section.classList.contains("your-active-class")) {
        section.classList.remove("your-active-class"); //remove active class
        section.style.cssText =
          "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
      }
    }
  }
}

createlistitem();

// add scroll to top event with button
document.addEventListener("scroll", toggleactiveclass);

const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageXOffset > 150) {
    totop.classList.add("your-active-class");
  } else {
    totop.classList.remove("your-active-class");
  }
});

//make the buttonto top appear when its scrolling and disapear when reach top of the page
window.addEventListener("scroll", scrollfunction);
//make the buttonto top appear when it moves through the page and diaspear when it reaches the top
function scrollfunction() {
  if (window.pageYOffset > 350) {
    totop.style.display = "block";
  } else {
    totop.style.display = "none";
  }
}
// section.scrollIntoView smoothing
var navsections = document.querySelectorAll(".navbar__menu a ");
navsections.forEach(function (link) {
  link.addEventListener("click", function (el) {
    el.preventDefault();
    var currentId = el.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});
