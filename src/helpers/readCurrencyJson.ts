import { readFileSync } from 'fs'
let currencies: Array<string>
export const readCurrencyFile = (): Array<string> => {
  if (!currencies) {
    currencies = JSON.parse(readFileSync('currencies.json', { encoding: 'utf8', flag: 'r' }))
    return readCurrencyFile()
  }
  return currencies
}