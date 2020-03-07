const addList = (title) => {
    let addNewList = new CustomEvent('addlist', {
        detail: {
            title: title
        }
    })
    document.dispatchEvent(addNewList);
};


const addTask = (title, parentId, date) => {
    let addNewTask = new CustomEvent('addtask', {
        detail: {
            title: title,
            parentId: parentId,
            date: date
        }
    })
    document.dispatchEvent(addNewTask);
};


const updateList = (id, title) => {
    let updateListItem = new CustomEvent('updateList', {
        detail: {
            id: id,
            title: title
        }
    })
    document.dispatchEvent(updateListItem);
};

const updateTask = (id, title, date) => {
    let updateTaskItem = new CustomEvent('updateTask', {
        detail: {
            id: id,
            title: title,
            date: date
        }
    })
    document.dispatchEvent(updateTaskItem);
};

const deleteList = (id) => {
    let deleteListItem = new CustomEvent('deleteList', {
        detail: {
            id: id
        }
    })
    document.dispatchEvent(deleteListItem);
};

const deleteTask = (id) => {
    let deleteTaskItem = new CustomEvent('deleteTask', {
        detail: {
            id: id
        }
    })
    document.dispatchEvent(deleteTaskItem);
};

const taskToggleDone = (id) => {
    let toggleDone = new CustomEvent('toggleDone', {
        detail: {
            id: id
        }
    })
    document.dispatchEvent(toggleDone);
}