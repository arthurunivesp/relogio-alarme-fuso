let timeZone = 'America/Sao_Paulo';
let alarmTime = null;
const catSound = document.getElementById('catSound');

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date(new Date().toLocaleString("en-US", { timeZone }));
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;

    if (alarmTime && `${hours}:${minutes}` === alarmTime) {
        catSound.play();
        alarmTime = null; // Reset the alarm
    }
}

function setTimeZone(zone) {
    timeZone = zone;
    updateTime();
}

function setAlarm() {
    const alarmInput = document.getElementById('alarmTime');
    alarmTime = alarmInput.value;
    alert(`Alarme definido para ${alarmTime}`);
}

setInterval(updateTime, 1000);
updateTime();