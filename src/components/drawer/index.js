import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    styled,
  } from "@mui/material";
  import { useUIContext } from "../../context/ui";
  import CloseIcon from "@mui/icons-material/Close";
  import { DrawerCloseButton } from "../../styles/appbar";
  import { lighten } from "polished";
  import { Colors } from "../../styles/themes";
  
 
  
  
  export default function AppDrawer() {
    const { drawerOpen, setDrawerOpen } = useUIContext();
  
    return (
      <>
        {drawerOpen && (
          <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon
              sx={{
                fontSize: "2.5rem",
                color: lighten(0.09, Colors.secondary),
              }}
            />
          </DrawerCloseButton>
        )}
        <Drawer open={drawerOpen}>
          <List>
            <ListItemButton>
              <ListItemText>Femme</ListItemText>
            </ListItemButton>
           
            <ListItemButton>
              <ListItemText>Homme</ListItemText>
            </ListItemButton>
            
            <ListItemButton>
              <ListItemText>Enfants</ListItemText>
            </ListItemButton>
           
            <ListItemButton>
              <ListItemText>About Us</ListItemText>
            </ListItemButton>
        
            <ListItemButton>
              <ListItemText>Contact Us</ListItemText>
            </ListItemButton>
           
          </List>
        </Drawer>
      </>
    );
  }