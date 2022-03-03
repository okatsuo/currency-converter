import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class RequestError {
  @Field()
  errorCode: number

  @Field()
  message: string
}