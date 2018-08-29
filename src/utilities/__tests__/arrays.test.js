import { sortByType } from '../arrays';

describe('sortByType method in Arrays utility', () => {
  const numericalLists = {
    unordered: [100, 2, 650, 9, 0, 3.58],
    orderedAsc: [0, 2, 3.58, 9, 100, 650],
    orderedDesc: [650, 100, 9, 3.58, 2, 0],
  };

  it('should sort numeric values correctly in asceding order', () => {
    const sortedAsc = numericalLists.unordered.sort((a, b) => sortByType(a, b, null, true));
    expect(sortedAsc).toEqual(numericalLists.orderedAsc);
  });

  it('should sort numeric values correctly in descending order', () => {
    const sortedDesc = numericalLists.unordered.sort((a, b) => sortByType(a, b, null, false));
    expect(sortedDesc).toEqual(numericalLists.orderedDesc);
  });

  const alphabeticalLists = {
    unordered: ['James', 'Raul', 'Michal', 'Ola'],
    orderedAsc: ['James', 'Michal', 'Ola', 'Raul'],
    orderedDesc: ['Raul', 'Ola', 'Michal', 'James'],
  };

  it('should sort alphabetical values correctly in asceding order', () => {
    const sortedAsc = alphabeticalLists.unordered.sort((a, b) => sortByType(a, b, 'alphabetical', true));
    expect(sortedAsc).toEqual(alphabeticalLists.orderedAsc);
  });

  it('should sort alphabetical values correctly in descending order', () => {
    const sortedDesc = alphabeticalLists.unordered.sort((a, b) => sortByType(a, b, 'alphabetical', false));
    expect(sortedDesc).toEqual(alphabeticalLists.orderedDesc);
  });

  const dateLists = {
    unordered: ['2018-03-05', '2010-10-12', '2008-03-10', '2018-10-03'],
    orderedAsc: ['2008-03-10', '2010-10-12', '2018-03-05', '2018-10-03'],
    orderedDesc: ['2018-10-03', '2018-03-05', '2010-10-12', '2008-03-10'],
  };

  it('should sort alphabetical values correctly in asceding order', () => {
    const sortedAsc = dateLists.unordered.sort((a, b) => sortByType(a, b, 'date', true));
    expect(sortedAsc).toEqual(dateLists.orderedAsc);
  });

  it('should sort alphabetical values correctly in descending order', () => {
    const sortedDesc = dateLists.unordered.sort((a, b) => sortByType(a, b, 'date', false));
    expect(sortedDesc).toEqual(dateLists.orderedDesc);
  });
});
