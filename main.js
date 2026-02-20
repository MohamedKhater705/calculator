let screen = document.querySelector("#display-text");
let keypad = document.querySelector(".keypad");
let themesBtn = document.querySelectorAll(".themes-switch button");

themesBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const themeId = e.target.id.split("-")[1];

    document.body.setAttribute("data-theme", themeId);
    localStorage.setItem("saved-theme", themeId);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("saved-theme") || "1";
  document.body.setAttribute("data-theme", savedTheme);
});
//!
keypad.addEventListener("click", (e) => {
  const btn = e.target;
  if (!btn.matches("button")) return;

  // Use the value (the *) if it exists, otherwise use the text (the number)
  const val = btn.getAttribute("value") || btn.textContent;
  const action = btn.dataset.action;

  if (action === "calc") {
    screen.innerText = eval(screen.innerText);
  } else if (action === "reset") {
    screen.innerText = "0";
  } else if (action === "delete") {
    screen.innerText = screen.innerText.slice(0, -1) || "0";
  } else {
    screen.innerText === "0"
      ? (screen.innerText = val)
      : (screen.innerText += val);
  }
});