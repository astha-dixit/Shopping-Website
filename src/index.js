import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter} from 'react-router-dom'
import AppContextProvider from './context/appcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <BrowserRouter>
  <ChakraProvider>
<AppContextProvider>
    <App />
</AppContextProvider>
  </ChakraProvider>
  </BrowserRouter>

);


reportWebVitals();
