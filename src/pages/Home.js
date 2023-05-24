import { Container, ThemeProvider } from '@mui/material'
import React, { useEffect } from 'react'
import theme from '../styles/themes'
import Promotions from '../components/promotion/Promotions'
import Appbar from '../components/appBar'

import Categorie from '../components/categorie/Categorie'
import Flag from '../components/Flag'
import BracCard from '../components/cards/BracCard'
import VideoComp from '../components/videopart/VideoComp'
import Partenaire from '../components/Partenaire/Partenaire'
import Newsletter from '../components/newsletter/Newsletter'
import Footer from '../components/Footer'
import ProductCardExample from '../components/cards'
import { Title } from '../styles/card/card'

export default function Home() {
    useEffect(() => {
        document.title = "Shopinet";
      }, []);
    return (
        <ThemeProvider theme={theme}>
            <Promotions />
            <Appbar />

            <Title>Produit Populaire</Title>
            <Container>
            <ProductCardExample />
            </Container>
          
            <Categorie />
            <Flag />
            <Title>Nos bracelet</Title>
            <BracCard />
            <VideoComp />
            <Partenaire />
            <Newsletter />
            <Footer />
        </ThemeProvider>
    )
}
