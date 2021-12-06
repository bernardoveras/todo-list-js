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
}

inputTask.addEventListener('keypress', function (e) {
  if (e.keyCode === 13)
    createTask(inputTask.value);
});


btnAddTask.addEventListener('click', function (e) {
  createTask(inputTask.value);
});
