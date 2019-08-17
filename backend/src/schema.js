const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    Winners: [Winner]
  }
  type Winner {
    src: String
    title: String
    channel: String
    views: String
    createdAt: String
  }
`

module.exports = typeDefs
