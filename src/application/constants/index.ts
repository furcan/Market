import * as packageJSON from '../../../package.json';

interface IConstants {
  app: {
    url: string;
    version: string;
    name: string;
    currency: string;
    locale: string;
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
};

export type { IConstants };

export { constants };
