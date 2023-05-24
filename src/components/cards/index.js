import { Box, Card, CardContent, CardMedia, Container } from '@mui/material';
import { Circle } from '@mui/icons-material';
import { Colors } from '../../styles/themes';
import { Price, Title1 } from '../../styles/card/card';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    imageSrc: '/assets/1.png',
    name: 'T-shirt quantité adulte',
    price: '50 TND',
    colors: [Colors.primary, Colors.secondary, Colors.danger, Colors.inverse],
  },
  {
    id: 2,
    imageSrc: '/assets/2.png',
    name: 'T-shirt quantité enfant',
    price: '30 TND',
    colors: [Colors.primary, Colors.secondary, Colors.danger],
  },
  {
    id: 3,
    imageSrc: '/assets/3.png',
    name: 'Pantalon pour homme',
    price: '80 TND',
    colors: [Colors.primary, Colors.danger],
  },
  {
    id: 4,
    imageSrc: '/assets/4.png',
    name: 'Pantalon pour homme',
    price: '80 TND',
    colors: [Colors.primary, Colors.danger],
  },
];

const ProductCardExample = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <Container>
 <Box display="flex" flexWrap="nowrap">
      {products.map((product) => (
        <Card
          key={product.id}
          onMouseEnter={() => handleHover(product.id)}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'relative',
            top: hoveredCard === product.id ? '10px' : '0',
            transition: 'top 0.3s',
            width: '30%',
            height: '50%',
            boxShadow: hoveredCard === product.id ? '0px 0px 10px rgba(0, 0, 0, 0.3)' : 'none',
            border: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            marginRight: '30px',
            marginLeft:'10px' // Adjust the spacing between cards
          }}
        >
          <CardContent>
            <Link to='/DetailsProduct'><CardMedia
              component="img"
              alt="Original Image"
              height="300"
              image={product.imageSrc}
              style={{ borderRadius: 5 }}
            /></Link>
            

            <div>
              <Title1>{product.name}</Title1>
              <Price style={{ textAlign: 'center' }}>{product.price}</Price>
              <Box display="flex" justifyContent="center" mt={1} alignItems="center">
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
                      padding: '2px 2px',
                      borderRadius: '16px',
                    }}
                  >
                    +{product.colors.length - 2}
                  </Box>
                )}
              </Box>
            </div>
          </CardContent>
        </Card>
      ))}
    </Box>
    </Container>
   
  );
};

export default ProductCardExample;


/*import { Container, Card, CardMedia, CardContent, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Colors } from '../../styles/themes';
import { Title, CardsContainer, ProductCard, Image, Price, ColorItem, ColorList, Title1 } from '../../styles/card/card';
import { Link } from 'react-router-dom';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { Circle } from '@mui/icons-material';
import { useState } from 'react';
const products = [
  {
    id: 1,
    imageSrc: '/assets/1.png',
    name: 'T-shirt quantité adulte',
    price: '50 TND',
    colors: [Colors.primary, Colors.secondary, Colors.danger, Colors.inverse],
  },
  {
    id: 2,
    imageSrc: '/assets/2.png',
    name: 'T-shirt quantité enfant',
    price: '30 TND',
    colors: [Colors.primary, Colors.secondary,Colors.danger,],
  },
  {
    id: 3,
    imageSrc: '/assets/3.png',
    name: 'Pantalon pour homme',
    price: '80 TND',
    colors: [Colors.primary, Colors.danger],
  },
  {
    id: 4,
    imageSrc: '/assets/4.png',
    name: 'Pantalon pour homme',
    price: '80 TND',
    colors: [Colors.primary, Colors.danger],
  },
  
];


 const ProductCardExample = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <CardsContainer style={{ border: 'none', display: 'flex', flexWrap: 'wrap' }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{ flexBasis: '20%', padding: '10px' }}
          onMouseEnter={() => handleHover(product.id)}
          onMouseLeave={handleMouseLeave}
        >
          <ProductCard hovered={hoveredCard === product.id}>
            <Link to="/DetailsProduct">
              <Image component="img" src={product.imageSrc} alt="Product image" />
            </Link>
            <CardContent style={{ textAlign: 'center', transition: 'transform 0.3s' }}>
              <Title1>{product.name}</Title1>
              <Price>{product.price}</Price>
              <Box display="flex" justifyContent="center" mt={1} alignItems="center">
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
            </CardContent>
          </ProductCard>
        </div>
      ))}
    </CardsContainer>
  );
};

export default ProductCardExample;*/

