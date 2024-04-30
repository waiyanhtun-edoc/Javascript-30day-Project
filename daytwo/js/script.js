const hourView = document.querySelector('.hour');
const minuteView = document.querySelector('.minute');
const secondView = document.querySelector('.second');
const digitalTimeView = document.querySelector('.digital-time');

function setDate(){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const digital = now.toLocaleTimeString("en-us",{
        hour12:true,
        
    })

    const secondDeg = ((second / 60 ) * 360);
    secondView.style.transform = `rotate(${secondDeg}deg)`;

    const minuteDeg = ((minute / 60) * 360);
    minuteView.style.transform = `rotate(${minuteDeg}deg)`;

    const hourDeg = ((hour / 12) * 360);
    hourView.style.transform = `rotate(${hourDeg}deg)`;

    digitalTimeView.textContent = digital;
    
}
setInterval(setDate,1000);