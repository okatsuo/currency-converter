import { writeFileSync, readFileSync } from 'fs'

export const createCurrencyFile = (data: Object) => {
  writeFileSync('currencies.json', JSON.stringify(data))
}

export const readCurrencyFile = (): Array<string> => {
  const data = readFileSync('currencies.json', { encoding: 'utf8', flag: 'r' })
  return JSON.parse(data)
}