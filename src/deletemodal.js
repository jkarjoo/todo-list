import { createHTMLElement } from './createElement.js';

const renderDeleteModal = () => {
    const deleteContainer = createHTMLElement('div', ['delete-container']);
    const deleteModal = createHTMLElement('div', ['delete-modal']);
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

export { renderDeleteModal }
