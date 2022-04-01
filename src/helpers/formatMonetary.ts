type FormatMonetaryOptions = { locale?: string, currencyTarget: string, value: number }

export const formatMonetary = ({ currencyTarget, value, locale = undefined }: FormatMonetaryOptions) =>
  Intl.NumberFormat(locale, { currency: currencyTarget, style: 'currency' }).format(value)
