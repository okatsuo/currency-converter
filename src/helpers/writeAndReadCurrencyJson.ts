import fs from 'fs'

export const createCurrencyFile = (data: Object) => {
  fs.writeFileSync('currencies.json', JSON.stringify(data))
}