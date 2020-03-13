import { renderListHeader, renderTaskHeader } from './header.js';
import { List, renderListItem } from './list.js';
import { Task, renderTaskItem } from './task.js';
import { closeModal } from './modal.js';

let currentListIndex;
let listItems = [];
let listId = 0;
let taskId = 0;

const removeContent = () => {
    let contentContainer = document.querySelector('.main-content');
    contentContainer.innerHTML = '';
}

const renderHomePage = () => {
    removeContent();
    renderListHeader();
    listItems.forEach(list => renderListItem(list.title, list.id));
}

const renderTaskPage = (parent) => {
    currentListIndex = parent;
    removeContent();
    renderTaskHeader(listItems[parent].title);
    listItems[parent].taskList.forEach(task => renderTaskItem(task.title, task.id, task.date));
}

const createNewListItem = () => {
    let input = document.querySelector('input[name="list-title"]').value;
        if (input) {
            let list = new List(input, listId++);
            listItems.push(list);
            renderListItem(list.title, list.id);
            closeModal();
    }
}

const createNewTaskItem = () => {
    let title = document.querySelector('input[name="task-title"]').value;
    let date = document.querySelector('input[name="duedate"]').value;
        if (title && date) {
            let task = new Task(title, taskId++, date);
            listItems[currentListIndex].taskList.push(task);
            renderTaskItem(title, task.id, date);
            closeModal();
            
    }
}

const removeItem = (id, type, parentId) => {
    console.log(listItems);
    if (type === 'list') {
        delete listItems[id];
        let domElement = document.querySelector(`[data-list-id="${id}"]`);
        domElement.remove();
    }
    if (type === 'task') {
        delete listItems[parentId].taskList[id];
        let domElement = document.querySelector(`[data-task-id="${id}"]`);
        domElement.remove();
    }
    closeModal();
}

export { listItems, currentListIndex, listId, taskId, removeContent, renderHomePage, renderTaskPage, createNewListItem, createNewTaskItem, removeItem };

