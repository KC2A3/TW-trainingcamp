let displayTime = 0;
let setTiming;

function startTiming() {
  setTiming = getTime();
  document.getElementById("result").value = displayTime;
}

function getTime() {
  displayTime++;
  return setTimeout(startTiming, 1000);
}

function endTiming() {
  if (setTiming) {
    clearTimeout(setTiming);
  }
}

function clearTime() {
  displayTime = 0
  document.getElementById("result").value = 0;
}
