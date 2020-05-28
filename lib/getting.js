const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
const h4 = document.querySelector(".js-getting");

function handleSubmit(e){
    e.preventDefault();
    localStorage.setItem("currentUser", input.value)
    paintGreeting(input.value);
}

function askForName(){
    form.classList.add("SHOWING_CN");
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(currentUser){
    form.classList.remove("SHOWING_CN");
    h4.classList.add("SHOWING_CN");
    h4.innerText = `Hello ${currentUser}`;
}

function loadName(){
    const currentUser = localStorage.getItem("currentUser");
    if(currentUser === null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();