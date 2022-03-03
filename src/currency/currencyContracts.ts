import { Field, InputType } from 'type-graphql';

@InputType()
export class CurrencyInput {
  @Field()
  currencyBase: string

  @Field()
  currencyTarget: string

  @Field()
  amount: number
}

@InputType()
export class CurrencyOutput {
  @Field()
  result: number
}