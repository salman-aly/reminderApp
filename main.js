let Div = document.querySelector(".namaz-time");
let div = document.querySelector(".task-container");

const time = moment().format('LTS');
const date = moment().format('LL');

const now = new Date();
const targetDate = new Date();

let clockTime = document.getElementById("time");
let clockDate = document.getElementById("date");
let dateClock = document.getElementById("date-js")

const currentTimeString = now.toLocaleTimeString('en-US', { hour12: true });
const targetTimeString = targetDate.toLocaleTimeString('en-US', { hour12: true });


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


targetDate.setHours(2, 11, 40, 0);

if (now.getTime() === targetDate.getTime()) {
  alert("Wake up");
}



function createPost() {
  let userTime = document.getElementById("timedate")

  let post = document.getElementById("inputValue");
  let postContent = document.getElementById("postedPost")

  postContent.innerHTML += `
   <div class="postedPost-container">
     <h4>${post.value}</h4>
     <h4>${userTime.value}</h4>
    </div>
  `;
  post.value = ""
}


