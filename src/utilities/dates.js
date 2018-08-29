import { format } from 'date-fns';

export const formatDate = date => format(date, 'DD/MM/YYYY, HH:mm:ss');

export default {
  formatDate,
};
