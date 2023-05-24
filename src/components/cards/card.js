import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Box, Typography } from '@mui/material';
import { Circle } from '@mui/icons-material';
import { Colors } from '../../styles/themes';
import { Price, Title1 } from '../../styles/card/card';

const MyCard = () => {
  const products = [
    {
      id: 1,
      imageSrc: '/assets/1.png',
      name: 'T-shirt quantité adulte',
      price: '50 TND',
      colors: [Colors.primary, Colors.secondary, Colors.danger, Colors.inverse],
    },
  ];
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Card
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        top: hovered ? '-5px' : '0',
        transition: 'top 0.3s',
        width: '20%',
        height: '50%',
        boxShadow: hovered ? '0px 0px 10px rgba(0, 0, 0, 0.3)' : 'none',
      }}
    >
      {products.map((product) => (
        <CardContent key={product.id}>
          <CardMedia
            component="img"
            alt="Original Image"
            height="300"
            image={hovered ? product.imageSrc : product.imageSrc}
            style={{borderRadius:5}}
          />

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
                    padding: '2px 4px',
                    borderRadius: '16px',
                  }}
                >
                  +{product.colors.length - 2}
                </Box>
              )}
            </Box>
          </div>
        </CardContent>
      ))}
    </Card>
  );
};

export default MyCard;
