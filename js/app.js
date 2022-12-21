// variables used in the project
const navitems = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// the beginning of create navbar elements
(function CreateNavItems() {
  sections.forEach((sec) => {
    var navitem = document.createElement("li");
    navitem.innerHTML = `<a href='#${sec.id}' class='menu__link'>${sec.dataset.nav}</a>`;
    navitems.appendChild(navitem);
    scrollBehavior(navitem, sec);
  });
})();

// the beggining of adding classes for active section
function ActiveClass() {
  for (let section of sections) {
    if (
      section.getBoundingClientRect().bottom >= 450 &&
      section.getBoundingClientRect().top <= 150
    ) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  }
}

//handel smooth of scroll
function scrollBehavior(navitem, section) {
  navitem.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      behavior: "smooth",
      top: section.offsetTop,
    });
  });
}

window.addEventListener("scroll", function () {
  ActiveClass();
});
