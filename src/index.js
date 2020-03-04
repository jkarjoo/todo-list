import { renderListHeader } from './listheader.js';
import { renderListItem } from './list.js';
import { renderTaskHeader } from './taskheader.js';
import { renderTaskItem } from './task.js';
import { renderListModal } from './listmodal.js';

renderTaskHeader('School');
renderTaskItem('Prog I Assignment', 'March 1st, 2020');
renderTaskItem('Psych Research Paper', 'March 5th, 2020');
renderTaskItem('Todo List Project', 'March 9th, 2020');

renderListModal();
/*
renderListHeader();

renderListItem('School');
renderListItem('Groceries');
renderListItem('Work');*/



