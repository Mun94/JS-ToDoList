const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
const h4 = document.querySelector(".js-getting");
const name = document.querySelector(".name");

function handleSubmit(e){
    e.preventDefault();
    localStorage.setItem("currentUser", input.value)
    paintGreeting(input.value);
}

function update(e){
    localStorage.removeItem("currentUser");
    const target = e.target.closest("h4")
    target.remove();
    form.classList.add("SHOWING_CN");
    h4.classList.remove("SHOWING_CN");
    
    form.addEventListener("submit", updateUserName)
}

function updateUserName(e){
    e.preventDefault();
    localStorage.setItem("currentUser", input.value)
    paintGreeting(input.value);

    const update = document.createElement("h4");
    name.appendChild(update);
    update.className = "SHOWING_CN";
    update.innerText = `Hello ${input.value}`;

    const logout = document.createElement("button")
    logout.innerText = "logout";
    update.appendChild(logout);
    logout.addEventListener("click", update2);
}

function update2(e){
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

function paintGreeting(currentUser){
    form.classList.remove("SHOWING_CN");
    h4.classList.add("SHOWING_CN");
    h4.innerText = `Hello ${currentUser}`;

    const logout = document.createElement("button")
    logout.innerText = "logout";
    h4.appendChild(logout);
    logout.addEventListener("click", update);
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