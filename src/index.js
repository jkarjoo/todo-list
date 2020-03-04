import { renderHeader } from './header.js';
import { renderListItem } from './list.js';
import { renderTaskItem } from './task.js';
import { renderModal } from './modal.js';

renderHeader('task', 'School');
renderTaskItem('Prog I Assignment', 'March 1st, 2020');
renderTaskItem('Psych Research Paper', 'March 5th, 2020');
renderTaskItem('Todo List Project', 'March 9th, 2020');

renderModal('task');


/*
renderListModal();
renderTaskModal();
renderDeleteModal();

renderListItem('School');
renderListItem('Groceries');
renderListItem('Work');

*/



