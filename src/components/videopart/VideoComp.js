import { CardCover } from '@mui/joy'
import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material'
import React from 'react'

export default function VideoComp() {
  return (
    <Container style={{ marginLeft: 30, backgroundColor: 'white' }}>


      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Card style={{ width: '50%', boxShadow: 'none', marginLeft: 60 }}>
          <video
            autoPlay
            loop
            muted
            poster="assets/kids1.jpg"
            style={{ width: '100%', position: 'relative', borderRadius: 10 }}
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </Card>
        <Typography
          level="h6"
          fontWeight="lg"
          textColor="#fff"

          style={{ marginLeft: 'auto' }}
        >
          <h3>Achetez plus vite avec l'application Shopinet</h3> <br />
          Disponible pour iOS et Android<br />
          <img src='assets/fleche.png' style={{ marginLeft: 90, marginTop: 20, marginBottom: 10 }} />

          <div>

            <img src='assets/google.png' style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)', borderWidth: 1, borderRadius: 5, marginRight: 5 }} />


            <img src='assets/app.png' style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)', borderWidth: 1, borderRadius: 5, marginLeft: 5 }} />

          </div>

        </Typography>
      </div>

    </Container>

  )
}
