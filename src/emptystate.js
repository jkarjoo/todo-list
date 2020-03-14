import { createHTMLElement } from './createElement.js';

const renderEmptyState = (type) => {
    const todolist = document.querySelector('.todolist');

    const emptyContainer = createHTMLElement('div', ['empty-state']);
    const image = createHTMLElement('img', ['empty-icon']);
    image.src = 'images/empty.svg';
    const p1 = createHTMLElement('p', ['empty-state-title'], `No ${type}s`);
    const p2 = createHTMLElement('p', ['empty-state-description'], `Tap the + button to create a ${type}!`);

    const content = [image, p1, p2];
    content.forEach(item => emptyContainer.appendChild(item));
    
    todolist.appendChild(emptyContainer);
}

const removeEmptyState = () => {
    const emptyContainer = document.querySelector('.empty-state');
    if (emptyContainer) {
       emptyContainer.remove(); 
    }
}

export { renderEmptyState, removeEmptyState }