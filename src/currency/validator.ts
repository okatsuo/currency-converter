import { readCurrencyFile } from '../helpers/writeAndReadCurrencyJson';
import { RequestError, requestErros } from '../requestError';
import { CurrencyInput } from './currencyContracts';

export const currencyRequestValidator = (fields: CurrencyInput): RequestError | undefined => {
  const currencies = readCurrencyFile()

  const { currencyBase, currencyTarget } = fields
  if (!currencies.includes(currencyBase)) return requestErros.currencyBaseNotExists
  if (!currencies.includes(currencyTarget)) return requestErros.currencyTargetNotExists

  return
}