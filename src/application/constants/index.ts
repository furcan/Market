import * as packageJSON from '../../../package.json';

type TApiLimits = 12 | 14 | 16 | 18 | 20 | 22 | 24;
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
    currency: string;
    locale: string;
  };
  text: {
    common: {
      failure: string;
      noData: string;
    };
    filters: {
      titleSorting: string;
      titleBrands: string;
      titleTags: string;
      buttonAll: string;
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
    locale: 'tr-TR',
    currency: '₺',
  },
  text: {
    common: {
      failure: 'Something went wrong.',
      noData: 'No results found.',
    },
    filters: {
      titleSorting: 'Sorting',
      titleBrands: 'Brands',
      titleTags: 'Tags',
      buttonAll: 'All',
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
