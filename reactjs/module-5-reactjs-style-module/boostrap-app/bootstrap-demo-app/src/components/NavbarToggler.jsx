import React from 'react';
import {
  Container,
  Row,
  Nav,
  NavbarBrand,
  Button,
  Card,
  CardHeader,
  CardBody,
} from 'react-bootstrap';

import slider1 from '../assets/images/slider1.png';
import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.jpg';
import p1 from '../assets/images/p1.webp';
import p2 from '../assets/images/p2.webp';
import p3 from '../assets/images/p3.webp';
import p4 from '../assets/images/p4.webp';
function NavbarToggler() {
  return (
    <>
      <Nav className="nav navbar-expand-md bg-dark text-white p-2">
        <NavbarBrand className="text-white fs-3 p-2 ms-3">
          Flipkart App
        </NavbarBrand>

        <ul className="navbar-links">
          <li>
            <a href="">Home</a>
          </li>

          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>

          <li>
            <a href="">
              Cart{' '}
              <span className="badge badge-sm bg-danger text-white">0</span>
            </a>
          </li>
        </ul>
      </Nav>

      {/* carsels */}

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* content */}

      <Container className="p-2 mt-5">
        <Row>
          <div className="col-md-3 p-3">
            <h2 className="text-center bg-dark text-white">Categories</h2>
            <ul className="category-links">
              <li>
                <a href="">Electronics Items</a>
              </li>

              <li>
                <a href="">Kids Items</a>
              </li>
              <li>
                <a href="">Shoes</a>
              </li>
              <li>
                <a href="">Assesories</a>
              </li>
            </ul>
            <h2 className="text-center bg-dark text-white">Offers Zone</h2>
            <div className="col-md-12">
              <p>
                <img src={p3} alt="products" className="img-fluid" />
              </p>
              <p>
                <b className="fs-2">Noise smart watch</b>
              </p>
              <p>
                <b className="fs-5">Price :</b>Rs. 4500 -/
              </p>
              <p>
                <b className="fs-2">
                  <Button className="btn btn-dark text-white">AddToCart</Button>
                </b>
              </p>
            </div>
          </div>
          <div className="col-md-9 p-3">
            <h2>50% off on selected Items</h2>
            <hr />
            <Card>
              <CardHeader className="bg-dark text-white">
                Electronics Items{' '}
                <Button className="btn btn-sm bg-white text-dark float-end">
                  View More
                </Button>
              </CardHeader>
              <CardBody>
                <Row>
                  <div className="col-md-4">
                    <p>
                      <img
                        src={p1}
                        alt="products"
                        className="img-fluid w-100"
                      />
                    </p>
                    <p>
                      <b className="fs-2">Noise smart watch</b>
                    </p>
                    <p>
                      <b className="fs-5">Price :</b>Rs. 4500 -/
                    </p>
                    <p>
                      <b className="fs-2">
                        <Button className="btn btn-dark text-white">
                          AddToCart
                        </Button>
                      </b>
                    </p>
                  </div>

                  <div className="col-md-4">
                    <p>
                      <img src={p2} alt="products" className="img-fluid" />
                    </p>
                    <p>
                      <b className="fs-2">Noise smart watch</b>
                    </p>
                    <p>
                      <b className="fs-5">Price :</b>Rs. 4500 -/
                    </p>
                    <p>
                      <b className="fs-2">
                        <Button className="btn btn-dark text-white">
                          AddToCart
                        </Button>
                      </b>
                    </p>
                  </div>

                  <div className="col-md-4">
                    <p>
                      <img
                        src={p3}
                        alt="products"
                        className="img-fluid w-100"
                      />
                    </p>
                    <p>
                      <b className="fs-2">Noise smart watch</b>
                    </p>
                    <p>
                      <b className="fs-5">Price :</b>Rs. 4500 -/
                    </p>
                    <p>
                      <b className="fs-2">
                        <Button className="btn btn-dark text-white">
                          AddToCart
                        </Button>
                      </b>
                    </p>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default NavbarToggler;
