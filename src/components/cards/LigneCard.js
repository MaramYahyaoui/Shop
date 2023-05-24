import { Box, CardContent, Container } from '@mui/material'
import React from 'react'
import { CardsContainer, ColorItem, ColorItem1, ColorList, ColorList1, Image, Price, ProductCard, Title1 } from '../../styles/card/card'
import { Link } from 'react-router-dom'
import { Colors } from '../../styles/themes'
import { Circle } from '@mui/icons-material'

export default function LigneCard() {
    const products = [
        {
          id: 1,
          imageSrc: '/assets/1.png',
          name: 'T-shirt quantité adulte',
          price: '50 TND',
          colors: [Colors.primary, Colors.secondary, Colors.danger, Colors.inverse],
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In triistique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam. Pellentesque  nec tristique sapien etiam non augue lacus."

        },
        {
          id: 2,
          imageSrc: '/assets/2.png',
          name: 'T-shirt quantité enfant',
          price: '30 TND',
          colors: [Colors.primary, Colors.secondary,Colors.danger, ],
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In triistique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam. Pellentesque  nec tristique sapien etiam non augue lacus."
        },]
  return (
<Container>
  {products.map((product) => (
    <div key={product.id} style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
      <ProductCard style={{ flexBasis: '100%', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Image component="img" src={product.imageSrc} alt="Product image" style={{ width: '200px', height: 'auto' }} />
        <CardContent style={{ marginLeft: '10px' }}>
          <h2>{product.name}</h2>
          <h6>{product.price}</h6>
          <Box display="flex"  mt={1} >
              {product.colors.slice(0, 2).map((color) => (
                <Circle
                  key={color}
                  sx={{
                    color: color,
                    width: 16,
                    height: 16,
         
                  }}
                  fontSize="small"
                />
              ))}
              {product.colors.length > 2 && (
                <Box
                  sx={{
                    background: 'white',
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '2px 4px',
                    borderRadius: '16px',
                   
                  }}
                >
                  +{product.colors.length - 2}
                </Box>
              )}
            </Box>
          <h6 style={{color:Colors.dim_grey}}>{product.description}</h6>
        </CardContent>
      </ProductCard>
    </div>
  ))}
</Container>

  )
}

