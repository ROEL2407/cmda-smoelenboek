const links = document.querySelectorAll(".teacherLink");
const closes = document.querySelectorAll(".close");
const pop_ups = document.querySelectorAll(".pop-up");

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
    this.nextElementSibling.classList.remove("hidden");
  });
});

closes.forEach((close) => {
  close.addEventListener("click", function (event) {
    event.preventDefault();
    pop_ups.forEach((pop_up) => {
      pop_up.classList.add("hidden");
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
  focusCancel.style.display = "initial";
  keyboardWrapper.style.display = "initial";
});

focusCancel.addEventListener("click", (d) => {
  focusCancel.style.display = "none";
  keyboardSimple.style.display = "none";
});

// document.getElementById("zoek").addEventListener("click", (d) => {
//   keyboardWrapper.style.display = "block";
// });

// !document.getElementById("zoek").addEventListener("click", (d) => {
//   keyboardWrapper.style.display = "block";
// });

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
