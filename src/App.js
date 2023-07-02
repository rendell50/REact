import logo from './logo.svg';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';

import Nav from './Components/Navbar.js';
import Body from './Components/Body.js';



function App() {
  return (
    <div> 
      <HelmetProvider>
      <Nav/>
      <Body/>
      </HelmetProvider>
      
    </div>
    
  );
}

export default App;
