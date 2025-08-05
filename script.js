document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const taskList = document.getElementById('taskList');

  const li = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.onclick = () => {
    li.classList.toggle('completed'); // toggle completed
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => {
    li.remove(); // remove task
  };

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = ''; // clear input
}
