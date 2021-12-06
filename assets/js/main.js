const inputTask = document.querySelector('.input-new-task');
const btnAddTask = document.querySelector('.btn-add-task');
const tasks = document.querySelector('.tasks');

function createTask(task) {
  console.log(task);
}

btnAddTask.addEventListener('click', function (e) {
  if (!inputTask.value) return;

  createTask(inputTask.value);

});
