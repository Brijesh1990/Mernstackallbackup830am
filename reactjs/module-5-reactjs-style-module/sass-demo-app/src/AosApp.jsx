import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function AosApp() {
  Aos.init();

  return (
    <>
      <section id="aos-app">
        <h1>AOS </h1>
        <p>AOS Animate On Scroll Library</p>
        <p className="scroll">scroll down</p>
        <p>
          <FaArrowDown className="arrow" />
        </p>
      </section>

      {/* fade aos */}
      <section id="aos-fade">
        <hr />
        <h1>Fade</h1>
        <hr />

        <div className="box1" data-aos="fade-left" data-aos-duration="500">
          Fade Left
        </div>
        <div className="box2" data-aos="fade-right" data-aos-duration="500">
          Fade Right
        </div>

        <div className="box1" data-aos="fade-up" data-aos-duration="500">
          Fade up
        </div>
        <div className="box2" data-aos="fade-down" data-aos-duration="500">
          Fade down
        </div>

        <div className="box1" data-aos="fade-up-left" data-aos-duration="500">
          Fade up left
        </div>
        <div className="box2" data-aos="fade-up-right" data-aos-duration="500">
          Fade up right
        </div>
      </section>

      <div class="clearfix"></div>
      {/* fade aos */}
      <section id="aos-fade">
        <hr />
        <h1>FLip</h1>
        <hr />

        <div className="box1" data-aos="flip-left" data-aos-duration="500">
          Fade Left
        </div>
        <div className="box2" data-aos="flip-right" data-aos-duration="500">
          Fade Right
        </div>

        <div className="box1" data-aos="flip-up" data-aos-duration="500">
          Fade up
        </div>
        <div className="box2" data-aos="flip-down" data-aos-duration="500">
          Fade down
        </div>
      </section>

      <div class="clearfix"></div>
      {/* fade aos */}
      <section id="aos-fade">
        <hr />
        <h1>Zoom</h1>
        <hr />

        <div className="box1" data-aos="zoom-in" data-aos-duration="5000">
          Fade Left
        </div>
        <div className="box2" data-aos="zoom-in-up" data-aos-duration="5000">
          Fade Right
        </div>

        <div className="box1" data-aos="zoom-in-down" data-aos-duration="5000">
          Fade up
        </div>
        <div className="box2" data-aos="zoom-in-left" data-aos-duration="5000">
          Fade down
        </div>

        <div className="box1" data-aos="zoom-in-right" data-aos-duration="5000">
          Fade up left
        </div>
        <div className="box2" data-aos="zoom-out" data-aos-duration="5000">
          Fade up right
        </div>
      </section>
    </>
  );
}
