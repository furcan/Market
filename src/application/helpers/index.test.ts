import { constants } from 'application/constants';
import { convertPriceToLocaleString, generatorApiUrlQueryStrings, generatorPaginationItems } from 'application/helpers';

describe('Helper functions should be work as expected.', () => {

  it('"convertPriceToLocaleString" function should return the number param as a locale string.', () => {
    const example1 = convertPriceToLocaleString(18.81);
    expect(example1).toBe('18,81');

    const example2 = convertPriceToLocaleString(1923);
    expect(example2).toBe('1.923,00');

    const example3 = convertPriceToLocaleString(0.1);
    expect(example3).toBe('0,10');
  });

  it('"generatorApiUrlQueryStrings" function should return a valid URL.', () => {
    const example1 = generatorApiUrlQueryStrings({
      endpoint: 'https://github.com/furcan',
      filters: ['param1=1881', 'param2=1923'],
      page: 19,
    });
    expect(example1).toBe(`https://github.com/furcan?param1=1881&param2=1923&_page=19&_limit=${constants.api.productsLimit}`);

    const example2 = generatorApiUrlQueryStrings({
      endpoint: 'https://github.com/furcan',
      filters: ['param1=mehmet,baris,manco', 'param2=domates,biber,patlican'],
      page: 23,
    });
    expect(example2).toBe(`https://github.com/furcan?param1=mehmet,baris,manco&param2=domates,biber,patlican&_page=23&_limit=${constants.api.productsLimit}`);
  });

  it('"generatorPaginationItems" function should return a valid pagination data.', () => {
    const appPageLimit = constants.api.productsLimit;

    const example1TotalPages = 10;
    const example1 = generatorPaginationItems(1, (appPageLimit * example1TotalPages), '---');
    expect(example1).toStrictEqual({
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      total: example1TotalPages,
    });

    const example2TotalPages = 20;
    const example2 = generatorPaginationItems(9, (appPageLimit * example2TotalPages), '***');
    expect(example2).toStrictEqual({
      items: [6, 7, 8, 9, '***', 17, 18, 19, 20],
      total: example2TotalPages,
    });

    const example3TotalPages = 55;
    const example3 = generatorPaginationItems(55, (appPageLimit * example3TotalPages), '###');
    expect(example3).toStrictEqual({
      items: [1, 2, 3, 4, '###', 52, 53, 54, 55],
      total: example3TotalPages,
    });
  });

});

export { };
