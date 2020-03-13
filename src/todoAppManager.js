import { renderHomePage } from './helperfunctions.js';

const init = () => {

    // Local Storage here
    
    renderHomePage();


    

/*
    const removeContent = () => {
        let contentContainer = document.querySelector('.main-content');
        contentContainer.innerHTML = '';
    }

    const renderHomePage = () => {
        removeContent();
        renderListHeader();
        listItems.forEach(list => renderListItem(list.title, list.id));
    }
    renderHomePage();
*/
/*
    const createNewListItem = () => {
        let input = document.querySelector('input[name="list-title"]').value;
            if (input) {
                let list = new List(input, listId++);
                listItems.push(list);
                renderListItem(list.title, list.id);
                closeModal();
        }
    }*/
/*
    const createNewTaskItem = (title, id, date) => {
        let task = new Task(title, taskId++, date);
        listItems[id].taskList.push(task);
    }*/
/*
    const renderTaskPage = (parent) => {
        removeContent();
        renderTaskHeader(listItems[parent].title);
        listItems[parent].taskList.forEach(task => renderTaskItem(task.title, task.id, task.date));
    }
*/

/* 
    const removeItem = (id, type, parentId) => {
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

    const editTaskItem = (parentId, id) => {
        renderTaskModal();
        let title = document.querySelector('input[name="task-title"]');
        title.value = listItems[parentId].taskList[id].title;
        let date = document.querySelector('input[name="duedate"]');
        date.value = listItems[parentId].taskList[id].date;
    }
*/
/*
    document.addEventListener('click', function(e) {
        const { target } = e;
        /*
        if (target.id === 'newList') {
            renderListModal();
        }*//*
        if (target.id === 'newTask') {
            renderTaskModal();
        }*//*
        if (target.className === 'editbtn') {
            editTaskItem(currentListIndex, target.dataset.taskEditId);
        }/*
        else if (target.className === 'deletebtn') {
            (target.dataset.listDeleteId) ? renderDeleteModal(target.dataset.listDeleteId, 'list') : renderDeleteModal(target.dataset.taskDeleteId, 'task')
        }/*
        else if (target.className === 'cancel') {
            closeModal();
        }/*
        else if (target.className === 'create-list') {
            let input = document.querySelector('input[name="list-title"]').value;
            if (input) {
                createNewListItem(input);
                closeModal();
            }
        }*//*
        else if (target.className === 'create-task') {
            let title = document.querySelector('input[name="task-title"]').value;
            let date = document.querySelector('input[name="duedate"]').value;
            if (title && date) {
                createNewTaskItem(title, currentListIndex, date);
                closeModal();
                renderTaskItem(title, taskId, date);
            }
        }*//*
        else if (target.className === 'delete') {
            removeItem(target.dataset.deleteId, target.dataset.type, currentListIndex);
        }
        else if (target.className === ('list')) {
            currentListIndex = target.dataset.listId;
            renderTaskPage(currentListIndex);
        }/*
        else if (target.className === 'backbtn') {
            renderHomePage();
        }*/
}


export { init } 