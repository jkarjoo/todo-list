import { createHTMLElement } from './createElement.js';

function List (title, id) {
    this.taskList = [];
    this.title = title
    this.id = id;
};

const renderListItem = (title, id) => {
    const contentContainer = document.querySelector('.main-content');
    const todoList = document.querySelector('.todolist');
    const list = createHTMLElement('li', ['list']);
    list.dataset.listId = `${id}`;
    const span = createHTMLElement('span', [], `${title}`);
    const buttons = createHTMLElement('div', ['buttons']);
    const editBtn = createHTMLElement('div', ['editbtn']);
    const deleteBtn = createHTMLElement('div', ['deletebtn']);
    
    const buttonContent = [editBtn, deleteBtn];
    buttonContent.forEach(button => buttons.appendChild(button));
    
    const contentArray2 = [span, buttons];
    contentArray2.forEach(content => list.appendChild(content));

    todoList.appendChild(list);
    
    contentContainer.appendChild(todoList);
}

export { List, renderListItem }