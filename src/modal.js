import { createHTMLElement } from './createElement.js';

const renderModal = (type) => {
    if (type === 'list') {
        const newlistContainer = createHTMLElement('div', ['modal-container']);
        const newlistModal = createHTMLElement('div', ['modal']);
        const form = createHTMLElement('form');
        form.setAttribute('action', 'javascript:void(0)');
        const span = createHTMLElement('span', ['newlisthead'], 'New List');
        const label = createHTMLElement('label', [], 'Title');
        label.setAttribute('for', 'list-title');
        const input = createHTMLElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'list-title');
        input.setAttribute('placeholder', 'Work');
        const modalButtons = createHTMLElement('div', ['modal-buttons']);
        const createBtn = createHTMLElement('button', ['create-list'], 'Create');
        const cancelBtn = createHTMLElement('button', ['cancel-list'], 'Cancel');

        const buttonContent = [createBtn, cancelBtn];
        buttonContent.forEach(button => modalButtons.appendChild(button));

        const innerContent = [span, label, input, modalButtons];
        innerContent.forEach(item => form.appendChild(item));

        newlistModal.appendChild(form);
        newlistContainer.appendChild(newlistModal);

        document.body.appendChild(newlistContainer);
    }

    else if (type === 'task') {
        const newtaskContainer = createHTMLElement('div', ['modal-container']);
        const newtaskModal = createHTMLElement('div', ['modal']);
        const form = createHTMLElement('form');
        form.setAttribute('action', 'javascript:void(0)');
        const span = createHTMLElement('span', ['newtaskhead'], 'New Task');
        const label = createHTMLElement('label', [], 'Title');
        label.setAttribute('for', 'task-title');
        const input = createHTMLElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'task-title');
        input.setAttribute('placeholder', 'Do Laundry');
        const duelabel = createHTMLElement('label', [], 'Due Date');
        duelabel.setAttribute('for', 'duedate');
        const dueinput = createHTMLElement('input');
        dueinput.setAttribute('type', 'date');
        dueinput.setAttribute('name', 'duedate');
        const modalButtons = createHTMLElement('div', ['modal-buttons']);
        const createBtn = createHTMLElement('button', ['create-task'], 'Create');
        const cancelBtn = createHTMLElement('button', ['cancel-task'], 'Cancel');
    
        const buttonContent = [createBtn, cancelBtn];
        buttonContent.forEach(button => modalButtons.appendChild(button));
    
        const innerContent = [span, label, input, duelabel, dueinput, modalButtons];
        innerContent.forEach(item => form.appendChild(item));
    
        newtaskModal.appendChild(form);
        newtaskContainer.appendChild(newtaskModal);
    
        document.body.appendChild(newtaskContainer);
    }

    else if (type === 'delete') {
        const deleteContainer = createHTMLElement('div', ['modal-container']);
        const deleteModal = createHTMLElement('div', ['modal']);
        const form = createHTMLElement('form');
        form.setAttribute('action', 'javascript:void(0)');
        const warningContainer = createHTMLElement('div', ['warning-container']);
        const warningIcon = createHTMLElement('div', ['warning-icon']);
        warningContainer.appendChild(warningIcon);
        const span1 = createHTMLElement('span', ['warning-header'], 'Are you sure?');
        const span2 = createHTMLElement('span', ['warning-body'], 'Do you really want to delete this record? This process cannot be undone.');
        const modalButtons = createHTMLElement('div', ['modal-buttons']);
        const deleteBtn = createHTMLElement('button', ['delete'], 'Delete');
        const cancelBtn = createHTMLElement('button', ['cancel-delete'], 'Cancel');
    
        const buttonContent = [deleteBtn, cancelBtn];
        buttonContent.forEach(button => modalButtons.appendChild(button));
    
        const innerContent = [warningContainer, span1, span2, modalButtons];
        innerContent.forEach(item => form.appendChild(item));
    
        deleteModal.appendChild(form);
        deleteContainer.appendChild(deleteModal);

        document.body.appendChild(deleteContainer);
    }
}

export { renderModal }