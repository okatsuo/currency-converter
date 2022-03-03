import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Currency {
  @Field()
  result: number
}