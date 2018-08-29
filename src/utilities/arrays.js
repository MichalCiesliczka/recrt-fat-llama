import { getTime } from 'date-fns';

export const sortByType = (aEl, bEl, type, asc) => {
  switch (type) {
    case 'date':
      return asc
        ? getTime(aEl) - getTime(bEl)
        : getTime(bEl) - getTime(aEl);

    case 'alphabetical':
      return asc
        ? aEl.localeCompare(bEl)
        : bEl.localeCompare(aEl);

    default:
      return asc ? aEl - bEl : bEl - aEl;
  }
};

export default {
  sortByType,
};
