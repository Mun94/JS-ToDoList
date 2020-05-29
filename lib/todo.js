const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDos(e){
    const li = e.target.closest("li");
    li.remove();

    const cleanToDos = toDos.filter(todo => {
        return todo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function paintToDo(text){
    const newId = toDos.length+1;
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const i = document.createElement("i");

    i.className="fas fa-trash";
    delBtn.className = "delBtn";

    delBtn.addEventListener("click", deleteToDos);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    delBtn.appendChild(i);

    const toDoObj ={
        text : text,
        id : newId
    }

    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(e){
    e.preventDefault();
    paintToDo(toDoInput.value);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parseToDos = JSON.parse(loadedToDos)
        parseToDos.forEach(todo => {
            paintToDo(todo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();