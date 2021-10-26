import * as packageJSON from '../../../package.json';

type TApiLimits = 12 | 14 | 16 | 18 | 20 | 22 | 24;
type TAppLanguages = 'tr' | 'en';
type TAppLocales = 'tr-TR' | 'en-US';
type TAppCurrencies = '₺' | '$';

interface IConstants {
  api: {
    urlBase: string;
    pathProducts: string;
    pathTypes: string;
    pathBrands: string;
    pathTags: string;
    limitProductsItems: TApiLimits;
    limitProductsBrands: TApiLimits;
    limitProductsTags: TApiLimits;
  };
  app: {
    url: string;
    version: string;
    name: string;
    language: TAppLanguages;
    locale: TAppLocales;
    currency: TAppCurrencies;
  };
  text: {
    common: {
      failure: string;
      noData: string;
    };
    basket: {
      noData: string;
    };
    filters: {
      titleSorting: string;
      titleBrands: string;
      titleTags: string;
      buttonAll: string;
      placeholderInputBrands: string;
      placeholderInputTags: string;
    };
    products: {
      mainTitle: string;
      buttonAdd: string;
      buttonNext: string;
      buttonPrev: string;
    };
    footer: {
      privacy: string;
    };
  };
}

const constants: IConstants = {
  api: {
    urlBase: 'https://furcan.herokuapp.com/api',
    pathProducts: '/products',
    pathTypes: '/types',
    pathBrands: '/brands',
    pathTags: '/tags',
    limitProductsItems: 16,
    limitProductsBrands: 24,
    limitProductsTags: 24,
  },
  app: {
    url: packageJSON?.homepage,
    version: packageJSON?.version,
    name: packageJSON?.description,
    language: 'en',
    locale: 'tr-TR',
    currency: '₺',
  },
  text: {
    common: {
      failure: 'Something went wrong.',
      noData: 'No results found.',
    },
    basket: {
      noData: 'Your basket is currently empty.',
    },
    filters: {
      titleSorting: 'Sorting',
      titleBrands: 'Brands',
      titleTags: 'Tags',
      buttonAll: 'All',
      placeholderInputBrands: 'Search brand',
      placeholderInputTags: 'Search tag',
    },
    products: {
      mainTitle: 'Products',
      buttonAdd: 'Add',
      buttonNext: 'Next',
      buttonPrev: 'Prev',
    },
    footer: {
      privacy: 'Privacy Policy',
    },
  },
};

export type { IConstants };

export { constants };
