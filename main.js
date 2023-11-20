let Div = document.querySelector(".namaz-time");
let div = document.querySelector(".task-container");

const time = moment().format('LTS');
const date = moment().format('LL');

const now = new Date();
let getTime = now.getTime()
// const targetDate = new Date();
// targetDate.setHours(8, 57, 30, 0);

let clockTime = document.getElementById("time");
let clockDate = document.getElementById("date");
let dateClock = document.getElementById("date-js")

let fajr = document.getElementById("fajar")
let zhar = document.getElementById("zhar")
let asr = document.getElementById("asr")
let maghrib = document.getElementById("maghrib")
let isha = document.getElementById("isha")

// const currentTimeString = now.toLocaleTimeString('en-US', { hour12: true });
// const targetTimeString = targetDate.toLocaleTimeString('en-US', { hour12: true });


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


function hideNamz() {
  let hide = document.querySelector(".namaz-time");
  hide.style.display = "none"
  let show = document.querySelector(".task-container");
  show.style.display = "flex"
}

function hideTask() {
  let show = document.querySelector(".namaz-time");
  show.style.display = "block"
  let hide = document.querySelector(".task-container");
  hide.style.display = "none"
}


if (getTime === fajr) {
  alert("Wake up");
}

console.log(fajr)



function createPost() {
  let userTime = document.getElementById("timer");
  let userDate = document.getElementById("userDate");

  let post = document.getElementById("inputValue");
  let postContent = document.getElementById("postedPost");

  postContent.innerHTML += `
   <div class="postedPost-container">
     <p class="dis">${post.value} <box-icon name='sushi'></box-icon>
     </p>
     <h4 class="timejs">${userTime.value}<box-icon class='bx' name='time' type='solid' color='#056a2c' ></box-icon></h4>
     <h4 class="date">${userDate.valueAsDate.toDateString()}</h4>
   </div>
  `;
  post.value = "";
  // console.log(userDate)
}


