const  addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');


const generateTemplate=todo=>
{
    const html=` <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fa-solid fa-trash delete"></i>
    </li>`;
list.innerHTML+=html;

}


addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    // console.log(todo);
  if(todo.length)
  {
    generateTemplate(todo);
    addForm.reset();
  }
})

list.addEventListener('click',e=>{
  if(e.target.classList.contains('delete'))
  {
    e.target.parentElement.remove();
  }
})

const filterToDos= turn=>
{
    Array.from(list.children).filter(todo=> !todo.textContent.includes(turn))
    .forEach(todo=>todo.classList.add('filtered'));
        
}

search.addEventListener('keyup',()=>{
    const turn=search.value.trim().toLowerCase();
    // console.log(turn);

    filterToDos(turn);

})