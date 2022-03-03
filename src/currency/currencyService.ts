import axios from 'axios';
import { appConfig } from '../main/config';
import { CurrencyInput, CurrencyOutput } from './currencyContracts';

export const currencyService = async (currencyBase: string) => {
  const { data: { data: currencies } } = await axios.get(appConfig.currency_api + currencyBase)

  return { currencies }
}