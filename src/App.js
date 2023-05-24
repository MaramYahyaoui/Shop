
import './App.css';
import { Button, Container, ThemeProvider } from '@mui/material';
import { useEffect, } from 'react';
import theme from './styles/themes';
import Appbar from './components/appBar';
import ProductCard from './components/cards';
import Categorie from './components/categorie/Categorie';
import BracCard from './components/cards/BracCard';
import VideoComp from './components/videopart/VideoComp';
import Partenaire from './components/Partenaire/Partenaire';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/Footer';
import Flag from './components/Flag';
import Promotions from './components/promotion/Promotions';

function App() {
  useEffect(() => {
    document.title = "Shopinet-Home";
  }, []);
  return (
<></>


  );
}

export default App;
