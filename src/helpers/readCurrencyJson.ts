import { readFileSync } from 'fs'

export const readCurrencyFile = (): Array<string> => {
  const data = readFileSync('currencies.json', { encoding: 'utf8', flag: 'r' })
  return JSON.parse(data)
}