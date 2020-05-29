const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
const h4 = document.querySelector(".js-getting");
const name = document.querySelector(".name");

function handleSubmit(e){
    e.preventDefault();
    localStorage.setItem("currentUser", input.value)
    paintGreeting(input.value);
}

function penEmoticon(text){
    const logout = document.createElement("button")
    logout.className = "logoutBtn"
    text.appendChild(logout);

    const i = document.createElement("i");
    i.className = "fas fa-pen";
    logout.appendChild(i);

    logout.addEventListener("click", update);
}

function updateUserName(e){
    e.preventDefault();
    localStorage.setItem("currentUser", input.value)
    paintGreeting(input.value);

    const update = document.createElement("h4");
    name.appendChild(update);
    update.className = "SHOWING_CN";
    update.innerText = `Hello ${input.value}`;

    penEmoticon(update);
}

function paintGreeting(currentUser){
    form.classList.remove("SHOWING_CN");
    h4.classList.add("SHOWING_CN");
    h4.innerText = `Hello ${currentUser}`;

    penEmoticon(h4);
}

function update(e){
    localStorage.removeItem("currentUser");
    const target = e.target.closest("h4")
    target.remove();
    form.classList.add("SHOWING_CN");
    h4.classList.remove("SHOWING_CN");
    
    form.addEventListener("submit", updateUserName)
}

function askForName(){
    form.classList.add("SHOWING_CN");
    form.addEventListener("submit", handleSubmit);
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