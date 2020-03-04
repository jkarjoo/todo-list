import { createHTMLElement } from './createElement.js';

const renderListModal = () => {
    const newlistContainer = createHTMLElement('div', ['newlist-container']);
    const newlistModal = createHTMLElement('div', ['newlist-modal']);
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

export { renderListModal }