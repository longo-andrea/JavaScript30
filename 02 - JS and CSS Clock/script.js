const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');


function setDate() {
  let date = new Date();

  let hours = date.getHours() % 12;
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  let hoursDegree = ((hours / 12) * 360) + ((mins/60)*30) + 90;
  let minsDegree = ((mins / 60) * 360) + ((secs/60)*6) + 90;
  let secsDegree = (secs/60) * 360 + 90;
  
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  minHand.style.transform = `rotate(${minsDegree}deg)`;
  secHand.style.transform = `rotate(${secsDegree}deg)`;
}

setInterval(setDate, 1000);

