import React, { Children } from 'react'
import Promotions from '../components/promotion/Promotions'
import Footer from '../components/Footer'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import { AppbarHeader } from '../styles/appbar'
import MenuIcon from "@mui/icons-material/Menu";
import { useUIContext } from '../context/ui'
import { Colors } from '../styles/themes'

export default function MainLayout({ children, pageTitle }) {
    const { setDrawerOpen } = useUIContext();
  
    return (
      <div>
        <Promotions />
        <div>
          <IconButton onClick={() => setDrawerOpen(true)} style={{ position: 'relative ', top: -13, left: 1250 }}>
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <AppbarHeader src="/assets/logoshopinet1.png" style={{ position: 'relative', top: 0, left: 20, right: 0 }} />
          </Link>
        </div>
        <div style={{
          backgroundColor: Colors.gray1,
          width: '100%',
          marginBottom: 10,
          height: '10vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold'
        }}>
          <span style={{ color: Colors.dim_grey, marginRight: 2 }}>Shopinet </span> --- {pageTitle}
        </div>
  
        <div>{children}</div>
        <Footer />
      </div>
    )
  }
  