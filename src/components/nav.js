import React, { useState } from "react";
import bar from "./bar.svg";
import Link from "gatsby-link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navtoggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="flex items-center flex-wrap p-2 z-10 bg-white fixed top-0 w-full">
        {/* logo */}
        <Link href="/">
          <a className="inline-flex p-2 m- transition-all">
            <h1 className="lg:text-2xl md:text-3xl font-extrabold text-gray-700 lg:tracking-wider uppercase">
              Kovan Blog
            </h1>
          </a>
        </Link>
        {/* logo ends */}
        {/* cart Icon */}
        <div className="flex ml-auto">
          <Link href="/cart">
            <a
              className="inline-flex p-2 ml-auto lg:hidden"
              onClick={() => (isOpen ? navtoggle() : null)}
            >
              {/* <sub className="  ">{contextData.value}</sub> */}
            </a>
          </Link>
          {/* cart Icon ends */}
          {/* hamburger menu bar */}
          <div
            className="inline-flex p-3 hover:bg-gray-400 rounded-lg lg:hidden ml-auto"
            onClick={() => {
              navtoggle();
            }}
          >
            <img className="md:w-6 w-5" src={bar} alt="style" />
          </div>
        </div>
        {/* hamburger menu bar ends */}
        {/* list of menu starts */}
        <div
          className={
            isOpen
              ? "w-full lg:inline-flex lg:flex-grow lg:w-auto"
              : "w-full lg:inline-flex lg:flex-grow lg:w-auto hidden"
          }
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col ">
            <Link href="/">
              <a
                className="lg:inline-flex lg:w-auto font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl
              transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={() => {
                  navtoggle();
                }}
              >
                <h3>Home</h3>
              </a>
            </Link>

            <Link href="/services">
              <a
                className="lg:inline-flex lg:w-auto font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl  transition duration-300 ease-in-out transform hover:rotate-3 hover:-translate-y-1 hover:scale-110"
                onClick={() => {
                  navtoggle();
                }}
              >
                <h3>Service</h3>
              </a>
            </Link>

            <Link href="/about">
              <a
                className="lg:inline-flex lg:w-auto font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl  transition duration-300 ease-in-out transform hover:-rotate-3 hover:-translate-y-1 hover:scale-110"
                onClick={() => {
                  navtoggle();
                }}
              >
                <h3>About</h3>
              </a>
            </Link>
            {/* <Link href="/login">
              <a
                className="lg:inline-flex lg:w-auto font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl
              transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={() => {
                  navtoggle();
                }}
              >
                <h3>Login</h3>
              </a>
            </Link> */}
            <Link href="/register">
              <a
                className="bg-blue-700 lg:inline-flex lg:w-auto font-semibold text-white text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl
              transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={() => {
                  navtoggle();
                }}
              >
                <h3>Register</h3>
              </a>
            </Link>
          </div>
        </div>
        {/* list of menu ends */}
      </nav>
    </header>
  );
};
export default Nav;
