import { createHTMLElement } from './createElement.js';

const renderTaskHeader = () => {
    const contentContainer = document.querySelector('.main-content');
    const headerContent = createHTMLElement('div', ['header-content']);
    const backBtn = createHTMLElement('div', ['backbtn']);
    const h1 = createHTMLElement('h1', ['header'], 'All Tasks');
    const newListBtn = createHTMLElement('div', ['newtask']);

    let contentArray = [backBtn, h1, newListBtn];
    contentArray.forEach(content => headerContent.appendChild(content));
    
    contentContainer.appendChild(headerContent);

    const todoList = createHTMLElement('ul', ['todolist']);
    contentContainer.appendChild(todoList);
}

export { renderTaskHeader }