import { Arg, Query, Resolver } from 'type-graphql';
import { CurrencyInput, CurrencyOutput } from './currencyContracts';
import { Currency } from './currencySchema';
import { currencyRequestValidator } from './validator';
import { currencyService } from './currencyService';
import { createRequestUnion } from '../helpers/createRequestUnion';
import { RequestError } from '../requestError';

const CurrencyUnion = createRequestUnion(Currency)

@Resolver()
export class CurrencyResolver {
  @Query(() => CurrencyUnion)
  async convert(
    @Arg('fields') fields: CurrencyInput
  ): Promise<CurrencyOutput | RequestError> {
    const hasError = currencyRequestValidator(fields)
    if (hasError) return hasError

    const { amount, currencyBase, currencyTarget } = fields
    const currencies = await currencyService(currencyBase)

    const result = currencies[currencyTarget] * amount
    return { result }
  }
}