
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


function magnetMove() {
    let allmagnets = document.querySelectorAll(".magnet");
    if (allmagnets.length===0) {
      let placedmagnets = document.querySelectorAll(".magnet-placed");
      for (let i = (placedmagnets.length - 1); i >= 0; i--)
        {
          placedmagnets[i].className = "kitchen magnet";
          placedmagnets[i].id = `mag-${i}`;
        }
  }
  else {
    for(let i = (allmagnets.length - 1); i >= 0; i--)
    {
        allmagnets[i].className = "kitchen magnet-placed";
        allmagnets[i].id = "";
    }
  }
}