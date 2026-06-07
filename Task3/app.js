const inputTask = document.getElementById('inputTask');
const addNoteInput = document.getElementById('addNote');
const pushNote = document.getElementById('pushNote');
const pushComplete = document.getElementById('pushComplete');
const completedNumber = document.getElementById('completedNumber');

let activeTasks = [];
let completedTasks = [];

function loadTasks() {
  const localActive = localStorage.getItem('taskSame');
  const localCompleted = localStorage.getItem('completedTask');

  activeTasks = localActive ? JSON.parse(localActive) : [];
  completedTasks = localCompleted ? JSON.parse(localCompleted) : [];

  renderLists();
}

function saveTasks() {
  localStorage.setItem('taskSame', JSON.stringify(activeTasks));
  localStorage.setItem('completedTask', JSON.stringify(completedTasks));
}

function getTaskData(item) {
  if (typeof item === 'string') {
    return { text: item, addedAt: '', completedAt: '' };
  }
  if (Array.isArray(item)) {
    return { text: item[0] || '', addedAt: '', completedAt: '' };
  }
  return {
    text: item.text || '',
    addedAt: item.addedAt || '',
    completedAt: item.completedAt || ''
  };
}

function getFormattedDate() {
  const now = new Date();
  return now.toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function renderLists() {
  let activeHtml = '';
  activeTasks.forEach((task, index) => {
    const data = getTaskData(task);
    activeHtml += `
      <div class="todo-item">
        <div class="task-info">
          <span class="task-text">${data.text}</span>
          ${data.addedAt ? `<span class="task-time">Added: ${data.addedAt}</span>` : ''}
        </div>
        <div class="button-group">
          <button onclick="completeTask(${index})" class="btn-icon btn-check" title="Complete">✓</button>
          <button onclick="editTask(${index})" class="btn-icon btn-edit" title="Edit">✎</button>
          <button onclick="deleteActive(${index})" class="btn-icon btn-delete" title="Delete">✕</button>
        </div>
      </div>
    `;
  });
  
  pushNote.innerHTML = activeHtml || '<div class="empty-message">No active tasks</div>';

  let completedHtml = '';
  completedTasks.forEach((task, index) => {
    const data = getTaskData(task);
    completedHtml += `
      <div class="todo-item">
        <div class="task-info">
          <span class="task-text">${data.text}</span>
          <span class="task-time">
            ${data.addedAt ? `Added: ${data.addedAt}` : ''}
            ${data.completedAt ? ` | Completed: ${data.completedAt}` : ''}
          </span>
        </div>
        <div class="button-group">
          <button onclick="editCompleted(${index})" class="btn-icon btn-edit" title="Edit">✎</button>
          <button onclick="deleteCompleted(${index})" class="btn-icon btn-delete" title="Delete Permanent">✕</button>
        </div>
      </div>
    `;
  });

  pushComplete.innerHTML = completedHtml || '<div class="empty-message">No completed tasks yet</div>';
  completedNumber.textContent = completedTasks.length;
}

inputTask.addEventListener('click', () => {
  const taskValue = addNoteInput.value.trim();
  if (taskValue) {
    activeTasks.push({
      text: taskValue,
      addedAt: getFormattedDate(),
      completedAt: ''
    });
    saveTasks();
    addNoteInput.value = '';
    renderLists();
  }
});

addNoteInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    inputTask.click();
  }
});

window.completeTask = function(index) {
  const item = activeTasks.splice(index, 1)[0];
  const data = getTaskData(item);
  data.completedAt = getFormattedDate();
  completedTasks.push(data);
  saveTasks();
  renderLists();
};

window.editTask = function(index) {
  const currentData = getTaskData(activeTasks[index]);
  const newText = prompt('Edit your task:', currentData.text);
  if (newText !== null && newText.trim() !== '') {
    if (typeof activeTasks[index] === 'string' || Array.isArray(activeTasks[index])) {
      activeTasks[index] = {
        text: newText.trim(),
        addedAt: getFormattedDate(),
        completedAt: ''
      };
    } else {
      activeTasks[index].text = newText.trim();
    }
    saveTasks();
    renderLists();
  }
};

window.editCompleted = function(index) {
  const currentData = getTaskData(completedTasks[index]);
  const newText = prompt('Edit your task:', currentData.text);
  if (newText !== null && newText.trim() !== '') {
    if (typeof completedTasks[index] === 'string' || Array.isArray(completedTasks[index])) {
      completedTasks[index] = {
        text: newText.trim(),
        addedAt: '',
        completedAt: getFormattedDate()
      };
    } else {
      completedTasks[index].text = newText.trim();
    }
    saveTasks();
    renderLists();
  }
};

window.deleteActive = function(index) {
  activeTasks.splice(index, 1);
  saveTasks();
  renderLists();
};

window.deleteCompleted = function(index) {
  completedTasks.splice(index, 1);
  saveTasks();
  renderLists();
};

document.addEventListener('DOMContentLoaded', loadTasks);