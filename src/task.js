import { createHTMLElement } from './createElement.js';
import { renderDeleteModal, renderEditModal } from './modal.js';

function Task (title, id, date, completed) {
    this.id = id;
    this.completed = false;
    return { title, id, date, completed };
};

const renderTaskItem = (title, id, date) => {
    const contentContainer = document.querySelector('.main-content');
    const todoList = document.querySelector('.todolist');
    const task = createHTMLElement('li', ['task']);
    task.dataset.taskId = id;
    const radio = createHTMLElement('div', ['radio']);
    const span = createHTMLElement('span', [], `${title}`);
    const dueDate = createHTMLElement('span', ['date'], `Due ${date}`);
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

    // Event Listeners
    editBtn.addEventListener('click', function(e) {
        renderEditModal(e.target.dataset.taskEditId);
    });
    deleteBtn.addEventListener('click', function(e) {
        const { target } = e;
        (target.dataset.listDeleteId) ? renderDeleteModal(target.dataset.listDeleteId, 'list') : renderDeleteModal(target.dataset.taskDeleteId, 'task');
        event.stopPropagation();
    });
}

export { Task, renderTaskItem }