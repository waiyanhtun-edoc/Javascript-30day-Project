// const secondHand = document.querySelector('.second-hand');
// const minHand = document.querySelector('.min-hand');
// const hourHand = document.querySelector('.hour-hand');


// function setDate(){
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const secondDeg = ((seconds / 60 ) * 360) + 90;
//     secondHand.style.transform = `rotate(${secondDeg}deg)`;

//     const mins = now.getMinutes();
//     const minDeg = ((mins / 60 ) * 360) + ((seconds/60)*6) + 90;
//     minHand.style.transform = `rotate(${minDeg}deg)`;

//     const hours = now.getHours();
//     const hourDeg = ((hours / 12 ) * 360) + ((mins/60)*30) + 90;
//     minHand.style.transform = `rotate(${hourDeg}deg)`;
// }

// setInterval(setDate, 1000);

// setDate();

const secondView = document.querySelector(".second");
const minuteView = document.querySelector(".minute");
const hourView = document.querySelector(".hour");
const digitalTimeView = document.querySelector(".digital-time");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const digitalTime = now.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  const secondsDegrees = (seconds / 60) * 360;
  const minutesDegrees = (minutes / 60) * 360;
  const hoursDegrees = (hours / 12) * 360;

  secondView.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteView.style.transform = `rotate(${minutesDegrees}deg)`;
  hourView.style.transform = `rotate(${hoursDegrees}deg)`;
  digitalTimeView.textContent = digitalTime;
}

setInterval(setDate, 1000);
