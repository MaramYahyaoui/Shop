import React, { useEffect } from 'react'
import MainLayout from '../Layout/MainLayout';
import { Button, Container, TextField } from '@mui/material';
import { Colors } from '../styles/themes';
import ProductCardExample from '../components/cards';
import Quality from '../components/Quality';

export default function Contact() {
    useEffect(() => {
        document.title = "Contact";
    }, []);
    return (
        <MainLayout pageTitle='Contact'>
            <Container>
                <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop: 20}}>
                    <div style={{ flex: 1 }}>
                        <h1 style={{textTransform:'capitalize'}}>restez  en contact avec nous</h1>
                        <h6 style={{ fontSize: 12, width: 400, lineHeight: 1.8, marginTop: 10, color: Colors.gray }}>
                            Nous parlons bien sûr de coffrets cadeaux de beauté propre - et nous avons un bouquet de beautés pour vous-même ou pour quelqu'un que vous aimez. Ut sed ex elementum, efficitur felis id, varius eros. Aliquam elementum nca.
                        </h6>
                        <h3 >Contact</h3>
                        <h6>Portable: 068 26589 996</h6>
                        <h6>ligne directe: 1900 26886</h6>
                      <h6> E-mail: hello@teespace.com</h6> 
                    </div>
                    <div style={{ flex: 1 }}>
                        <h1 style={{textTransform:'capitalize'}}>envoyer un message </h1>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Prénom"
                                variant="outlined"
                                size="small"
                                style={{ width: 270, backgroundColor: Colors.grey, }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Nom de la famille"
                                variant="outlined"
                                size="small"
                                style={{ marginLeft: 10, width: 295, backgroundColor: Colors.grey, borderWidth: 'none' }}

                            />
                        </div>
                        <TextField
                            fullWidth
                            label="Sujet"
                            id="fullWidth"
                            size="small"
                            style={{ marginTop: 10, backgroundColor: Colors.grey, borderWidth: 'none' }}
                        />
                        <TextField
                            fullWidth
                            rows={4}
                            id="fullWidth"
                            size="small"
                            multiline
                            style={{ marginTop: 10, backgroundColor: Colors.grey, borderWidth: 'none' }}
                        />
                        <Button style={{ backgroundColor: Colors.danger2, color: 'white', width: '20%', textTransform: 'capitalize', marginTop:10, marginLeft:230 }} >
                            soumettre
                        </Button>
                    </div>
                </section>
                <section style={{marginTop:50}}>
                <h1 style={{textTransform:'capitalize'}}>Vous êtes peut être intéressé…</h1>
                    <ProductCardExample/>
                </section>
                <section style={{marginTop:50,marginBottom:50}}>
                    <Quality/>
                </section>
            </Container>


        </MainLayout>
    )
}
