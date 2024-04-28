const hourView = document.querySelector('.hour');
const minusView = document.querySelector('.minute');
const secondView = document.querySelector('.second');
const digitalView = document.querySelector('.digital-time');



function setDate(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const digitalTime = now.toLocaleTimeString('eng',{
        hour24:true,
        hour: "numeric",
        minute:"numeric",
        second:"numeric",
    });

    const secondsDeg = ((seconds / 60 ) * 360);
    const minutesDeg = ((minutes / 60 ) * 360);
    const hoursDeg = ((hours / 12 ) * 360);

    secondView.style.transform = `rotate(${secondsDeg}deg)`;
    minusView.style.transform = `rotate(${minutesDeg}deg)`;
    hourView.style.transform = `rotate(${hoursDeg}deg)`;
    digitalView.textContent = digitalTime;

}

setInterval(setDate,1000);