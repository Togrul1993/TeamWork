import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ContextProvider} from './context';


// Style Components start
import './Asests/Header.scss';
import './Asests/Navbar.scss';
import './Asests/NavbarMenu.scss';
import './Asests/NavbarMobil.scss';
import './Asests/Footer.scss';
import './Asests/NavbarMobilMenu.scss';
import './Asests/HeaderFooter.scss';
import './Asests/HeaderBody.scss'
// Style Components end

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>, 
    document.getElementById('root'));
