
const minsHand = document.querySelector('#minute');
const hourHand = document.querySelector('#hour');

function setDate() {
  const now = new Date();
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360);
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30);
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();