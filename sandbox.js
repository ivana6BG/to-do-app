const list = document.querySelector(".todos");
const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");

const addListItem = (todo) => {
  list.innerHTML += `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let todo = addForm.add.value.trim();
  if (todo.length) {
    addListItem(todo);
    addForm.reset();
    addForm.querySelector("p").classList.add("d-none");
    if (list.querySelector(".done")) list.querySelector(".done").remove();
  } else {
    addForm.querySelector("p").classList.remove("d-none");
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.remove();

    if (list.children.length === 0) {
      list.innerHTML = "<h1 class = 'text-center done'>No more to dos!!!</h1>";
    }
  }
});

const filterTodos = (term) => {
  Array.from(list.children).forEach((todo) => {
    if (todo.textContent.toLowerCase().includes(term))
      todo.classList.remove("d-none");
    else todo.classList.add("d-none");
  });
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
