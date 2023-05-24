import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import React from 'react'
import AppbarDesktop from './appbarDesktop';
import AppbarMobile from './appbarMobile';

export default function Appbar() {
    const theme=useTheme();
    const matches= useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div>
        {matches ? <AppbarMobile matches={matches}/> : <AppbarDesktop matches={matches}/>}
    </div>
  )
}
