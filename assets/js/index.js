function openSettings() {
  document
    .getElementById("settings-sidebar")
    .classList.remove("translate-x-full");

  document.getElementById("settings-toggle").style.right = "20rem";

  document
    .getElementById("settings-toggle")
    .setAttribute("aria-expanded", "true");
}

function closeSettings() {
  document
    .getElementById("settings-sidebar")
    .classList.add("translate-x-full");

  document.getElementById("settings-toggle").style.right = "0";

  document
    .getElementById("settings-toggle")
    .setAttribute("aria-expanded", "false");
}

var themeButton =
  document.getElementById("theme-toggle-button");

themeButton.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
});

function changeFont(fontName) {
  document.body.style.fontFamily = fontName;
}

function changeColor(primary, secondary, accent) {
  document.documentElement.style.setProperty(
    "--color-primary",
    primary
  );

  document.documentElement.style.setProperty(
    "--color-secondary",
    secondary
  );

  document.documentElement.style.setProperty(
    "--color-accent",
    accent
  );
}

function resetSettings() {
  document.body.style.fontFamily = "Tajawal";

  document.documentElement.style.setProperty(
    "--color-primary",
    "#6366f1"
  );

  document.documentElement.style.setProperty(
    "--color-secondary",
    "#8b5cf6"
  );

  document.documentElement.style.setProperty(
    "--color-accent",
    "#ec4899"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var filtersContainer =
    document.getElementById("portfolio-filters");

  var projects =
    document.querySelectorAll(".portfolio-item");

  var filters = [
    {
      name: "الكل",
      category: "all"
    },
    {
      name: "مواقع الويب",
      category: "web"
    },
    {
      name: "التطبيقات",
      category: "app"
    },
    {
      name: "التصميم",
      category: "design"
    },
    {
      name: "التجارة الإلكترونية",
      category: "ecommerce"
    }
  ];

  var activeClasses =
    "portfolio-filter px-8 py-3 rounded-xl bg-linear-to-r from-primary to-secondary text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50";

  var inactiveClasses =
    "portfolio-filter px-8 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700";

  filtersContainer.innerHTML = filters
    .map(function (filter, index) {
      return `
        <button
          type="button"
          class="${index === 0 ? activeClasses : inactiveClasses}"
          data-filter="${filter.category}"
          aria-pressed="${index === 0 ? "true" : "false"}"
        >
          ${filter.name}
        </button>
      `;
    })
    .join("");

  var filterButtons =
    document.querySelectorAll(".portfolio-filter");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var selectedCategory = button.dataset.filter;

      filterButtons.forEach(function (currentButton) {
        currentButton.className = inactiveClasses;

        currentButton.setAttribute(
          "aria-pressed",
          "false"
        );
      });

      button.className = activeClasses;

      button.setAttribute(
        "aria-pressed",
        "true"
      );

      projects.forEach(function (project) {
        var projectCategory =
          project.dataset.category;

        if (
          selectedCategory === "all" ||
          projectCategory === selectedCategory
        ) {
          project.style.display = "";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
});

var currentIndex = 0;

function getVisibleCards() {
  if (window.innerWidth >= 1024) {
    return 3;
  }

  if (window.innerWidth >= 640) {
    return 2;
  }

  return 1;
}

function moveTestimonials() {
  var visibleCards = getVisibleCards();

  var cardWidth = 100 / visibleCards;

  document.getElementById(
    "testimonials-carousel"
  ).style.transform =
    "translateX(" +
    currentIndex * cardWidth +
    "%)";

  updateDots();
}

function updateDots() {
  var dots =
    document.getElementsByClassName(
      "testimonial-dot"
    );

  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }

  dots[currentIndex].classList.add("active-dot");
}

document
  .getElementById("next-testimonial")
  .addEventListener("click", function () {
    if (currentIndex < 3) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    moveTestimonials();
  });

document
  .getElementById("prev-testimonial")
  .addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = 3;
    }

    moveTestimonials();
  });

var dots =
  document.getElementsByClassName(
    "testimonial-dot"
  );

dots[0].addEventListener("click", function () {
  currentIndex = 0;
  moveTestimonials();
});

dots[1].addEventListener("click", function () {
  currentIndex = 1;
  moveTestimonials();
});

dots[2].addEventListener("click", function () {
  currentIndex = 2;
  moveTestimonials();
});

dots[3].addEventListener("click", function () {
  currentIndex = 3;
  moveTestimonials();
});

moveTestimonials();

var navigationLinks =
  document.getElementsByClassName("nav-link");

function changeActiveLink() {
  var scrollPosition = window.scrollY + 200;
  var activeLinkIndex = 0;

  for (
    var i = 0;
    i < navigationLinks.length;
    i++
  ) {
    var sectionId =
      navigationLinks[i].getAttribute("href");

    var section =
      document.getElementById(
        sectionId.replace("#", "")
      );

    if (
      section &&
      scrollPosition >= section.offsetTop
    ) {
      activeLinkIndex = i;
    }
  }

  for (
    var i = 0;
    i < navigationLinks.length;
    i++
  ) {
    navigationLinks[i].classList.remove(
      "active-link"
    );
  }

  navigationLinks[
    activeLinkIndex
  ].classList.add("active-link");
}

window.addEventListener("scroll", function () {
  changeActiveLink();
});

changeActiveLink();

var scrollButton =
  document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scrollButton.classList.remove(
      "opacity-0",
      "invisible"
    );
  } else {
    scrollButton.classList.add(
      "opacity-0",
      "invisible"
    );
  }
});

scrollButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});