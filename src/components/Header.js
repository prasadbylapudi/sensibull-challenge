import React from 'react'
import { Toolbar, AppBar, Typography, Box } from '@mui/material'
import Logo from './assets/sensibull_logo.png'
function Header() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: 64,
            }}
            alt="sensibull"
            src={Logo}
          />
          <Typography variant="h5">Sensibull Challenge</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
