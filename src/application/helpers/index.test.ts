import { constants } from 'application/constants';
import { convertPriceToLocaleString, generatorApiUrlQueryStrings } from 'application/helpers';

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

});

export { };
