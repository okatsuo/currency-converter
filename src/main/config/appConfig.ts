const throwAppConfig = (message: string) => {
  throw new Error(`[App-Config] - ${message}`)
}

export const appConfig = {
  port: process.env.PORT || 4000,
  currency_api: process.env.CURRENCY_API || throwAppConfig('Its necessary the KEY_API to system works.')
}