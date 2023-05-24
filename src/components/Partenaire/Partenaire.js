import { Container } from '@mui/material';
import React from 'react';

export default function Partenaire() {
  const images = [
    "assets/amazon.png",
    "assets/sportify.png",
    "assets/feedly.png",
    "assets/hopin.png",
    "assets/upwork.png",
    "assets/lattice.png"
  ];

  const handleImageHover = (event) => {
    event.target.style.filter = "grayscale(0%)";
  };

  const handleImageLeave = (event) => {
    event.target.style.filter = "grayscale(100%)";
  };

  return (
    <Container>
            <div style={{ display: 'flex' , marginTop:20, }}>
      {images.map((image, index) => (
        <div key={index} style={{ marginRight: 10 }}>
          <img
            src={image}
            alt={`Partenaire ${index}`}
            style={{
              filter: 'grayscale(100%)',
              transition: 'filter 0.3s',
              borderWidth: 1,
              width:'70%'
            }}
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
          />
        </div>
      ))}
    </div>
    </Container>

  );
}
