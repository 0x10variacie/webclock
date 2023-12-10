console.log("js launched");
function timecycle() {
    const today = new Date();
    function timeformat(i){
        if (i < 10) { i = "0" + i};
        return i;
    }
    hourvalue = today.getHours();
    minutevalue = today.getMinutes();
    secondvalue = today.getSeconds();
    hourvalue = timeformat(hourvalue);
    minutevalue = timeformat(minutevalue);
    secondvalue = timeformat(secondvalue);
    document.getElementById("HourD").innerHTML = hourvalue;
    document.getElementById("MinuteD").innerHTML = minutevalue;
    document.getElementById("SecondD").innerHTML = secondvalue;
}
setInterval(timecycle, 1000);