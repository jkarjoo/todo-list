import { renderHeader } from './header.js';
import { renderListItem } from './list.js';
import { renderTaskItem } from './task.js';
import { renderListModal } from './listmodal.js';
import { renderTaskModal } from './taskmodal.js';
import { renderDeleteModal } from './deletemodal.js';

renderHeader('task', 'School');
renderTaskItem('Prog I Assignment', 'March 1st, 2020');
renderTaskItem('Psych Research Paper', 'March 5th, 2020');
renderTaskItem('Todo List Project', 'March 9th, 2020');




/*
renderListModal();
renderTaskModal();
renderDeleteModal();
renderListHeader();

renderListItem('School');
renderListItem('Groceries');
renderListItem('Work');

*/



