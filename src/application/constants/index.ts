import * as packageJSON from '../../../package.json';

interface IConstants {
  api: {
    urlBase: string;
    pathProducts: string;
    pathTypes: string;
    pathBrands: string;
    pathTags: string;
    productsLimit: number;
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
    };
    products: {
      mainTitle: string;
      buttonAdd: string;
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
    productsLimit: 16,
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
    },
    products: {
      mainTitle: 'Products',
      buttonAdd: 'Add',
    },
    footer: {
      privacy: 'Privacy Policy',
    },
  },
};

export type { IConstants };

export { constants };
