/** @type {HTMLButtonElement} */
const app = document.querySelector(".app");
/** @type {HTMLButtonElement} */
const btn = document.querySelector(".btn-hold");
/** @type {HTMLDivElement} */
const wave = document.querySelector(".fill-wave");
/** @type {HTMLDivElement} */
const percent = document.querySelector(".percent");

let val = 0;
let runningFlag = false;

function render() {
  wave.style.marginBottom = `-${100 - val}%`;
  percent.innerHTML = `${val}%`;
}

function finish() {
  app.style.opacity = '0';
  // bg.style.opacity = '1';
}

function run() {
  if (!runningFlag) {
    return;
  }

  if (val === 100) {
    finish();
    return;
  }

  val += 1;
  render();

  if (val < 100) {
    setTimeout(run, 100);
  }
}

function start() {
  runningFlag = true;
  run();
}

function stop() {
  runningFlag = false;
}

btn.addEventListener("touchstart", (ev) => {
  start();
});

btn.addEventListener("touchend", (ev) => {
  stop();
});

btn.addEventListener('touchcancel', ev => {
  stop();
});