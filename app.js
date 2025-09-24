var getMinute = document.getElementById("minute");
var getSecond = document.getElementById("second");
var getMilliSecond = document.getElementById("milliSecond");

var startBtn = document.getElementById("startBtn");

var minute = 0;
var second = 0;
var milliSecond = 0;
var interval;

function start() {
  interval = setInterval(function () {
    getMilliSecond.innerText = milliSecond < 10 ? "0"+milliSecond : milliSecond;
    
    if (milliSecond == 99) {
      milliSecond = 0;
      second++;
      getSecond.innerText = second < 10 ? "0"+second : second;
    } else {
      milliSecond++;
    }

    if (second == 60) {
      second = 0;
      minute++;
      getMinute.innerText = minute < 10 ? "0"+minute : minute;
    }
  }, 10);
  startBtn.disabled = true;
}

function stop() {
  clearInterval(interval);
  startBtn.disabled = false;
}

function reset() {
  clearInterval(interval);
  minute = 0; second = 0; milliSecond = 0;
  getMinute.innerText = "00";
  getSecond.innerText = "00";
  getMilliSecond.innerText = "00";
  startBtn.disabled = false;
}
