import { Box } from '@mui/material'
import React from 'react'

const Wrapper = ({ children, margin = '25px' }) => {
  return (
    <Box m={margin}>
    {children}
  </Box>
  )
}

export default Wrapper