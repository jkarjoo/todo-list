import { renderListHeader, renderTaskHeader } from './header.js';
import { List, renderListItem } from './list.js';
import { Task, renderTaskItem } from './task.js';
import { closeModal } from './modal.js';
import { renderEmptyState, removeEmptyState }  from './emptystate.js';

let currentListIndex;
let listItems = [];
let listId = 0;
let taskId = 0;

const renderHomePage = () => {
    removeContent();
    renderListHeader();
    checkEmptyListState();
    listItems.forEach(list => {
        if (list) {
            renderListItem(list.title, list.id);
        }
    })
}

const onLoad = () => {
    if (localStorage.listItems) {
        listItems = JSON.parse(localStorage.getItem('listItems'));
        listId = JSON.parse(localStorage.getItem('listId'));
        taskId = JSON.parse(localStorage.getItem('taskId'));
    }
    renderHomePage();
}

const removeContent = () => {
    let contentContainer = document.querySelector('.main-content');
    contentContainer.innerHTML = '';
}


const renderTaskPage = (parent) => {
    currentListIndex = parent;
    removeContent();
    renderTaskHeader(listItems[parent].title);
    checkEmptyTaskState();
    listItems[parent].taskList.forEach(task => renderTaskItem(task.title, task.id, task.date, task.completed));
}

const createNewListItem = () => {
    let input = document.querySelector('input[name="list-title"]').value;
        if (input) {
            let list = new List(input, listId++);
            listItems.push(list);
            checkEmptyListState();
            renderListItem(list.title, list.id);
            updateLocalStorage();
            closeModal();
    }
}

const createNewTaskItem = () => {
    let title = document.querySelector('input[name="task-title"]').value;
    let date = document.querySelector('input[name="duedate"]').value;
        if (title && date) {
            let task = new Task(title, taskId++, date);
            listItems[currentListIndex].taskList.push(task);
            checkEmptyTaskState();
            renderTaskItem(title, task.id, date);
            updateLocalStorage();
            closeModal();
    }
}

const removeItem = (id, type, parentId) => {
    if (type === 'list') {
        delete listItems[id];
        let domElement = document.querySelector(`[data-list-id="${id}"]`);
        domElement.remove();
        checkEmptyListState();
    }
    if (type === 'task') {
        let index = listItems[currentListIndex].taskList.findIndex(task => task.id == id);
        listItems[parentId].taskList.splice(index, 1);
        let domElement = document.querySelector(`[data-task-id="${id}"]`);
        domElement.remove();
        checkEmptyTaskState();
    }
    updateLocalStorage();
    closeModal();
}

const editTaskItem = (id) => {
    let index = listItems[currentListIndex].taskList.findIndex(task => task.id == id);
    let title = document.querySelector('input[name="task-title"]').value;
    let date = document.querySelector('input[name="duedate"]').value;
    if (title && date) {
        let domElement = document.querySelector(`[data-task-id="${id}"]`);
        domElement.remove();
        listItems[currentListIndex].taskList[index].title = title;
        listItems[currentListIndex].taskList[index].date = date;
        let completed = listItems[currentListIndex].taskList[index].completed;
        renderTaskItem(title, id, date, completed);
        updateLocalStorage();
        closeModal();  
    }
}

const completeTask = (id) => {
    let index = listItems[currentListIndex].taskList.findIndex(task => task.id == id);
    let completedValue = listItems[currentListIndex].taskList[index].completed;
    listItems[currentListIndex].taskList[index].completed = !completedValue;
    updateLocalStorage();

    checkTask(id);
}

const checkTask = (id) => {
    const task = document.querySelector(`[data-task-id="${id}"]`);
    task.classList.toggle('checked');
    const radio = document.querySelector(`[data-radio-id="${id}"]`);
    radio.classList.toggle('checked');
    const span = document.querySelector(`[data-date-id="${id}"]`);
    span.classList.toggle('checked');
}

const checkEmptyListState = () => {
    if (listItems.length === 0 || listItems.every(item => !item)) {
         renderEmptyState('List');
    }
    else {
        removeEmptyState();
    }
}

const checkEmptyTaskState = () => {
    const taskArr = listItems[currentListIndex].taskList;
    if (taskArr.length === 0) {
        renderEmptyState('Task');
    }
    else {
        removeEmptyState();
    }
}

const updateLocalStorage = () => {
    localStorage.setItem('listId', JSON.stringify(listId));
    localStorage.setItem('taskId', JSON.stringify(taskId));
    localStorage.setItem('listItems', JSON.stringify(listItems));
}

export { listItems, onLoad, completeTask, checkTask, editTaskItem, currentListIndex, listId, taskId, removeContent, renderHomePage, renderTaskPage, createNewListItem, createNewTaskItem, removeItem };

