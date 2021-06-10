import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 mt-10 md:px-0 px-4">
      <div className="max-w-screen-xl m-auto p-4 overflow-hidden">
        <div className="flex md:w-auto py-6">
          <ul className="flex md:flex-wrap flex-nowrap text-gray-500">
            <div className="md:flex md:pr-10 pr-2">
              <li className="pr-10 py-6 whitespace-nowrap tracking-wide">
                About us
              </li>
              <li className="pr-10 py-6 whitespace-nowrap tracking-wide">
                Tool Box
              </li>
              <li className="pr-10 py-6 whitespace-nowrap tracking-wide">
                Contact us
              </li>
              <li className="pr-10 py-6 whitespace-nowrap tracking-wide">
                Blog
              </li>
            </div>
            <div className="md:flex">
              <li className="pr-10 py-6 whitespace-nowrap tracking-wide">
                Review
              </li>
              <li className="pr-10 py-6 whitespace-nowrap tracking-wide">
                Privacy Policy
              </li>
              <li className="pr-10 py-6 whitespace-nowrap tracking-wide">
                Terms of Use
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
