import { Button, Container, TextField } from '@mui/material'
import React from 'react'
import { Colors } from '../../styles/themes'

export default function Newsletter() {
    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 50 }}>
                <div>
                    <h1>
                        Abonnez-vous à notre newsletter.
                    </h1>
                    <h6 style={{color:Colors.dim_grey}}>
                    Recevez les dernières nouvelles, les événements et plus encore <br/> <br/>dans votre boîte de réception..
                    </h6>
                    <TextField fullWidth label="Votre adresse e-mail" id="fullWidth" style={{backgroundColor:Colors.gray1, }} size="small"/>
                </div>
                <div style={{marginLeft:30}}>
                    <img src='assets/fleche.png' style={{marginTop:70}}/>
                    <Button style={{backgroundColor:Colors.danger2 , color:'white', marginTop:30,width:'70%', textTransform:'capitalize'}}>
                        s'abonner
                    </Button>
                </div>
        <div>
            <img src='assets/news.png'/>
        </div>

            </div>
        </Container>
    )
}
