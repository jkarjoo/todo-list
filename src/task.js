import { createHTMLElement } from './createElement.js';
import { renderDeleteModal, renderEditModal } from './modal.js';
import { completeTask, checkTask } from './helperfunctions.js';
import { formatDate } from './datefunctions.js';

function Task (title, id, date, completed) {
    this.id = id;
    this.completed = false;
    return { title, id, date, completed };
};

const renderTaskItem = (title, id, date, completed) => {
    date = formatDate(date);
    const contentContainer = document.querySelector('.main-content');
    const todoList = document.querySelector('.todolist');
    const task = createHTMLElement('li', ['task']);
    task.dataset.taskId = id;
    const radio = createHTMLElement('div', ['radio']);
    radio.dataset.radioId = id;
    const span = createHTMLElement('span', [], `${title}`);
    const dueDate = createHTMLElement('span', ['date'], `Due ${date}`);
    dueDate.dataset.dateId = id;
    const buttons = createHTMLElement('div', ['buttons']);
    const editBtn = createHTMLElement('div', ['editbtn']);
    editBtn.dataset.taskEditId = id;
    const deleteBtn = createHTMLElement('div', ['deletebtn']);
    deleteBtn.dataset.taskDeleteId = id;
    
    const buttonContent = [editBtn, deleteBtn];
    buttonContent.forEach(button => buttons.appendChild(button));
    
    const contentArray2 = [radio, span, dueDate, buttons];
    contentArray2.forEach(content => task.appendChild(content));
    
    todoList.appendChild(task);
    
    contentContainer.appendChild(todoList);

    if (completed) {
        checkTask(id);
    }
    // Event Listeners
    radio.addEventListener('click', function(e) {
        completeTask(e.target.dataset.radioId);
    });
    editBtn.addEventListener('click', function(e) {
        renderEditModal(e.target.dataset.taskEditId);
        event.stopPropagation();
    });
    deleteBtn.addEventListener('click', function(e) {
        const { target } = e;
        (target.dataset.listDeleteId) ? renderDeleteModal(target.dataset.listDeleteId, 'list') : renderDeleteModal(target.dataset.taskDeleteId, 'task');
        event.stopPropagation();
    });
}

export { Task, renderTaskItem }