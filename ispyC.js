const Clock = document.querySelector(".clock"),
    Today = Clock.querySelector("h1");
    TodayTime = Clock.querySelector("h2");

const time = new Date(),
    nowYear = time.getFullYear(),
    nowMonth = time.getMonth(),
    nowDate = time.getDate(),
    nowHours = time.getHours(),
    nowMinutes = time.getMinutes(),
    nowSeconds = time.getSeconds();

function loadToday(month, date){
    const monthBox = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    Today.innerText = `${nowYear} ${monthBox[month]} ${date}`;
    console.log(`loadTodayDetected`);
}

function loadTime(){
    TodayTime.innerText = `${nowHours}:${nowMinutes}:${nowSeconds}`;

    console.log(`loadTimeDetected`);
}
function init(){
    loadToday(nowMonth, nowDate);
    loadTime();
}

init();