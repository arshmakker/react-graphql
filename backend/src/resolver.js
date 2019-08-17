const typeDefs = require('./schema')

const resolvers = {
  Query: {
    Winners() {
      const data = [
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
        },
        {
          src:
            'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
          title: 'Won by 100 points',
          channel: 'Calvin Harris',
          views: '130 M views',
          createdAt: '30 minutes ago'
        },
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
        },
        {
          src:
            'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
          title: 'Won by 100 points',
          channel: 'Calvin Harris',
          views: '130 M views',
          createdAt: '30 minutes ago'
        },
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
        },
        {
          src:
            'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
          title: 'Won by 100 points',
          channel: 'Calvin Harris',
          views: '130 M views',
          createdAt: '30 minutes ago'
        },
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
        },
        {
          src:
            'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
          title: 'Won by 100 points',
          channel: 'Calvin Harris',
          views: '130 M views',
          createdAt: '30 minutes ago'
        }
      ]
      return data
    }
  }
}

module.exports = resolvers
