import { Box, List,  TextField,  styled } from "@mui/material";
import { Colors } from "../themes";

// container
export const AppbarContainer = styled(Box)(({ src,type })=> ({

   
  display: type === "row" ? "flex" : "block",
  
    alignItems: 'center',
    backgroundSize: "cover",
    backgroundImage: `url(${src})`,
    backgroundRepeat: "no-repeat",
    width:'50%',
    flexGrow: 2,
    
}));

//header

export const AppbarHeader = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "100px",
  marginTop:20,

  
  [theme.breakpoints.down("md")]: {
    width: "150px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    height: "80px",
  },
  }));

  export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));
export const Banner = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow:2,

}));
/*export   const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,  
  borderTop: `1px solid ${Colors.border}`
}));*/
export const MyList2 = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
justifyContent: "center",
alignItems: "center",
fontSize:20,
fontWeight:'600'
}));
/*export const textField= styled(TextField)(()=>({
  backgroundColor:Colors.grey,
  borderWidth:'none'
 
}));*/