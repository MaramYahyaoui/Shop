import React, { useState, useEffect } from 'react';
import { Button, IconButton, Typography } from '@mui/material';
import { AppbarHeader } from '../../styles/appbar/index';
import Actions from './action';
import MenuIcon from '@mui/icons-material/Menu';
import { useUIContext } from '../../context/ui';
import { Colors } from '../../styles/themes';
import { Link } from 'react-router-dom';
import Popup from '../Popup';
import Modal from 'react-modal';

export default function AppbarDesktop({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  const [imageIndex, setImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const images = [
    'assets/banner.png',
    'assets/banner1.png',
    'assets/humainblack.png',
    'assets/Humanblanc.png'
  ];

  return (
    <>
      <div style={{ position: 'relative', width: '100%' }}>
        <img
          src={images[imageIndex]}
          alt={`Image ${imageIndex}`}
          style={{ width: '50%', animation: 'slide-in-left 1s ease-out' }}
        />
        <img
          src={images[(imageIndex + 1) % 2]}
          alt={`Image ${(imageIndex + 1) % 2}`}
          style={{ width: '50%', animation: 'slide-in-right 1s ease-out' }}
        />
        <Typography
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            fontSize: '32px',
            fontWeight: 'bold',
            color: 'black',
            fontFamily: 'Poppins'
          }}
        >
          Obtenez jusqu'à 30% de <br />
          réduction sur les <br />
          nouveautés
        </Typography>
        <IconButton onClick={() => setDrawerOpen(true)} style={{ position: 'absolute ', top: 0, left: 1250 }}>
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <AppbarHeader src="/assets/logoshopinet1.png" style={{ position: 'absolute', top: 0, left: 20, right: 0 }} />
        </Link>
        <Popup buttonTitle="Decouvrir l'offre" />

      </div>

      <Actions />
    </>
  );
}
