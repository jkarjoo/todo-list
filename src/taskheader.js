import { createHTMLElement } from './createElement.js';

const renderTaskHeader = (listName) => {
    const contentContainer = document.querySelector('.main-content');
    const headerContent = createHTMLElement('div', ['header-content']);
    const backBtn = createHTMLElement('div', ['backbtn']);
    const h1 = createHTMLElement('h1', ['taskheader'], `${listName}`);
    const newListBtn = createHTMLElement('div', ['newtask']);

    let contentArray = [backBtn, h1, newListBtn];
    contentArray.forEach(content => headerContent.appendChild(content));
    
    contentContainer.appendChild(headerContent);

    const todoList = createHTMLElement('ul', ['todolist']);
    contentContainer.appendChild(todoList);
}

export { renderTaskHeader }