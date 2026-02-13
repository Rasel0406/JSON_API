const lOadTodo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then((response) => response.json())
        .then((data) => loadUser(data));
};
const loadUser = (todo) => {
    const todoContainer = document.getElementById("todo_container");
    todoContainer.innerHTML = "";
    todo.forEach((todoList) => {
        const div = document.createElement("div");
        div.innerHTML = `
      <div class="todoList">
                <p>${todoList.completed == true ? "<i class=\"fa-solid fa-square-check\"></i>" : "<i class=\"fa-regular fa-square-check\"></i>"}
    </p >
    <h3>${todoList.title}</h3>
            </div >
    `
    todoContainer.appendChild(div);
  })




}
lOadTodo();