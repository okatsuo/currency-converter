import 'reflect-metadata'
import 'dotenv/config'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { appConfig } from './config'
import { CurrencyResolver } from '../currency'

const start = async () => {
  const schema = await buildSchema({
    resolvers: [CurrencyResolver]
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await server.listen(appConfig.port)
  console.log(`Server running at: ${url}`)
}

start().catch((error) => console.log('Server error:', error))