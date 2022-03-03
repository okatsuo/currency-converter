import { Arg, Query, Resolver } from 'type-graphql';
import { CurrencyInput, CurrencyOutput } from './currencyContracts';
import { Currency } from './currencySchema';
import { currencyRequestValidator } from './validator';
import { currencyService } from './currencyService';
import { createCurrencyFile } from '../helpers/writeAndReadCurrencyJson';

@Resolver()
export class CurrencyResolver {
  @Query(() => Currency)
  async convert(
    @Arg('fields') fields: CurrencyInput
  ): Promise<CurrencyOutput> {
    currencyRequestValidator(fields)
    const { amount, currencyBase, currencyTarget } = fields

    const { currencies } = await currencyService(currencyBase)
    createCurrencyFile(Object.keys(currencies))

    const result = currencies[currencyTarget] * amount
    return { result }
  }
}