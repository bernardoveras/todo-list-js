const inputTask = document.querySelector('.input-new-task');
const btnAddTask = document.querySelector('.btn-add-task');
const tasks = document.querySelector('.tasks');

function createTaskItem() {
  const li = document.createElement('li');

  return li;
}

function createTask(task) {
  if (!task) return;

  const li = createTaskItem();

  li.innerText = task;
  tasks.appendChild(li);
  createDeleteButton(li);
  clearInput();
}

function clearInput() {
  inputTask.value = '';
  inputTask.focus();
}

function createDeleteButton(li){
  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn-delete-task';
  deleteButton.innerText = 'Apagar';

  li.appendChild(deleteButton);
}

inputTask.addEventListener('keypress', function (e) {
  if (e.keyCode === 13)
    createTask(inputTask.value);
});


btnAddTask.addEventListener('click', function (e) {
  createTask(inputTask.value);
});
