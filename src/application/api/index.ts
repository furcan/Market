import { constants } from 'application/constants';
import { devLoggerError, generatorApiUrlQueryStrings } from 'application/helpers';


interface IApiProductType {
  id: number;
  name: string;
  queryString: string;
}

interface IApiProductBrand {
  id: number;
  slug: string;
  name: string;
  queryString: string;
  relatedProductsCount: number;
}

interface IApiProductBrands {
  data: IApiProductBrand[];
  totalProductsCount: number;
}

interface IApiProductTag {
  id: number;
  name: string;
  queryString: string;
  relatedProductsCount: number;
}

interface IApiProductItem {
  slug: string;
  name: string;
  price: number;
}

interface IApiProductItems {
  products: IApiProductItem[];
  totalCount: number;
}

class Api {
  constructor(headers?: HeadersInit) {
    this.headers = { ...this.defaultHeaders, ...headers };
  }
  private headers: HeadersInit;
  private defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  getProductTypes = async (): Promise<IApiProductType[] | null> => {
    try {
      const _headers = this.headers;

      const response = await fetch((constants.api.urlBase + constants.api.pathTypes), {
        method: 'get',
        headers: _headers,
      });

      if (!response.ok) {
        throw new Error();
      }

      const data: IApiProductType[] | null = await response.json();
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

  getProductBrands = async (): Promise<IApiProductBrands | null> => {
    try {
      const _headers = this.headers;

      const apiUrl = `${constants.api.urlBase}${constants.api.pathBrands}?_limit=${constants.api.limitProductsBrands}`;
      const response = await fetch(apiUrl, {
        method: 'get',
        headers: _headers,
      });

      if (!response.ok) {
        throw new Error();
      }

      const data: IApiProductBrands | null = await response.json();
      if (!(data instanceof Object) || !('data' in data) || !('totalProductsCount' in data)) {
        throw new Error();
      }

      return data;

    } catch (error) {
      const errorMessage = error instanceof Error ? error?.message : '';
      devLoggerError(errorMessage);
      return null;
    }
  };

  getProductsByFiltersAndPage = async (filters: string[], page: number): Promise<IApiProductItems | null> => {
    try {
      const _headers = this.headers;

      const apiUrl = generatorApiUrlQueryStrings({
        endpoint: (constants.api.urlBase + constants.api.pathProducts),
        filters,
        page,
      });

      const response = await fetch(apiUrl, {
        method: 'get',
        headers: _headers,
      });

      if (!response.ok) {
        throw new Error();
      }

      const data: IApiProductItem[] | null = await response.json();
      if (!Array.isArray(data)) {
        throw new Error();
      }

      const mappedData: IApiProductItem[] = data.map((product: IApiProductItem) => {
        return {
          slug: product?.slug,
          name: product?.name,
          price: product?.price,
        };
      });

      const returnData: IApiProductItems = {
        products: mappedData,
        totalCount: parseInt(response.headers.get('X-Total-Count') || '') || 0,
      };

      return returnData;

    } catch (error) {
      const errorMessage = error instanceof Error ? error?.message : '';
      devLoggerError(errorMessage);
      return null;
    }
  };
}

export type {
  IApiProductType,
  IApiProductBrand,
  IApiProductBrands,
  IApiProductTag,
  IApiProductItem,
  IApiProductItems,
};

export { Api };
