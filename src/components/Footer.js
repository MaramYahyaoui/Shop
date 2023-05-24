import React from 'react'
import { Colors } from '../styles/themes'
import { Container, ListItemText, TextField } from '@mui/material'
import { MyList, MyList2 } from '../styles/appbar'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div style={{
            backgroundColor: Colors.gray1,
            width: '100%'
        }}><br/>
            <Container style={{ marginTop: 50 }}>
                <div style={{ display: 'flex', marginLeft: 20, marginRight: 70 , marginTop:50}}>
                    <img src='assets/logoshopinet1.png' style={{ width: '10' }} />
                    <h4 style={{marginLeft:110}}>
                        Information
                    </h4>
                    <h4 style={{marginLeft:200}}>
                        Lien utiles
                    </h4>
                    <h4 style={{marginLeft:190}}>
                        Bullettin
                    </h4>
                </div>

                <div style={{ display: 'flex', marginLeft: 20, marginRight: 50 , marginBottom:10}}>
                    <MyList2  style={{marginLeft:5}}>
                        <ListItemText secondary="Appelez nous sur" />
                        <ListItemText secondary="+ 216 56 987 142" />
                        <ListItemText secondary="Adresse E-mail" />
                        <ListItemText secondary="support@shopinet.tn" />
                    </MyList2>
                    <MyList2 style={{marginLeft:100}} >
                   < Link to="/About" underline="none">    <ListItemText secondary="A propos de nous " /></Link>
                        <ListItemText secondary="Politique de confidentialité" />
                        
                  <Link to="/Contact" underline="none"> <ListItemText secondary="Contact" /></Link>     
                    <Link to="/FAQ">  <ListItemText secondary="FAQ" /></Link>  
                    </MyList2>
                    <MyList2 style={{marginLeft:80}} >
                       
                        <ListItemText secondary="Conditions Générales" />
                        <ListItemText secondary="Livraison" />
                        <ListItemText secondary="Satisfait ou remboursé" />
                        
                    </MyList2>
                    <MyList2  style={{marginLeft:80}}>
                        <ListItemText secondary="Abonnez-vous à notre newsletter" />
                        <br/>
                        <TextField id="outlined-basic" placeholder="Votre adresse e-mail" variant="outlined" size='small' style={{backgroundColor:'white', }}/>
                    </MyList2>
                </div>
                <br/>
                <img src='assets/cartes.png' style={{marginLeft: 400, marginBottom:10, marginTop:40}}/><br/>
                <text style={{fontSize:12, color:Colors.dim_grey,marginLeft: 500, marginBottom:20,}}> © 2023 Shopinet. All rights reserved.</text><br/>
            </Container>


        </div>
    )
    }