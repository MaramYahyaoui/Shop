import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../themes";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "5px 0px 5px 0px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px 0px 5px 0px",
  overflow: "hidden",
  background: Colors.pink,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
     fontFamily: '"Montez", "cursive"',
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  color: Colors.danger2,
  fontSize: "1.5rem",
  fontWeight:'bold',
  textTransform:'uppercase'
}));
