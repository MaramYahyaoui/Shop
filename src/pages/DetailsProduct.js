import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { Box, Button, Checkbox, Container, Divider, ImageList, ImageListItem, Pagination, } from '@mui/material';
import { Colors } from '../styles/themes';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { IconButton, Typography } from '@mui/joy';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MyCard from '../components/cards/card';
import Popup from '../components/Popup';
import Popup1 from '../components/Popup1';
import ProductCardExample from '../components/cards';
export default function DetailsProduct() {
    const [selectedImage, setSelectedImage] = useState('assets/det.png');
    const images = ["assets/det.png", "assets/left.png", "assets/pull.png"];
    const [count, setCount] = React.useState(0);
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };
    const product = [
        {
            id: 4,
            name: 'Pantalon pour homme',
            price: '80 TND',
            colors: [Colors.primary, Colors.danger],
            categorie: "Debardeur",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique malesuada elit, ut facilisis tellus elementum id. Nullam id consectetur diam. Pellentesque nec tristique sapien etiam non augue lacus."
        },
    ]

    return (
        <MainLayout pageTitle="Boutique">
            <Container>
                <section style={{ display: 'flex', justifyContent: 'center', marginTop: 50, marginLeft: 40 }}>
                    <div style={{ flex: 1, marginLeft: 90 }}>
                        <img src={selectedImage} style={{ borderRadius: '8px', width: '80%' }} />
                        <ImageList sx={{ width: 250, height: 110, marginTop: 3, marginLeft: 3, borderRadius: '8px' }} cols={3} >
                            {images.map((item) => (
                                <ImageListItem key={item} onClick={() => handleImageClick(item)}>
                                    <img
                                        src={`${item}?w=161&fit=crop&auto=format`}
                                        srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item}
                                        loading="lazy"
                                        style={{ filter: item !== selectedImage ? 'grayscale(40%)' : 'none' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                    <div style={{ flex: 1, marginRight: 90 }}>
                        {product.map((product) => (
                            <div key={product.id} >
                                <h5>{product.price}</h5>
                                <h4>{product.name}</h4>
                                <p style={{ width: '500px', color: Colors.gray, fontSize: 13 }}>{product.description}</p>
                            </div>
                        ))}
                        <div style={{ display: 'flex' }}>
                            <Box style={{ display: 'flex', backgroundColor: Colors.grey, borderRadius: 7, width: 80, alignItems: 'center', justifyContent: 'center' }}>
                                <IconButton
                                    size="small"
                                    style={{ backgroundColor: Colors.grey }}
                                    onClick={() => setCount((c) => c - 1)}
                                >
                                    <Remove fontSize='3px' style={{ color: Colors.dim_grey }} />
                                </IconButton>
                                <Typography fontWeight="2px" textColor="text.secondary" alignItems={'center'} marginLeft={1}>
                                    {count}
                                </Typography>
                                <IconButton
                                    size="small"
                                    style={{ backgroundColor: Colors.grey }}
                                    onClick={() => setCount((c) => c + 1)}
                                >
                                    <Add fontSize='3px' style={{ marginLeft: 5, color: Colors.dim_grey }} />
                                </IconButton>
                            </Box>

                            <div style={{ marginLeft: 30}} >
                            <Popup1 buttonTitle="Achetez Maintenant" />
                            </div>

                        </div>
                        <Divider style={{ marginTop: 15, color: Colors.grey }} />
                        <div>
                            {product.map((product) => (
                                <div key={product.id} >
                                    <div style={{ display: 'flex' }}> <p style={{ fontWeight: '400', fontSize: 12 }}>Catégorie :  </p>
                                        <p style={{ color: Colors.gray, fontSize: 12 }}>{product.categorie}</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <p style={{ fontWeight: '400', fontSize: 12 }}>Partager :  </p>
                                        <IconButton style={{backgroundColor:'white'}} >
                                            <FacebookIcon fontSize='small' color={'grey'}  />
                                            <PinterestIcon fontSize='small' color={Colors.gray} />

                                        </IconButton>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
               <section  style={{marginTop:20, marginBottom:30}}>
                <Divider/>
                <ProductCardExample/>
               </section>
            </Container>
            <Pagination count={3} size="small" style={{marginLeft:580, marginBottom:30}}/>

        </MainLayout>
    );
}
/**  <IconButton
          size="sm"
          variant="outlined"
          onClick={() => setCount((c) => c - 1)}
        >
          <Remove />
        </IconButton>
        <Typography fontWeight="md" textColor="text.secondary">
          {count}
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => setCount((c) => c + 1)}
        >
          <Add />
        </IconButton>
        <Checkbox
          onChange={(event) => setShowZero(event.target.checked)}
          checked={showZero}
          label="show zero"
        />
          const [count, setCount] = React.useState(0);
          import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
 */