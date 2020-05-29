const clock = document.querySelector(".js-clock"),
    h1 = clock.querySelector("h1");

function getDate(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    return h1.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getDate();
    setInterval(getDate, 1000);
}
init();