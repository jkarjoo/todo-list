import { createHTMLElement } from './createElement.js';

    const renderTaskItem = (title, date) => {
        const contentContainer = document.querySelector('.main-content');
        const todoList = document.querySelector('.todolist');
        const list = createHTMLElement('li', ['task']);
        const radio = createHTMLElement('div', ['radio']);
        const span = createHTMLElement('span', [], `${title}`);
        const dueDate = createHTMLElement('span', ['date'], `Due ${date}`);
        const buttons = createHTMLElement('div', ['buttons']);
        const editBtn = createHTMLElement('div', ['editbtn']);
        const deleteBtn = createHTMLElement('div', ['deletebtn']);
    
        const buttonContent = [editBtn, deleteBtn];
        buttonContent.forEach(button => buttons.appendChild(button));
    
        const contentArray2 = [radio, span, dueDate, buttons];
        contentArray2.forEach(content => list.appendChild(content));
    
        todoList.appendChild(list);
    
        contentContainer.appendChild(todoList);
}

export { renderTaskItem }