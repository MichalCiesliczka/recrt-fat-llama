import { formatDate } from '../dates';

describe('formatDate in dates utility', () => {
  it('should correctly format given date', () => {
    const dateString = '2018-02-16 00:00:00+00';
    const formattedDate = '16/02/2018, 01:00:00';

    expect(formatDate(dateString)).toEqual(formattedDate);
  });
});
