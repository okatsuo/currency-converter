import { Field, InputType } from 'type-graphql';
import { CurrencyGenerated } from './currencyEnum';
@InputType()
export class CurrencyInput {
  @Field(() => CurrencyGenerated)
  currencyBase: typeof CurrencyGenerated

  @Field(() => CurrencyGenerated)
  currencyTarget: typeof CurrencyGenerated

  @Field()
  amount: number
}

@InputType()
export class CurrencyOutput {
  @Field()
  result: string
}