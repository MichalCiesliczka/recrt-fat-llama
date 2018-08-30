import { formatDate } from '../dates';

describe('formatDate in dates utility', () => {
  it('should correctly format given date', () => {
    const timestamp = 1535623200000;
    const dateString = new Date(timestamp).setUTCHours(10);
    const formattedDate = '30/08/2018, 10:00:00';

    expect(formatDate(dateString)).toEqual(formattedDate);
  });
});
