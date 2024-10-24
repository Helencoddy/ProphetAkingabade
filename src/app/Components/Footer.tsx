import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        className="bg-blue-950 md:rounded-lg shadow m-4 w-[100%] mx-auto"
        // style={{
        //   background:
        //     "linear-gradient(45deg, rgb(5, 1, 24), rgba(38, 13, 129, 0.7))",
        // }}
      >
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src="Logo.png" className="h-8" alt="" />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span> */}
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li> */}
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              ProphetAkingbade™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
