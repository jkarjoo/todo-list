import { createHTMLElement } from './createElement.js';

const renderTaskModal = () => {
    const newtaskContainer = createHTMLElement('div', ['newtask-container']);
    const newtaskModal = createHTMLElement('div', ['newtask-modal']);
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

export { renderTaskModal }