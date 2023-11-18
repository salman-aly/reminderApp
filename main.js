const time = moment().format('LTS');
const date = moment().format('LL');

let clockTime = document.getElementById("time");
let clockDate = document.getElementById("date");


setInterval(() => {
    const nowTime = moment().format('LTS');
    clockTime.innerHTML = nowTime
}, 1000)


clockDate.innerHTML = `
  <div class="currentDate">
    <h4 class="date">${date}</h4>
  </div>
`;


function nTime() {
    let Div = document.querySelector(".main-container");
    Div.style.display = "none"
}



