import axios from 'axios';
import { appConfig } from '../main/config';
import { Currency } from './currencyEnum';

export const currencyService = async (currencyBase: Currency) => {
  const { data: { data: currencies } } = await axios.get(appConfig.currency_api + currencyBase)

  return currencies
}