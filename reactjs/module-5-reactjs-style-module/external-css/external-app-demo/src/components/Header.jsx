import React from 'react';
import {
  FaAddressBook,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaSnapchat,
} from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <section id="header">
        <div className="call-us">
          <b>Call Us : (+91)-9998003879</b>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search anything here" />
        </div>
        <div className="social-media">
          <span className="icons">
            <FaFacebook className="icons" />
            <FaInstagram className="icons" />
            <FaAddressBook className="icons" />
            <FaSnapchat className="icons" />
            <FaWhatsapp className="icons" />
          </span>
        </div>
      </section>
    </>
  );
}
