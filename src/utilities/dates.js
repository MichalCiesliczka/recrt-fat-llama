import { format } from 'date-fns';

const getUTCDate = (dateString = Date.now()) => {
  const date = new Date(dateString);

  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
  );
};

export const formatDate = date => format(getUTCDate(date), 'DD/MM/YYYY, HH:mm:ss');

export default {
  formatDate,
};
