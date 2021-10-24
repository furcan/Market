import { constants } from 'application/constants';
import { devLoggerError } from 'application/helpers';


interface IApiProductTypes {
  id: number;
  name: string;
  queryString: string;
}

interface IApiProductBrands {
  id: number;
  slug: string;
  name: string;
  queryStringPrefix: string;
}

interface IApiProductTags {
  id: number;
  name: string;
  queryStringPrefix: string;
}

class Api {
  constructor(headers?: HeadersInit) {
    this.headers = { ...this.defaultHeaders, ...headers };
  }
  private headers: HeadersInit;
  private defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  getProductTypes = async (): Promise<IApiProductTypes[] | null> => {
    try {
      const _headers = this.headers;

      const response = await fetch((constants.api.urlBase + constants.api.pathTypes), {
        method: 'get',
        headers: _headers,
      });

      if (!response.ok) {
        throw new Error();
      }

      const data: IApiProductTypes[] | null = await response.json();
      if (!Array.isArray(data)) {
        throw new Error();
      }

      return data;

    } catch (error) {
      const errorMessage = error instanceof Error ? error?.message : '';
      devLoggerError(errorMessage);
      return null;
    }
  };
}

export type {
  IApiProductTypes,
  IApiProductBrands,
  IApiProductTags,
};

export { Api };
