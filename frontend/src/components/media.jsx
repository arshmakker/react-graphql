import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'
import { setInterval } from 'timers'

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
  }
]

export default function Media(props) {
  const [loading, setLoaded] = useState(false)

  useEffect(() => {
    setInterval(function() {
      setLoaded(true)
    }, 5000)
  }, [])

  return (
    <Grid container wrap='wrap'>
      {(loading ? Array.from(new Array(5)) : data).map((item, index) => (
        <Box key={index} width={210} marginRight={0.5} my={5}>
          {item ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant='rect' width={210} height={118} />
          )}
          {item ? (
            <Box paddingRight={2}>
              <Typography gutterBottom variant='body2'>
                {item.title}
              </Typography>
              <Typography
                display='block'
                variant='caption'
                color='textSecondary'
              >
                {item.channel}
              </Typography>
              <Typography variant='caption' color='textSecondary'>{`${
                item.views
              } • ${item.createdAt}`}</Typography>
            </Box>
          ) : (
            <React.Fragment>
              <Skeleton />
              <Skeleton width='60%' />
            </React.Fragment>
          )}
        </Box>
      ))}
    </Grid>
  )
}
