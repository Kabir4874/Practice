const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const Close = document.getElementById("close");

bar.addEventListener("click", () => {
  nav.classList.add("active");
});
Close.addEventListener("click", () => {
  nav.classList.remove("active");
});
