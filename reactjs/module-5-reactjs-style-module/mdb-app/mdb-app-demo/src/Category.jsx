import React from 'react';
import { MDBNavbar } from 'mdb-react-ui-kit';
export default function Category() {
  return (
    <>
      <MDBNavbar className="w-100 p-2">
        <ul className="sidebar-cat">
          <li>
            <a href="">Laravel Course</a>
          </li>
          <li>
            <a href="">React Course</a>
          </li>
          <li>
            <a href="">BlockChain Course</a>
          </li>
          <li>
            <a href="">Angular Items</a>
          </li>
          <li>
            <a href="">Wordpress course</a>
          </li>
          <li>
            <a href="">Offers</a>
          </li>
        </ul>
      </MDBNavbar>
    </>
  );
}
