import React from "react";

const Timer = () => {
  let totalSeconds = 0;
  setInterval(setTime, 1000);

  function setTime() {
    const minutesLabel = document.getElementById("minutes");
    const secondsLabel = document.getElementById("seconds");
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }

  function pad(val) {
    const valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

  return (
    <div class="timer">
      <label id="minutes">00</label>:<label id="seconds">00</label>
    </div>
  );
};

export default Timer;
