updateClock = () => {
    const timeNow = new Date();
    const hours = timeNow.getHours().toString().padStart(2, 0);
    const minutes = timeNow.getMinutes().toString().padStart(2, 0);
    const seconds = timeNow.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`

    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);