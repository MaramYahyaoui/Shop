import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { Container, Pagination } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from '@mui/icons-material/GridView';
import BracCard from '../components/cards/BracCard';
import { GridOnOutlined } from '@mui/icons-material';
import ProductCardExample from '../components/cards';
import LigneCard from '../components/cards/LigneCard';

export default function ListeProduct() {
  const [activeComponent, setActiveComponent] = useState('ProductCardExample');

  const handleGridClick = () => {
    setActiveComponent('ProductCardExample');
  };

  const handleMenuClick = () => {
    setActiveComponent('BracCard');
  };

  return (
    <MainLayout pageTitle="Boutique">
      <Container style={{padding:5}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <text>Affichage de 1 à 12 sur 35 </text>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ marginRight: 5 }}>Voir</p>
            <GridViewIcon
              style={{ color: activeComponent === 'ProductCardExample' ? 'orange' : 'black' }}
              onClick={handleGridClick}
            />
            <MenuIcon
              style={{ color: activeComponent === 'BracCard' ? 'orange' : 'black' }}
              onClick={handleMenuClick}
            />
          </span>
        </div>
        <div>
          {activeComponent === 'ProductCardExample' ? <ProductCardExample /> : <LigneCard />}
        </div>
        <Pagination count={3} size="small" style={{marginLeft:510}}/>
        
      </Container>
    </MainLayout>
  );
}
