import { createHTMLElement } from './createElement.js';

function Task (title, id, dueDate, completed) {
    this.id = id;
    this.completed = false;
    return { title, id, dueDate, completed };
};

const renderTaskItem = (title, id, date) => {
    const contentContainer = document.querySelector('.main-content');
    const todoList = document.querySelector('.todolist');
    const task = createHTMLElement('li', ['task']);
    task.dataset.taskId = `${id}`;
    const radio = createHTMLElement('div', ['radio']);
    const span = createHTMLElement('span', [], `${title}`);
    const dueDate = createHTMLElement('span', ['date'], `Due ${date}`);
    const buttons = createHTMLElement('div', ['buttons']);
    const editBtn = createHTMLElement('div', ['editbtn']);
    const deleteBtn = createHTMLElement('div', ['deletebtn']);
    
    const buttonContent = [editBtn, deleteBtn];
    buttonContent.forEach(button => buttons.appendChild(button));
    
    const contentArray2 = [radio, span, dueDate, buttons];
    contentArray2.forEach(content => task.appendChild(content));
    
    todoList.appendChild(task);
    
    contentContainer.appendChild(todoList);
}

export { Task, renderTaskItem }