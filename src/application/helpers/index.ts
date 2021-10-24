import { constants } from 'application/constants';

class ErrorWithStatus extends Error {
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
  status = 0;
}

const addSomeDelayAsync = (milliseconds?: number): Promise<void> => new Promise(resolve => setTimeout(() => { resolve(); }, milliseconds || 1000));

const devLoggerInfo = (message?: string): void => {
  if (process.env.isDev) {
    console.log(`%c ${constants.app.name} `, 'padding:2px;border-radius:20px;color:#fff;background:#26c0d3', `\n ${message}`);
  }
};

const devLoggerError = (message?: string): void => {
  if (process.env.isDev) {
    console.error(`%c ${constants.app.name} `, 'padding:2px;border-radius:20px;color:#fff;background:#ff5549', `\n ${message}`);
  }
};

const convertPriceToLocaleString = (price: number): string => {
  return price.toLocaleString(constants.app.locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const actionWindowScrollToTop = (): void => {
  if (typeof window === 'object') {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
};

// Generator Api URL Query Strings: begin
interface IGeneratorApiUrlQueryStrings {
  endpoint: string;
  filters: string[];
  page: number;
}

const generatorApiUrlQueryStrings = ({ endpoint, filters, page }: IGeneratorApiUrlQueryStrings): string => {
  return `${endpoint}?${filters.join('&')}&_page=${page}&_limit=${constants.api.limitProductsItems}`;
};
// Generator Api URL Query Strings: end

// Generator Pagination Items: begin
interface IGeneratorPaginationItems {
  items: (number | string)[];
  total: number;
}

const generatorPaginationItems = (currentPage: number, totalPage: number, seperatorString?: string): IGeneratorPaginationItems => {
  const totalItemsCount = Math.ceil(totalPage / constants.api.limitProductsItems);
  const arrayOfItems: number[] = Array(totalItemsCount).fill('').map((_, i: number) => i + 1);

  if (totalItemsCount < 11) {
    return {
      items: arrayOfItems,
      total: totalItemsCount,
    };
  }

  let first4 = arrayOfItems.slice(currentPage - 5, currentPage - 1);
  const last4 = arrayOfItems.slice(-4);

  if (first4.length < 4) {
    let start = 1;
    while (start < 5) {
      if (!first4.includes(start)) {
        first4.push(start);
        start++;
      }
    }
  }

  if (!first4.includes(currentPage) && !last4.includes(currentPage)) {
    first4.push(currentPage);
    first4.splice(0, 1);
  }

  if (last4.includes(currentPage)) {
    first4 = arrayOfItems.slice(0, 4);
  }

  const items = [...first4, (seperatorString || '•••'), ...last4];

  return {
    items: items,
    total: totalItemsCount,
  };
};
// Generator Pagination Items: end


export type {
  IGeneratorApiUrlQueryStrings,
};

export {
  ErrorWithStatus,
  addSomeDelayAsync,
  devLoggerInfo,
  devLoggerError,
  convertPriceToLocaleString,
  actionWindowScrollToTop,
  generatorApiUrlQueryStrings,
  generatorPaginationItems,
};
