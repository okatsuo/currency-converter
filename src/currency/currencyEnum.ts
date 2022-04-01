import { registerEnumType } from 'type-graphql';
import { readCurrencyFile } from '../helpers/readCurrencyJson';

export const CurrencyGenerated: any = {}
const currencyFromJson = readCurrencyFile()

for (const currency of currencyFromJson) CurrencyGenerated[currency] = currency

export type Currency = typeof CurrencyGenerated

registerEnumType(CurrencyGenerated, {
  name: "Currencies"
});