import { convertPriceToLocaleString } from 'application/helpers';

describe('Helper functions should be work as expected.', () => {

  it('"convertPriceToLocaleString" function should return the number param as a locale string.', () => {
    const example1 = convertPriceToLocaleString(18.81);
    expect(example1).toBe('18,81');

    const example2 = convertPriceToLocaleString(1923);
    expect(example2).toBe('1.923,00');

    const example3 = convertPriceToLocaleString(0.1);
    expect(example3).toBe('0,10');
  });

});

export { };
