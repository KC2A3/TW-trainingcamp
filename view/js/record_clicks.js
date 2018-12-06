function createLocalStorage() {
  if (!localStorage.clickCount) {
    localStorage.setItem("clickCount", "0");
  }
}

function readFromLocalStorage() {
  createLocalStorage();
  document.getElementById("count").value = localStorage.getItem("clickCount");
}

function igitalPlusOne() {
  localStorage.clickCount = Number(localStorage.clickCount) + 1;
  return localStorage.clickCount;
}

function recordClicks() {
  readFromLocalStorage();
  document.getElementById("count").value = igitalPlusOne();
}