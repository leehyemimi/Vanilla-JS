const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  const hours = String(date.getHours() % 12 === 0 ? 12 : date.getHours() % 12).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${ampm} ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);