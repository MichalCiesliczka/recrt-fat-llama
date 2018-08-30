import { formatMoneyWithCurrency } from '../money';

describe('formatMoneyWithCurrency in money utility', () => {
  it('should correctly format given amount of money', () => {
    const moneyAmount = 1500;
    const currency = 'GBP';

    const formattedAmount = '1500.00 GBP';

    expect(formatMoneyWithCurrency(moneyAmount, currency)).toEqual(formattedAmount);
  });
});
