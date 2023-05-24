import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListeProduct from './pages/ListeProduct';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import About from './pages/About';
import DetailsProduct from './pages/DetailsProduct';

const router = createBrowserRouter([
  {
    path: "/" ,
    element: <Home/>
  },
  {
    path: "ProductList" ,
    element: <ListeProduct/>
  },
  {
    path: "FAQ" ,
    element: <FAQ/>
  },
  {
    path: "Contact" ,
    element: <Contact/>
  },
  {
    path: "About" ,
    element: <About/>
  },
  {
    path: "DetailsProduct" ,
    element: <DetailsProduct/>
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <RouterProvider router={router}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
