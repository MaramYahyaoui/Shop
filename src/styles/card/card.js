import { Card, CardMedia, List, ListItem, Typography, styled } from "@mui/material";
import { Colors } from "../themes";

export const ProductCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 2,
    borderRadius: 10,
    border: 'none',
    width: '80%',
    height: '60%',
    marginLeft: 10,
    boxShadow: 'none',
    
  });
  
 export  const Image = styled(CardMedia)({
    width: '100%',
  
    objectFit: 'cover',
    marginTop: 1,
    backgroundColor:Colors.grayShop,
    borderRadius:10,

  });
  
  export const Title = styled(Typography)({
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center'
  });
  export const Title1 = styled(Typography)({
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    
    textAlign: 'center'
  });
  
  export const Price = styled(Typography)({
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.primary,
    marginBottom: 5,
  });
  
  export const ColorList = styled(List)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50
  });
  
  export const ColorItem = styled(ListItem)(({ color }) => ({
    background: color,
    borderRadius: '100%',
    margin: 5,
    width:0,
    height: '0.8rem',
    fontSize: '0.8rem',
  }));
  export const ColorList1 = styled(List)({
    display: 'flex',
    flexWrap: 'wrap',
  
    borderRadius:50
  });
  
  export const ColorItem1 = styled(ListItem)(({ color }) => ({
    background: color,
    borderRadius: '100%',
    margin: 5,
    width:0,
    height: '0.8rem',
    fontSize: '0.8rem',
  }));
  export const CardsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  });