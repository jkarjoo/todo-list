import { createHTMLElement } from './createElement.js';

const renderListHeader = () => {
    const contentContainer = document.querySelector('.main-content');
    const headerContent = createHTMLElement('div', ['header-content']);
    const h1 = createHTMLElement('h1', ['header'], 'All Lists');
    const newListBtn = createHTMLElement('div', ['newlist']);

    let contentArray = [h1, newListBtn];
    contentArray.forEach(content => headerContent.appendChild(content));
    
    contentContainer.appendChild(headerContent);

    const todoList = createHTMLElement('ul', ['todolist']);
    contentContainer.appendChild(todoList);
}

export { renderListHeader }