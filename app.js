const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {

    const html = `<li class="list-group-item d-flex justify-content-between align-items-center"><span>${todo}</span><i class="far fa-trash-alt delete"></i></li>`;
    list.innerHTML += html;

};

    // Add New Todos

addForm.addEventListener('submit' , e => {

    // trim function removes extra spaces

    e.preventDefault();
    const todo = addForm.add.value.trim();

    
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }


});

    // Delete Todos

list.addEventListener('click' , e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

    // Keyup event

const filterTodos = (term) => {
    
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtred'));


    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtred'));

};


search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});