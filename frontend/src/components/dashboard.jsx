import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
//custom component imports
import Media from './media'

export default function Dashboard() {
  return (
    <Box overflow='hidden' clone>
      <Paper>
        <Box px={3}>
          <Media loading />
          <Media />
        </Box>
      </Paper>
    </Box>
  )
}
