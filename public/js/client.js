const links = document.querySelectorAll(".teacherLink");
const closes = document.querySelectorAll(".close");
const pop_ups = document.querySelectorAll(".pop-up");
const all_teachers = document.querySelector(".allTeachers");

// disable long press
window.oncontextmenu = function () {
  return false;
};

// scroll to top content
if (
  window.location.pathname === "/" ||
  window.location.pathname === "/catalog" ||
  window.location.pathname === "/overview" ||
  window.location.pathname === "/search" ||
  window.location.pathname === "/filter"
) {
  window.onload = () => {
    window.scrollTo({
      top: 850,
      behavior: "smooth",
    });
  };
}

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    pop_ups.forEach(pop => {
      if (!pop.classList.contains("hidden")) {
        pop.classList.add("hidden");
      }
    })
    this.nextElementSibling.classList.remove("hidden");
    all_teachers.classList.add("openPop");
  });
});

closes.forEach((close) => {
  close.addEventListener("click", function (event) {
    event.preventDefault();
    pop_ups.forEach((pop_up) => {
      pop_up.classList.add("hidden");
      all_teachers.classList.remove("openPop");
    });
  });
});

/* keyboard voor zoekveld */

const Keyboard = window.SimpleKeyboard.default;

const keyboardSimple = document.getElementById("keyboard");
const keyboardWrapper = document.getElementById("keyboardWrapper");
const focusCancel = document.querySelector(".focusCancel");
const field = document.getElementById("zoek");

console.log(keyboardWrapper);

const keyboard = new Keyboard({
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
});

field.addEventListener("click", (d) => {
  focusCancel.classList.remove("hidden");
  keyboardWrapper.classList.remove("hidden");
});

focusCancel.addEventListener("click", (d) => {
  focusCancel.classList.add("hidden");
  keyboardWrapper.classList.add("hidden");
});

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}

// Scroll
function up() {
  document.querySelector("html").scrollBy({
    top: -170,
    behavior: "smooth",
  });
}

function down() {
  document.querySelector("html").scrollBy({
    top: 170,
    behavior: "smooth",
  });
}

const catButton = document.getElementById("catalogButton");
const gridButton = document.getElementById("gridButton");

if (window.location.pathname === "/") {
  gridButton.style.display = "none";
} else if (window.location.pathname === "catalog") {
  catButton.style.display = "none";
}

// focus
let oldId;

function letterClicked(clicked_id) {
  const link = document.getElementById(clicked_id);
  const linkOld = document.getElementById(oldId);

  // remove class from previous clicked id
  if (oldId !== undefined) {
    console.log("remove");
    linkOld.classList.remove("letterClicked");
  }

  oldId = clicked_id;
  link.classList.add("letterClicked");
}
