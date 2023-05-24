import { Box, Card, CardContent, CardMedia, Container } from '@mui/material'
import React, { useState } from 'react'
import { CardsContainer, Image, Price, ProductCard, Title, Title1 } from '../../styles/card/card'
import { Link } from 'react-router-dom';


export default function BracCard() {
    const products = [
        {
          id: 1,
          imageSrc: '/assets/brac1.png',
          name: 'T-shirt quantité adulte',
          price: '50 TND',
          
        },
        {
          id: 2,
          imageSrc: '/assets/brac2.png',
          name: 'T-shirt quantité enfant',
          price: '30 TND',
          
        },
        {
          id: 3,
          imageSrc: '/assets/brac1.png',
          name: 'Pantalon pour homme',
          price: '80 TND',
       
        },
        {
          id: 4,
          imageSrc: '/assets/brac2.png',
          name: 'Pantalon pour homme',
          price: '80 TND',
         
        },
      ];
   
        const [hoveredCard, setHoveredCard] = useState(null);
      
        const handleHover = (id) => {
          setHoveredCard(id);
        };
      
        const handleMouseLeave = () => {
          setHoveredCard(null);
        };
  return (
    <Container style={{marginBottom:80}}>

    <Box display="flex" flexWrap="nowrap">
      {products.map((product) => (
        <Card
          key={product.id}
          onMouseEnter={() => handleHover(product.id)}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'relative',
            top: hoveredCard === product.id ? '10px' : '0',
            transition: 'top 0.4s',
            width: '20%',
            height: '30%',
            boxShadow: hoveredCard === product.id ? '0px 0px 10px rgba(0, 0, 0, 0.3)' : 'none',
            border: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            marginRight: '30px',
            marginLeft:'10px' // Adjust the spacing between cards
          }}
        >
          <CardContent>
            <Link to='/DetailsProduct'>
              <CardMedia
              component="img"
              alt="Original Image"
              height="200"
              image={product.imageSrc}
              style={{ borderRadius: 5 }}
            /></Link>
                 <div>
              <Title1>{product.name}</Title1>
              <Price style={{ textAlign: 'center' }}>{product.price}</Price>
            </div>
          </CardContent>
        </Card>
      ))}
    </Box>
    </Container>
  )
        };
