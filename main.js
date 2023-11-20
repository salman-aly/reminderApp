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


let post = document.getElementById("inputValue");
let userTime = document.getElementById("timer");
let userDate = document.getElementById("userDate");
let postContent = document.getElementById("postedPost");

function createPost() {
  if (post.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Write something about your task!",
    });
  } else {
    postContent.innerHTML += `
      <div class="postedPost-container">
        <div class="disValue">
          <p class="dis">${post.value}</p>
        </div>
        <div class="timejsbg">
          <h4 class="timejs">${userTime.value}</h4>
        </div>
        <div class="datebg">
          <h4 class="date">${userDate.valueAsDate.toDateString()}</h4>
        </div>
      </div>
    `;

    post.value = "";
    // console.log(userDate)
  }
}





//for push notification

// Check if the browser supports service workers
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceworker.js")
    .then(function (registration) {
      console.log("Service Worker registered with scope:", registration.scope);
      return registration.pushManager
        .getSubscription()
        .then(function (subscription) {
          if (subscription) {
            console.log("User is already subscribed:", subscription);
          } else {
            return registration.pushManager
              .subscribe({ userVisibleOnly: true })
              .then(function (newSubscription) {
                console.log("Subscribed:", newSubscription);
              });
          }
        });
    })
    .catch(function (error) {
      console.error("Service Worker registration failed:", error);
    });
}

// Request notification permission
if ("Notification" in window) {
  Notification.requestPermission().then(function (permission) {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.error("Notification permission denied.");
    }
  });
}



