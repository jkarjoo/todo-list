import { format, parseISO } from 'date-fns';

const formatDate = (date) => {
    let temp = parseISO(date);
    let formatted = format(new Date(temp), 'MMMM do yyyy');
    return formatted;
}

export { formatDate }