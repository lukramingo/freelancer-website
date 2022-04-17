import React from 'react';
import NavBar from './Navbar';
import MastHead from './Masthead';
import PortFolio from './Portfile';
import AboutUs from './About';
import ContactUs from './Contact';
import Footer from './Footer';
import CopyRight from './Copyright';
import ModalShow from './Modal';

const App = () => {
    return (
        <div>
            <NavBar/>
            <MastHead/>
            <PortFolio/>
            <AboutUs/>
            <ContactUs/>
            <Footer/>
            <CopyRight/>
            <ModalShow/>
        </div>
    )
}

export default App;