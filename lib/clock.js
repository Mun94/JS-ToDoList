const clock = document.querySelector(".js-clock"),
    h1 = clock.querySelector("h1");

function getDate(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const AM = 'AM'.fontsize(3).sub();
    const PM = 'PM'.fontsize(3).sub();

    return h1.innerHTML = `${hours < 10 ? `${AM}0${hours}` : hours < 13 ? `${AM}${hours}` : hours < 22 ? `${PM}0${hours-12}` : `${PM}${hours-12}`} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`; //AM PM을 아래첨자로 넣기 위해 innerText에서 innerHTML로 수정
}

function init(){
    getDate();
    setInterval(getDate, 1000);
}
init();