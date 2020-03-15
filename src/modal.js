import { createHTMLElement } from './createElement.js';
import { listItems, editTaskItem, currentListIndex, createNewListItem, createNewTaskItem, removeItem } from './todoAppManager.js';

let listPlaceHolders = ['Home', 'Shopping', 'Work', 'School', 'Groceries', 'Movies to watch', 'Places to eat'];
let taskPlaceHolders = ['Complete Programming Assignment', 'Go to the Gym', 'Grab lunch at Chick-Fil-A', 'Finish toDoList Project', 'Finish Research Paper', 'Grab Milk from the Store', 'Do Laundry', 'Do Dishes', 'Complete daily coding challenges'];

const renderListModal = () => {
    const modal = createHTMLElement('div', ['modal-container']);
    modal.dataset.modalType = 'list';
    const newlistModal = createHTMLElement('div', ['modal']);
    const form = createHTMLElement('form');
    form.setAttribute('action', 'javascript:void(0)');
    const span = createHTMLElement('span', ['newlisthead'], 'New List');
    const label = createHTMLElement('label', [], 'Title');
    label.setAttribute('for', 'list-title');
    const input = createHTMLElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'list-title');
    input.setAttribute('placeholder', listPlaceHolders[Math.floor(Math.random() * listPlaceHolders.length)]);
    const modalButtons = createHTMLElement('div', ['modal-buttons']);
    const createBtn = createHTMLElement('button', ['create-list'], 'Create');
    const cancelBtn = createHTMLElement('button', ['cancel'], 'Cancel');

    const buttonContent = [createBtn, cancelBtn];
    buttonContent.forEach(button => modalButtons.appendChild(button));

    const innerContent = [span, label, input, modalButtons];
    innerContent.forEach(item => form.appendChild(item));

    newlistModal.appendChild(form);
    modal.appendChild(newlistModal);

    document.body.appendChild(modal);


    newlistModal.style.transform = "translateY(400px)";

    // Event Listeners
    createBtn.addEventListener('click', createNewListItem);
    cancelBtn.addEventListener('click', closeModal);
}

const renderTaskModal = () => {
    const modal = createHTMLElement('div', ['modal-container']);
    modal.dataset.modalType = 'task';
    const editModal = createHTMLElement('div', ['modal']);
    const form = createHTMLElement('form');
    form.setAttribute('action', 'javascript:void(0)');
    const span = createHTMLElement('span', ['newtaskhead'], 'New Task');
    const label = createHTMLElement('label', [], 'Title');
    label.setAttribute('for', 'task-title');
    const input = createHTMLElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'task-title');
    input.setAttribute('placeholder', taskPlaceHolders[Math.floor(Math.random() * taskPlaceHolders.length)]);
    const duelabel = createHTMLElement('label', [], 'Due Date');
    duelabel.setAttribute('for', 'duedate');
    const dueinput = createHTMLElement('input');
    dueinput.setAttribute('type', 'date');
    dueinput.setAttribute('name', 'duedate');
    dueinput.setAttribute('placeholder', 'yyyy-mm-dd');
    const modalButtons = createHTMLElement('div', ['modal-buttons']);
    const createBtn = createHTMLElement('button', ['create-task'], 'Create');
    const cancelBtn = createHTMLElement('button', ['cancel'], 'Cancel');

    const buttonContent = [createBtn, cancelBtn];
    buttonContent.forEach(button => modalButtons.appendChild(button));

    const innerContent = [span, label, input, duelabel, dueinput, modalButtons];
    innerContent.forEach(item => form.appendChild(item));

    editModal.appendChild(form);
    modal.appendChild(editModal);

    document.body.appendChild(modal);

    editModal.style.transform = "translateY(400px)";

    // Event Listeners
    createBtn.addEventListener('click', createNewTaskItem);
    cancelBtn.addEventListener('click', closeModal);
}

const renderEditModal = (id) => {
    let index = listItems[currentListIndex].taskList.findIndex(task => task.id == id);
    const modal = createHTMLElement('div', ['modal-container']);
    modal.dataset.modalType = 'edit';
    const editModal = createHTMLElement('div', ['modal']);
    const form = createHTMLElement('form');
    form.setAttribute('action', 'javascript:void(0)');
    const span = createHTMLElement('span', ['newtaskhead'], 'Edit Task');
    const label = createHTMLElement('label', [], 'Title');
    label.setAttribute('for', 'task-title');
    const input = createHTMLElement('input');
    input.value = listItems[currentListIndex].taskList[index].title;
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'task-title');
    input.setAttribute('placeholder', 'Do Laundry');
    const duelabel = createHTMLElement('label', [], 'Due Date');
    duelabel.setAttribute('for', 'duedate');
    const dueinput = createHTMLElement('input');
    dueinput.value = listItems[currentListIndex].taskList[index].date;
    dueinput.setAttribute('type', 'date');
    dueinput.setAttribute('name', 'duedate');
    const modalButtons = createHTMLElement('div', ['modal-buttons']);
    const editBtn = createHTMLElement('button', ['edit-task'], 'Edit');
    editBtn.dataset.editId = id;
    const cancelBtn = createHTMLElement('button', ['cancel'], 'Cancel');

    const buttonContent = [editBtn, cancelBtn];
    buttonContent.forEach(button => modalButtons.appendChild(button));

    const innerContent = [span, label, input, duelabel, dueinput, modalButtons];
    innerContent.forEach(item => form.appendChild(item));

    editModal.appendChild(form);
    modal.appendChild(editModal);

    document.body.appendChild(modal);

    editModal.style.transform = "translateY(400px)";

    // Event Listeners
    editBtn.addEventListener('click', function(e) {
        editTaskItem(e.target.dataset.editId);
    });
    cancelBtn.addEventListener('click', closeModal);
}

const renderDeleteModal = (id, type) => {
    const modal = createHTMLElement('div', ['modal-container']);
    modal.dataset.modalType = 'delete';
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
    deleteBtn.dataset.type = type;
    deleteBtn.dataset.deleteId = id;
    const cancelBtn = createHTMLElement('button', ['cancel'], 'Cancel');

    const buttonContent = [deleteBtn, cancelBtn];
    buttonContent.forEach(button => modalButtons.appendChild(button));

    const innerContent = [warningContainer, span1, span2, modalButtons];
    innerContent.forEach(item => form.appendChild(item));

    deleteModal.appendChild(form);
    modal.appendChild(deleteModal);

    document.body.appendChild(modal);

    deleteModal.style.transform = "translateY(400px)";

    // Event Listeners
    deleteBtn.addEventListener('click', function(e) {
        const { target } = e;
        removeItem(target.dataset.deleteId, target.dataset.type, currentListIndex);
    });
    cancelBtn.addEventListener('click', closeModal);
}

const closeModal = () => {
    let modal = document.querySelector('.modal-container');
    modal.remove();
}

export { renderListModal, renderTaskModal, renderDeleteModal, renderEditModal, closeModal }