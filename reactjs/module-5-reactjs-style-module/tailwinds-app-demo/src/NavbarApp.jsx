import React from 'react';

export default function NavbarApp() {
  return (
    <>
      <nav className="w-full p-5 bg-black  text-white top-0 sticky z-10">
        <a
          href=""
          className="navbar-brand text-4xl animate-pulse text-white ms-14"
        >
          {' '}
          Blogs App
        </a>
        <ul className="flex flex-row gap-11 inline-flex ms-40">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Mobiles</a>
          </li>
          <li>
            <a href="">Electronics</a>
          </li>
          <li>
            <a href="">Blogs</a>
          </li>
          <li>
            <a href="">Feedback</a>
          </li>
          <li>
            <a href="" className="bg-pink-700 p-3 rounded-2xl">
              Account
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
