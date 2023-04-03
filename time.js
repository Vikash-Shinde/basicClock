setInterval(seeTime, 1000);
function seeTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"
        + min + ":" + sec + am_pm;

    document.getElementById("date")
        .innerHTML = currentTime;


    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = weekdays[time.getDay()];
    document.getElementById("week")
        .innerHTML = day;
        
    const months = ["January", "February" , "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        let month = months[time.getMonth()];
        document.getElementById("month")
        .innerHTML = month;
}
showTime();
