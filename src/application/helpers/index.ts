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


export {
  ErrorWithStatus,
  addSomeDelayAsync,
  devLoggerInfo,
  devLoggerError,
  convertPriceToLocaleString,
};
