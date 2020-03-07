import { renderHeader } from './header.js';
import { List, renderListItem } from './list.js';
import { Task, renderTaskItem } from './task.js';
import { renderModal, closeModal } from './modal.js';

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


    const createNewListItem = (title) => {
        let list = new List(title, listId++);
        listItems.push(list);
        renderListItem(list.title, list.id);
    }
    const createNewTaskItem = (title, id, date) => {
        let task = new Task(title, taskId++, date);
        listItems[id].taskList.push(task);
    }
    createNewListItem('test');

    document.addEventListener('click', function(e) {
        const { target } = e;
        if (target.id === 'newList') {
            renderModal('list');
        }
        else if (target.className === 'deletebtn') {
            renderModal('delete');
        }
        else if (target.className === 'cancel') {
            closeModal();
        }
    })

}


export { init } 