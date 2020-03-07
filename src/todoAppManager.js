import { renderHeader } from './header.js';
import { List, renderListItem } from './list.js';
import { Task, renderTaskItem } from './task.js';
import { renderModal } from './modal.js';

const init = () => {
    renderHeader('list');
    // Local Storage here
    let listItems = [];
    let listId = 0;
    let taskId = 0;

    const renderList = () => {
        listItems.forEach(list => renderListItem(list.title, list.id));
    }
    const renderTaskList = (parent) => {
        listItems[parent].taskList.forEach(task => renderTaskItem(task.title, task.id, task.dueDate));
    }


    const addNewListItem = (title) => {
        let list = new List(title, listId++);
        listItems.push(list);
        renderListItem(list.title, list.id);
    }
    const addNewTaskItem = (title, id, date) => {
        let task = new Task(title, taskId++, date);
        listItems[id].taskList.push(task);
    }
    addNewListItem('test');


    const newListButton = document.getElementById('newList');
    newListButton.addEventListener('click', function() {
        renderModal('list');

        const createListBtn = document.querySelector('.create-list');
        createListBtn.addEventListener('click', function() {
        let title = document.querySelector('input[name="list-title"]');
        addNewListItem(title.value);
        const modal = document.querySelector('.modal-container');
        modal.remove();
        
    });
    });

    let deleteBtns = document.querySelectorAll('.deletebtn');
    deleteBtns.forEach(btn => btn.addEventListener('click', function() {
        renderModal('delete');
    }));



}


export { init } 