import React, { useState } from 'react';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import { Colors } from '../styles/themes';
import CloseIcon from '@mui/icons-material/Close';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    zIndex: 10000,
    width: '50%',
    height: '61%',
    borderRadius: '12px',
    background: 'linear-gradient( #FFFFFF 20%,#FFE5A0 93.23%)',
    boxShadow: 24,
}

export default function Popup(  {buttonTitle}) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <Button
                style={{
                    position: 'absolute',
                    top: 430,
                    left: 570,
                    right: 0,
                    width: '15%',
                    backgroundColor: Colors.danger2,
                    color: 'whitesmoke'
                }}
                onClick={handleOpen}
            >
                  {buttonTitle}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <button
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                        onClick={handleClose}
                    >
                        <IconButton><CloseIcon /></IconButton>
                    </button>
                    <Typography id="modal-modal-title" variant="h5" component="h2" style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>
                        Pour profiter de nos offres et de vivre une expérience
                        d'essayage virtuel des produits.
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ flex: 1, marginTop: 20 }}> <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }} style={{ fontWeight: '500', textAlign: 'center' }}>
                            Veuillez télécharger notre application
                        </Typography>
                            <img src='assets/fleche.png' style={{ marginLeft: 120, marginTop: 20, marginBottom: 10 }} />
                            <Button style={{ backgroundColor: Colors.danger2, color: 'white', width: '70%', textTransform: 'capitalize', marginTop: 20, marginLeft: 50 }} >
                                Télécharger maintenant
                            </Button>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <img src='assets/appDown.png' />
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
/*const ModalContent = () => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
      setOpen(false);
    };
  
    if (!open) {
      return null;
    }
    return (
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                padding: '20px',
                zIndex: 10000,
                width: '50%',
                height: '61%',
                borderRadius: '12px',
                background: 'linear-gradient( #FFFFFF 20%,#FFE5A0 93.23%)',
                boxShadow: 24,
            }}
        >
            <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={handleClose}
      >
        <IconButton><CloseIcon/></IconButton>
      </button>
            <Typography id="modal-modal-title" variant="h5" component="h2" style={{fontWeight:'bold' , textAlign:'center',marginTop:20}}>
                Pour profiter de nos offres et de vivre une expérience
                d'essayage virtuel des produits.
            </Typography>
            <div style={{ display: 'flex',justifyContent:'center' }}>
                <div style={{ flex: 1, marginTop:20 }}> <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }}style={{fontWeight:'500' , textAlign:'center'}}>
                    Veuillez télécharger notre application
                </Typography>
                    <img src='assets/fleche.png' style={{marginLeft:120,marginTop:20,marginBottom:10}} />
                    <Button style={{ backgroundColor: Colors.danger2, color: 'white', width: '70%', textTransform: 'capitalize',marginTop:20,marginLeft:50 }} >
                        Télécharger maintenant
                    </Button>
                </div>
                <div style={{ display: 'flex' }}>
                    <img src='assets/appDown.png'  />
                </div>
            </div>


        </div>
    );
};

export default ModalContent;
*/