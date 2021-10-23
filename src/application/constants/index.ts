import * as packageJSON from '../../../package.json';

interface IConstants {
  app: {
    url: string;
    version: string;
    name: string;
    currency: string;
    locale: string;
  };
  text: {
    footer: {
      privacy: string;
    };
  };
}

const constants: IConstants = {
  app: {
    url: packageJSON?.homepage,
    version: packageJSON?.version,
    name: packageJSON?.description,
    locale: 'tr-TR',
    currency: '₺',
  },
  text: {
    footer: {
      privacy: 'Privacy Policy',
    },
  },
};

export type { IConstants };

export { constants };
