import React, { useEffect, useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { Box, Button, Container } from '@mui/material';
import { Colors } from '../styles/themes';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

export default function FAQ() {
    useEffect(() => {
        document.title = 'FAQ';
    }, []);

    const [selectedBox, setSelectedBox] = useState(null);
    const boxContent = [
        {
            question: 'Comment fonctionne la personnalisation des produits ?',
            answer:
                'Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...',
        },
        {
            question: 'Comment fonctionne la personnalisation des produits ?',
            answer:
                'Nullam imperdiet, sem at fringilla lobortis, sem nibh fringilla nibh, idae gravida mi purus sit amet erat. Ut dictum nisi massa. Maecenas id justo rhoncus, volutpat nunc sit amet, facilisiulum scelerisque...',
        },
        // Add more objects for additional box content
    ];

    const handleBoxClick = (index) => {
        setSelectedBox(index === selectedBox ? null : index);
    };

    return (
        <MainLayout pageTitle="FAQ">
            <Container>
                <section style={{ alignItems: 'center', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 30 }}>Question fréquement posées</h1>
                    <h5>Laissez nous vos montrer comment votre produit prend vie.</h5>
                </section>
                <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                        <h3>Question fréquemment posées</h3>
                        <h4 style={{ color: Colors.dim_grey }}>
                            Vous avez l'idée, nous avons les outils - concevez vos vêtements personnalisés avec nos ressources de conception gratuites
                        </h4>
                    </div>
                    <div style={{ flex: 1 }}>
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
                <section>
                    <Container>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ flex: 1 }}>
                                <h5 style={{fontSize:27}}>

                                    Profitez de vos vacances dans
                                    les meilleurs t-shirts
                                </h5>
                               
                                   <div><img src='assets/fleche.png' style={{   marginLeft:400}} /></div> 
                                   <Link to="/Contact">
                                    <Button style={{ backgroundColor: Colors.danger2, color: 'white', width: '40%', textTransform: 'capitalize', marginRight: 30 }}>
                                        Contacter Nous
                                    </Button></Link> 
                               
                                    <Button style={{ backgroundColor: Colors.danger2, color: 'white', width: '40%', textTransform: 'capitalize' }} >
                                        Télécharger maintenant
                                    </Button>
                               
                            </div>
                            <div style={{ flex: 1 }}>
                                <img src='assets/news2.png' style={{ width: '60%', marginLeft:50 }} />
                            </div>

                        </div>
                    </Container>
                </section>
            </Container>
        </MainLayout>
    );
}
