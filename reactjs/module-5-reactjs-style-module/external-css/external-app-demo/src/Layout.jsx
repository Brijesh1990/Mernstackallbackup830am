import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Content from './components/Content';
import Footer from './components/Footer';
const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      <Content />
      <Footer />
    </>
  );
};
export default Layout;
