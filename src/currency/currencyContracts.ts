import { Field, InputType } from 'type-graphql';
import { CurrencyGenerated } from './currencyEnum';
@InputType()
export class CurrencyInput {
  @Field(() => CurrencyGenerated)
  currencyBase: string

  @Field(() => CurrencyGenerated)
  currencyTarget: string

  @Field()
  amount: number
}

@InputType()
export class CurrencyOutput {
  @Field()
  result: string
}