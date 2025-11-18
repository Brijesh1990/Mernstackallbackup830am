import React from 'react';
import NavbarApp from './NavbarApp';
import ContactUs from './ContactUs';
export default function ContainerApp() {
  return (
    <>
      <NavbarApp />
      <div className="container mt-14 p-14 bg-black  text-white text-4xl  w-1/2 mx-auto rounded-4xl">
        <span className="animate-pulse">This is Brijesh</span>
      </div>
      <div className="container mt-14 p-14 bg-black  text-white text-4xl  w-1/2 mx-auto rounded-4xl">
        <span className="animate-ping">This is Brijesh</span>
      </div>
      <div class="flex flex-row mt-14 w-1/2 mx-auto">
        <div class="basis-64 bg-pink-500 rounded-4xl mx-auto p-5 text-white">
          01
        </div>
        <div class="basis-64 bg-pink-500 rounded-4xl mx-auto p-5 text-white">
          02
        </div>
        <div class="basis-128 bg-pink-500 rounded-4xl mx-auto p-5 text-white">
          03
        </div>
      </div>
      <div className="w-1/2 mx-auto mt-14 p-14 bg-gray-400">
        <span class="relative flex size-3">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-4xl p-5 bg-sky-400 opacity-75"></span>

          <span class="relative inline-flex size-3 rounded-full bg-sky-500">
            Brijesh
          </span>
        </span>
      </div>
      <div className="rounded-md w-1/2 mx-auto border border-blue-300 p-14 mb-14 mt-14">
        <div className="flex animate-pulse space-x-4">
          <div className="size-10 rounded-full bg-gray-900"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-gray-900"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-900"></div>
                <div className="col-span-1 h-2 rounded bg-gray-900"></div>
              </div>
              <div className="h-2 rounded bg-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
      {/* contact us  */}
      <ContactUs />
    </>
  );
}
