import React from 'react';
import Footer from '../../components/Landing/Footer';
import Header from '../../components/Landing/Header';
import KeyBenefits from '../../components/Landing/KeyBenefits';
import Navbar from '../../components/NavBar/Navbar';
import MostSearchedPharmaciesSection from '../../components/pharmacy/MostSearchedPharmaciesSection';

const Home = () => (
  <>
    <Header />
    <KeyBenefits/>
    <MostSearchedPharmaciesSection />
    {/* <Footer /> */}
  </>
);

export default Home;
