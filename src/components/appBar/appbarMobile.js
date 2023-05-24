import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useUIContext } from "../../context/ui";
import Actions from "./action";

export default function AppbarMobile({matches}){
    const { setDrawerOpen, setShowSearchBox } = useUIContext();
    return (
        <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}style={{marginRight:100}}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader src="/assets/logoshopinet1.png"  />
      <IconButton onClick={() => setShowSearchBox(true)} style={{marginLeft:150}}>
        <SearchIcon />
      </IconButton>
    <Actions />
    </AppbarContainer>
    )
}