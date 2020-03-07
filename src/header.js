import { createHTMLElement } from './createElement.js';

const renderHeader = (type, listName) => {
    const contentContainer = document.querySelector('.main-content');
    const headerContent = createHTMLElement('div', ['header-content']);
    if (type === 'task') {
        const backBtn = createHTMLElement('div', ['backbtn']);
        const h1 = createHTMLElement('h1', ['taskheader'], `${listName}`);
        const newTaskBtn = createHTMLElement('div', ['newbutton']);
        newTaskBtn.id = 'newTask';
    
        let contentArray = [backBtn, h1, newTaskBtn];
        contentArray.forEach(content => headerContent.appendChild(content));
        
        contentContainer.appendChild(headerContent);
    
        const todoList = createHTMLElement('ul', ['todolist']);
        contentContainer.appendChild(todoList);
    }
    else if (type === 'list') {
        const h1 = createHTMLElement('h1', ['header'], 'All Lists');
        const newListBtn = createHTMLElement('div', ['newbutton']);
        newListBtn.id = 'newList';

        let contentArray = [h1, newListBtn];
        contentArray.forEach(content => headerContent.appendChild(content));
    
        contentContainer.appendChild(headerContent);

        const todoList = createHTMLElement('ul', ['todolist']);
        contentContainer.appendChild(todoList);
    }
}

export { renderHeader } 