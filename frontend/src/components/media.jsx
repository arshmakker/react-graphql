import React from 'react'
import { Grid } from '@material-ui/core'
import { Box } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'
import { useQuery } from '@apollo/react-hooks'
// custom imports
import { GET_WINNERS } from '../constants/graphqlQueries'
export default function Media(props) {
  const { loading, error, data } = useQuery(GET_WINNERS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  function _getWinners() {
    let retDivs = []
    const winners = data.Winners
    for (let index = 0; index < winners.length; index++) {
      retDivs.push(
        <React.Fragment key={index}>
          <Box width={210} marginRight={0.5} my={5}>
            <img
              style={{ width: 210, height: 118 }}
              alt={winners[index].title}
              src={winners[index].src}
            />
            <Box paddingRight={2}>
              <Typography gutterBottom variant='body2'>
                {winners[index].title}
              </Typography>
              <Typography
                display='block'
                variant='caption'
                color='textSecondary'
              >
                {winners[index].channel}
              </Typography>
              <Typography variant='caption' color='textSecondary'>{`${
                winners[index].views
              } • ${winners[index].createdAt}`}</Typography>
            </Box>
          </Box>
        </React.Fragment>
      )
    }
    return retDivs
  }

  function _getSkeletons() {
    let retDivs = []
    for (let index = 0; index < 20; index++) {
      retDivs.push(
        <React.Fragment key={index}>
          <Box width={210} marginRight={0.5} my={5}>
            <Skeleton variant='rect' width={210} height={118} /> <Skeleton />
            <Skeleton width='60%' />
          </Box>
        </React.Fragment>
      )
    }
    return retDivs
  }
  return (
    <Grid container wrap='wrap'>
      {loading ? _getSkeletons() : _getWinners()}
    </Grid>
  )
}
