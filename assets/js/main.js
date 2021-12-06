const inputTask = document.querySelector('.input-new-task');
const btnAddTask = document.querySelector('.btn-add-task');
const tasks = document.querySelector('.tasks');

function createTaskItem() {
  const li = document.createElement('li');

  return li;
}

function createTask(task) {
  const li = createTaskItem();

  li.innerText = task;
  tasks.appendChild(li);
}


btnAddTask.addEventListener('click', function (e) {
  if (!inputTask.value) return;

  createTask(inputTask.value);
});
