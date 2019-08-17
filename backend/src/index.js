const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolver')

// // // // The GraphQL schema
// // // const typeDefs = gql`
// // //   type Query {
// // //     "A simple type for getting started!"
// // //     hello: String
// // //   }
// // // `

// // A map of functions which return data for the schema.
// const resolvers = {}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
