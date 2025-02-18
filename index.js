let inputTask= document.getElementById('add-task-input');
const addTaskButton =document.getElementById('add-button');

function createList(taskText){
  const checkbox= document.createElement('input');
  const savedList= document.createElement('div');
  const saveTaskContainer =document.createElement('div');
  const editButton= document.createElement('button');
  const deleteButton= document.createElement('button');
  
  saveTaskContainer.classList.add('saved-tasks');
  savedList.classList.add('saved-list');
  checkbox.id ='checkbox';
  checkbox.type ='checkbox';
  editButton.id='edit-button';
  deleteButton.id='delete-button';

  editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

  saveTaskContainer.innerText = taskText;
  
  deleteButton.addEventListener('click', function(){
    savedList.remove();
  });
 
  editButton.addEventListener('click', function(){
    let newText=  prompt('Enter Text: ');
    if(newText){
    saveTaskContainer.innerText = newText;
    }
   });
    
   savedList.appendChild(checkbox);
   savedList.appendChild(saveTaskContainer);
   savedList.appendChild(editButton);
   savedList.appendChild(deleteButton);
 
   document.body.appendChild(savedList);

};

   addTaskButton.addEventListener('click', function () {
    if (inputTask.value.trim() !== ''){
     createList(inputTask.value);
     inputTask.value = '';
   }
   });
