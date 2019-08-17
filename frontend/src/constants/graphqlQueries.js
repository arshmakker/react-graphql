import gql from 'graphql-tag'

export const GET_WINNERS = gql`
  {
    Winners {
      src
      title
      channel
      views
      createdAt
    }
  }
`
