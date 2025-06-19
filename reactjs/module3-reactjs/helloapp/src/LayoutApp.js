import React from "react";
import HeaderApp from "./components/Header";
import NavbarApp from "./components/Navbar";
import ContentApp from "./components/Content";
import FooterApp from "./components/Footer";
function Layout()
{
    return(
        <>

        <HeaderApp />
        <NavbarApp />
        <ContentApp />
        <FooterApp />

        </>
    )
}
export default Layout