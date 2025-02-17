let inputTask= document.getElementById('add-task-input');
const addTaskButton =document.getElementById('add-button');

function createList(){
  const checkbox= document.createElement('input');
  const saveTaskContainer =document.createElement('div');
  const editButton= document.createElement('button');
  const deleteButton= document.createElement('button');
  checkbox.id ='checkbox';
  checkbox.type ='checkbox';
  saveTaskContainer.id= 'saved-tasks';
  editButton.id='edit-button';
  deleteButton.id='delete-button';
  editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

  deleteButton.addEventListener('click', function(){
    saveTaskContainer.remove();
  });
 
  editButton.addEventListener('click', function(){
    saveTaskContainer.innerText += " "+ prompt('Enter Text: ');
   });
   
   saveTaskContainer.appendChild(checkbox);
   saveTaskContainer.appendChild(editButton);
   saveTaskContainer.appendChild(deleteButton);
 
   document.querySelector('.saved-list').appendChild(saveTaskContainer);
};

addTaskButton.addEventListener('click', function(){
  createList();
  const inputTask = document.getElementById('add-task-input');
  const saveTaskContainer = document.querySelector('#saved-tasks');
  saveTaskContainer.innerText= inputTask.value;
  inputTask.value='';
});