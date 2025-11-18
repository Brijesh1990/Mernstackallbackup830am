import React from 'react';

export default function ContactUs() {
  return (
    <>
      <div className="w-full mx-auto bg-black flex flex-row">
        <div className="contact-address text-white p-14 w-1/2">
          <h1 className="p-3 text-white text-6xl">Contact with us</h1>
          <p className="mt-15">
            <b className="text-xl">Office Address :</b>
            150 feet ring road rajkot
          </p>
          <p>
            <b className="text-xl">Email Us :</b>
            150 feet ring road rajkot
          </p>
          <p>
            <b className="text-xl">Mobile :</b>
            (+91)-9998003879
          </p>
        </div>
        <div className="contact-us text-white p-14 w-1/2">
          <h1 className="p-3 text-white text-6xl">Form</h1>
          <form className="mt-15">
            <div className="form-group mt-5">
              <input
                type="text"
                placeholder="Name *"
                className="p-2 bg-white w-full text-black"
              />
            </div>

            <div className="form-group mt-5">
              <input
                type="text"
                placeholder="Email *"
                className="p-2 bg-white w-full text-black"
              />
            </div>

            <div className="form-group mt-5">
              <input
                type="text"
                placeholder="Phone *"
                className="p-2 bg-white w-full text-black"
              />
            </div>

            <div className="form-group mt-5">
              <input
                type="text"
                placeholder="Subject *"
                className="p-2 bg-white w-full text-black"
              />
            </div>

            <div className="form-group mt-5">
              <textarea
                type="text"
                placeholder="Message *"
                className="p-2 bg-white w-full text-black"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
