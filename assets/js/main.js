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
  saveTask();
  clearInput();
}

function clearInput() {
  inputTask.value = '';
  inputTask.focus();
}

function createDeleteButton(li) {
  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn-delete-task';
  deleteButton.innerText = 'Excluir';

  li.appendChild(deleteButton);
}

function saveTask() {
  const liTasks = tasks.querySelectorAll('li');
  const taskList = [];

  for (let task of liTasks) {
    let textTask = task.innerText;
    textTask = textTask.replace('Excluir', '').trim();
    taskList.push(textTask);
  }

  const taskJson = JSON.stringify(taskList);

  localStorage.setItem('tasks', taskJson);
}

function getLocalTasks() {
  const tasks = localStorage.getItem('tasks');

  const taskList = JSON.parse(tasks);

  for(let task of taskList){
    createTask(task);
  }
}

inputTask.addEventListener('keypress', function (e) {
  if (e.keyCode === 13)
    createTask(inputTask.value);
});

btnAddTask.addEventListener('click', function (e) {
  createTask(inputTask.value);
});

document.addEventListener('click', function (e) {
  const element = e.target;

  if (element.className === 'btn-delete-task') element.parentElement.remove();

  saveTask();
});

getLocalTasks();