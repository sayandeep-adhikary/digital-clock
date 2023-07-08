const a = setInterval(function(){
    let c = new Date();
    let hour = c.getHours();
    let min = c.getMinutes();
    let sec = c.getSeconds();
    let str = "AM"
    if(hour > 12){
        hour = hour - 12;
        str = "PM"
    }
    if(hour < 10){
        hour = `0${hour}`;
    }
    if(min < 10){
        min = `0${min}`;
    }
    if(sec < 10){
        sec = `0${sec}`;
    }
    let x = document.getElementsByClassName("hour")[0];
    let y = document.getElementsByClassName("minute")[0];
    let z = document.getElementsByClassName("second")[0];
    let am_pm = document.getElementById("am-pm")
    x.getElementsByClassName("inner")[0].innerHTML = hour;
    y.getElementsByClassName("inner")[0].innerHTML = min;
    z.getElementsByClassName("inner")[0].innerHTML = sec;
    am_pm.innerHTML = str;
    // console.log(z);
}, 1000);