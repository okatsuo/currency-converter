import { ClassType, createUnionType } from 'type-graphql'
import { RequestError } from '../requestError'

type Options = {
  unionName?: string
}

export const createRequestUnion = (Schema: ClassType, options?: Options) => {
  return createUnionType({
    name: options?.unionName ?? `${Schema.name}Request`,
    types: () => [Schema, RequestError],
    resolveType: (data) => {
      if ('errorCode' in data) return RequestError
      return Schema
    }
  })
}