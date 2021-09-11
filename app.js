setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    // let second = date.getSeconds();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    // second = second < 10 ? '0' + second : second;

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    // document.getElementById('second').innerHTML = second;
}, 500)


setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    document.getElementById("hr").style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    document.getElementById("min").style.transform = `rotateZ(${mm}deg)`;
    document.getElementById("sec").style.transform = `rotateZ(${ss}deg)`;
})