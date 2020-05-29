const grid = document.querySelector("#grid")

const IMG_NUM = 3;
const img = new Image();

function background(){
    const num = Math.floor(Math.random()*IMG_NUM);
    img.src = `./img/${num+1}.jpg`;
    img.classList.add("bgImage");
    grid.appendChild(img);
}

function init(){
    background()
    setInterval(background, 5500);
}

init();