import React from 'react'
import * as renderer from 'react-test-renderer'

// custom imports
import { MockedProvider } from '@apollo/react-testing'
import { GET_WINNERS } from '../constants/mediaqueries'
import Media from '../components/media'

const { act } = renderer
const mocks = [
  {
    request: {
      query: GET_WINNERS,
      result: {
        data: [
          {
            src:
              'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            title: 'Won by 200 points',
            channel: 'Don Diablo',
            views: '2m views',
            createdAt: '1 hour ago'
          },
          {
            src:
              'https://i.ytimg.com/vi/ycHr1G0Gffg/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAS6ZJ5RYa2R3Ksp9d8cLzY_8DMOA',
            title: 'Won by 400 points',
            channel: 'Yanks',
            views: '100k views',
            createdAt: '2 hour ago'
          }
        ]
      }
    }
  }
]
it('renders without error', () => {
  act(() => {
    renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Media />
      </MockedProvider>
    )
  })
})
