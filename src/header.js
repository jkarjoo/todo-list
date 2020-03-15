import { createHTMLElement } from './createElement.js';
import { renderListModal, renderTaskModal } from './modal.js';
import { renderHomePage } from './todoAppManager.js';

const renderListHeader = () => {
    const contentContainer = document.querySelector('.main-content');
    const headerContent = createHTMLElement('div', ['header-content']);
    const h1 = createHTMLElement('h1', ['header'], 'All Lists');
    const newListBtn = createHTMLElement('div', ['newbutton']);
    newListBtn.id = 'newList';

    let contentArray = [h1, newListBtn];
    contentArray.forEach(content => headerContent.appendChild(content));

    contentContainer.appendChild(headerContent);

    const todoList = createHTMLElement('ul', ['todolist']);
    contentContainer.appendChild(todoList);

    // Event Listeners
    newListBtn.addEventListener('click', renderListModal);
}

const renderTaskHeader = (title) => {
    const contentContainer = document.querySelector('.main-content');
    const headerContent = createHTMLElement('div', ['header-content']);
    const backBtn = createHTMLElement('div', ['backbtn']);
    const h1 = createHTMLElement('h1', ['taskheader'], `${title}`);
    const newTaskBtn = createHTMLElement('div', ['newbutton']);
    newTaskBtn.id = 'newTask';
    
    let contentArray = [backBtn, h1, newTaskBtn];
    contentArray.forEach(content => headerContent.appendChild(content));
        
    contentContainer.appendChild(headerContent);
    
    const todoList = createHTMLElement('ul', ['todolist']);
    contentContainer.appendChild(todoList);

    // Event Listeners
    newTaskBtn.addEventListener('click', renderTaskModal);
    backBtn.addEventListener('click', renderHomePage);
}

export { renderListHeader, renderTaskHeader } 