import ApolloClient from 'apollo-boost'
import { URI } from '../constants'

const client = new ApolloClient({
  uri: URI
})

export default client
