import { createHTMLElement } from './createElement.js';
import { renderDeleteModal } from './modal.js';
import { renderTaskPage } from './todoAppManager.js';

function List (title, id) {
    this.taskList = [];
    this.title = title
    this.id = id;
};

const renderListItem = (title, id) => {
    const contentContainer = document.querySelector('.main-content');
    const todoList = document.querySelector('.todolist');
    const list = createHTMLElement('li', ['list']);
    list.dataset.listId = id;
    const span = createHTMLElement('span', [], `${title}`);
    const buttons = createHTMLElement('div', ['buttons']);
    const deleteBtn = createHTMLElement('div', ['deletebtn']);
    deleteBtn.dataset.listDeleteId = id;
    
    const buttonContent = [deleteBtn];
    buttonContent.forEach(button => buttons.appendChild(button));
    
    const contentArray2 = [span, buttons];
    contentArray2.forEach(content => list.appendChild(content));

    todoList.appendChild(list);
    
    contentContainer.appendChild(todoList);

    // Event Listeners
    list.addEventListener('click', function(e) {
        const { target } = e;
        renderTaskPage(target.dataset.listId);
    });
    deleteBtn.addEventListener('click', function(e) {
        const { target } = e;
        (target.dataset.listDeleteId) ? renderDeleteModal(target.dataset.listDeleteId, 'list') : renderDeleteModal(target.dataset.taskDeleteId, 'task');
        event.stopPropagation();
    });
}

export { List, renderListItem }