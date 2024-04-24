var timer = 60;
var score = 0;
var rn = 0;

function inc_score() {
  score += 10;
  document.querySelector("#score").textContent = score;
}
function new_hit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rn;
}
function create_bubble() {
  var clutter = "";
  for (var i = 1; i <= 132; i++) {
    var rand = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rand}</div>`;
  }
  document.querySelector("#bpanel").innerHTML = clutter;
}

function run_timer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      document.querySelector("#bpanel").innerHTML = `<h2>Game Over...</h2>
            <h2>Your score is ${score}</h2>`;
      clearInterval(timerint);
    }
  }, 1000);
}

function run() {
  document.querySelector("#bpanel").addEventListener("click", function (det) {
    var clicknum = Number(det.target.textContent);
    if (clicknum == rn) {
      inc_score();
      new_hit();
      create_bubble();
    }
  });
}

document.querySelector("#btn").addEventListener("click", function () {
  document.querySelector("#btn").classList.add("rem");
  run_timer();
  new_hit();
  create_bubble();
  run();
});

document.querySelector("#bpanel").innerHTML=`<h1>CLick Start Game To play this game</h1>`;