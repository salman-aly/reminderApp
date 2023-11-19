const time = moment().format('LTS');
const date = moment().format('LL');

let clockTime = document.getElementById("time");
let clockDate = document.getElementById("date");
let dateClock = document.getElementById("date-js")


setInterval(() => {
  const nowTime = moment().format('LTS');
  clockTime.innerHTML = nowTime
}, 1000)


clockDate.innerHTML = `
  <div class="currentDate">
    <h4 class="date">${date}</h4>
  </div>
`;

dateClock.innerHTML = `
  <div><h2>${date}</h2></div>
`;

function nTime() {
  let Div = document.querySelector(".main-container");
  Div.style.display = "none"
}


const now = new Date();
const targetDate = new Date();

// Set the target time to 2:06:40 PM
targetDate.setHours(2, 11, 40, 0);

// Format the current time and target time to string in 12-hour format
const currentTimeString = now.toLocaleTimeString('en-US', { hour12: true });
const targetTimeString = targetDate.toLocaleTimeString('en-US', { hour12: true });

if (now.getTime() === targetDate.getTime()) {
  alert(`Current time (${currentTimeString}) is equal to or later than target time (${targetTimeString}). Wake up!`);
}

