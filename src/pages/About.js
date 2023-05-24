import React, { useEffect, useState } from 'react'
import MainLayout from '../Layout/MainLayout';
import { Box, Container, Rating } from '@mui/material';
import { Colors } from '../styles/themes';
import Quality from '../components/Quality';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function About() {
  useEffect(() => {
    document.title = "Qui Somme Nous";
  }, []);
  const [selectedBox, setSelectedBox] = useState(null);
  const [value, setValue] = useState(0); 
  const boxContent = [
    {
      question: 'Vous aider à vous développer c est ce qui nous fait avancer',
      answer:
        'Vous nous faites confiance pour votre réputation, c est pourquoi nous vous offrons une qualité sur laquelle vous pouvez compter. Nous sommes là pour transformer vos idées en produits qui se démarquent et durent dans le temps.'
    },
    {
      question: 'Une mode et des choix responsables ?',
      answer:
        'Nous faisons tout notre possible pour être plus respectueux de la planète que nous partageons tous, tout en proposant des produits de qualité et en aidant nos clients à faire croître leur entreprise.',
    },
    {
      question: 'Une mode et des choix responsables ?',
      answer:
        'Nous faisons tout notre possible pour être plus respectueux de la planète que nous partageons tous, tout en proposant des produits de qualité et en aidant nos clients à faire croître leur entreprise.',
    },
    // Add more objects for additional box content
  ];

  const handleBoxClick = (index) => {
    setSelectedBox(index === selectedBox ? null : index);
  };
  return (

    <MainLayout pageTitle="Qui Somme Nous">
      <Container>
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50, marginLeft: 40 }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ textTransform: 'uppercase' }}>bienvenue a shopinet</h1>
            <p style={{ color: Colors.dim_grey, fontSize: 12 }}>Découvrez notre Marketplace shopinet ! A travers notre plateforme, on cherche à créer un véritable changement en offrant une expérience digitale exceptionnelle entre les vendeurs et les clients.</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ marginTop: 50, marginRight: 20 }}>
                <Box
                  sx={{
                    width: '150px',
                    height: '100px',
                    borderRadius: '4px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    textAlign: 'center',
                    alignItems: 'center',

                  }}

                >
                  <h3 style={{ color: Colors.danger, fontSize: 20, marginTop: 10 }}>48M </h3>
                  <p style={{ fontSize: 10, color: Colors.dim_grey, fontWeight: '600', textAlign: 'left', marginLeft: 15 }}>  investi dan du materiel d'impression</p>
                </Box >
                <Box
                  sx={{
                    width: '150px',
                    height: '100px',
                    borderRadius: '4px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}

                >
                  <p style={{ color: Colors.danger, marginTop: 10, fontWeight: 'bold', fontSize: 20 }}>64M </p>
                  <p style={{ fontSize: 10, color: Colors.dim_grey, fontWeight: '600', textAlign: 'left', marginLeft: 15 }}>  vendus par les clients via Shopinet</p>
                </Box >
              </span>
              <span>
                <Box
                  sx={{
                    width: '150px',
                    height: '100px',
                    borderRadius: '4px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    textAlign: 'center',
                    alignItems: 'center'
                  }}

                >
                  <p style={{ color: Colors.danger, marginTop: 10, fontWeight: 'bold', fontSize: 20 }}>1,400 </p>
                  <p style={{ fontSize: 10, color: Colors.dim_grey, fontWeight: '600', textAlign: 'left', marginLeft: 15 }}>  articles traités chaque mois</p>
                </Box >
                <Box
                  sx={{
                    width: '150px',
                    height: '100px',
                    borderRadius: '4px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    textAlign: 'center',
                    alignItems: 'center'
                  }}

                >
                  <p style={{ color: Colors.danger, marginTop: 10, fontWeight: 'bold', fontSize: 20 }}>26M </p>
                  <p style={{ fontSize: 10, color: Colors.dim_grey, fontWeight: '600', textAlign: 'left', marginLeft: 15 }}>  articles livrés en toute confiance</p>
                </Box >
              </span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src='assets/about.png' style={{ width: '80%' }} />
          </div>
        </section>
        <section style={{ marginLeft: 40 }}>
          <h1 style={{ textTransform: 'uppercase' }}>notre histoire</h1>
          <p style={{ fontSize: 13, color: Colors.dim_grey }}>Shopinet est une nouvelle expérience d’achat en ligne en Tunisie qui propose une Place de Marché, permettant aux acheteurs majeurs d’entrer en relation avec des vendeurs, particuliers ou professionnels , dans le but d’acheter des produits de marques nationales et internationales dans le marché tunisien avec une excellente qualité de service .
            <br /> L’inspiration de l’appellation « SHOPINET» est issue du mot Anglais « SHOP » qui signifie le Magasin et du mot Anglais « Inter-Net» qui signifie l’internet. Cela confère la diversité des produits que propose notre plateforme de vente en ligne en Tunisie.
            Notre site web « Shopi-net.com » est un site de vente en ligne inhabituel, la navigation à travers ses pages est absolument pratique et facile.
          </p>
          <p style={{ fontSize: 13, color: Colors.danger, textAlign: 'center', fontWeight: '600', marginTop: 50 }}>"Nous avons des t-shirts personnalisés dans une gamme de<br />
            coupes et de tailles, afin que tout le monde puisse porter<br />
            votre marque ou votre message."</p>
        </section>
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50, marginLeft: 40 }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <img src="assets/about2.png" alt="About" style={{width:'40%'}} />
            <div style={{
              position: 'absolute',
              top: '40%',
              right: 170,
              transform: 'translateY(-30%)',
              width: '200px',
              height: '130px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              backgroundColor: 'white',
              
            }}>
               <Rating
                name="simple-controlled"
                precision={0.5}
                value={value}
                size="small"
                onChange={(event, newValue) => {
                  setValue(newValue);
                  
                }}
                style={{marginLeft: '15px',marginTop:10}}
              />
              <p style={{ fontSize: '15px', color: '#696969', fontWeight: '600', textAlign: 'left',marginLeft: '15px', }}>5000+ Avis</p>
                <img src='assets/person.png'  style={{marginLeft: '15px',}}/>
            </div>
          </div>
          <div style={{ flex: 1, marginLeft: 20 }}>
            {boxContent.map((content, index) => (
              <React.Fragment key={index} >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 500,
                    height: 50,
                    backgroundColor: selectedBox === index ? Colors.danger : Colors.dove_gray,
                    borderRadius: 3,
                    cursor: 'pointer',
                    marginBottom: 4,
                    color: selectedBox === index ? 'white' : 'black',
                  }}
                  onClick={() => handleBoxClick(index)}
                >
                  <h5 style={{ marginRight: 'auto', marginLeft: 20 }}>{content.question}</h5>
                  <KeyboardArrowDownIcon style={{ marginRight: 5 }} onClick={(event) => event.stopPropagation()} />
                </Box>
                {selectedBox === index && (
                  <p style={{ fontSize: 12, width: 500, lineHeight: 1.8, marginTop: 10 }}>{content.answer}</p>
                )}
              </React.Fragment>

            ))}
          </div>
        </section>
        <section style={{ marginLeft: 40,marginBottom:30 }}>
          <h1 style={{ textTransform: 'uppercase',marginBottom:50 }}> TOUTES LES FONCTIONNALITÉS DONT VOUS AVEZ BESOIN</h1>
        <Quality />

        </section>
        

      </Container>

    </MainLayout>
  )
}
