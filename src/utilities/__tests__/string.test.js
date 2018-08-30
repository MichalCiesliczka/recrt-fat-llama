import { prepareUserName } from '../string';

describe('prepareUserName in string utility', () => {
  const firstName = 'John';
  const lastName = 'Doe';

  const expectedFullString = 'Mr./Ms. John Doe';
  it('should correclty prepared string with all the data', () => {
    expect(prepareUserName(firstName, lastName)).toEqual(expectedFullString);
  });

  const expectedFirstNameString = 'Mr./Ms. John';
  it('should prepare string with only first name and no whitespaces', () => {
    expect(prepareUserName(firstName)).toEqual(expectedFirstNameString);
  });
});
