import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">
              NetflixGPT
            </h3>
            <p className="text-sm">© 2024 NetflixGPT, Inc.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">About</h3>
            <ul>
              <li className="mb-2">
                <a href="/browse" className="hover:text-white">
                  Company
                </a>
              </li>
              <li className="mb-2">
                <a href="/browse" className="hover:text-white">
                  Team
                </a>
              </li>
              <li className="mb-2">
                <a href="/browse" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="/browse" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">Help</h3>
            <ul>
              <li className="mb-2">
                <a href="/browse" className="hover:text-white">
                  Support Center
                </a>
              </li>
              <li className="mb-2">
                <a href="/browse" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/browse" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="/browse" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="/browse" className="hover:text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24H12v-9.3H9.28v-3.6H12V8.41c0-2.69 1.64-4.17 4.03-4.17 1.15 0 2.14.09 2.42.13v2.8h-1.66c-1.3 0-1.55.62-1.55 1.52v2h3.1l-.4 3.6h-2.7V24h5.27A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0z" />
                </svg>
              </a>
              <a href="/browse" className="hover:text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.94 4.56c-.88.39-1.83.65-2.82.77a4.92 4.92 0 002.16-2.71 9.87 9.87 0 01-3.12 1.18 4.92 4.92 0 00-8.38 4.48 13.96 13.96 0 01-10.14-5.14 4.92 4.92 0 001.52 6.56 4.88 4.88 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.83 4.93 4.93 0 01-2.22.08 4.93 4.93 0 004.6 3.42 9.86 9.86 0 01-6.11 2.1c-.39 0-.78-.02-1.17-.07a13.93 13.93 0 007.55 2.21c9.06 0 14.02-7.51 14.02-14.02 0-.21 0-.42-.02-.62a10.02 10.02 0 002.46-2.54z" />
                </svg>
              </a>
              <a href="/browse" className="hover:text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.41 3.59 8.07 8.17 8.7-.11-.76-.21-1.92.05-2.75.23-.74 1.5-4.73 1.5-4.73s-.38-.77-.38-1.9c0-1.78 1.03-3.11 2.32-3.11 1.09 0 1.62.82 1.62 1.8 0 1.09-.7 2.73-1.07 4.26-.3 1.27.64 2.3 1.89 2.3 2.27 0 3.82-2.89 3.82-6.32 0-2.61-1.76-4.56-4.96-4.56-3.61 0-5.87 2.69-5.87 5.66 0 1.03.3 1.78.77 2.35.22.26.26.36.18.65-.06.21-.2.7-.26.9-.08.3-.34.41-.62.3-1.73-.71-2.51-2.6-2.51-4.74 0-3.52 2.86-7.74 8.56-7.74 4.54 0 7.55 3.29 7.55 6.82 0 4.69-2.61 8.18-6.46 8.18-1.29 0-2.51-.67-2.92-1.44 0 0-.7 2.78-.86 3.35-.26.94-.77 1.88-1.25 2.6.98.3 2.02.46 3.09.46 5.52 0 10-4.48 10-10s-4.48-10-10-10z" />
                </svg>
              </a>
              <a href="/browse" className="hover:text-white">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c-5.437 0-9.837 4.4-9.837 9.837 0 5.437 4.4 9.837 9.837 9.837s9.837-4.4 9.837-9.837c0-5.437-4.4-9.837-9.837-9.837zm0 1.84c4.436 0 8.017 3.581 8.017 8.017 0 4.436-3.581 8.017-8.017 8.017-4.436 0-8.017-3.581-8.017-8.017 0-4.436 3.581-8.017 8.017-8.017zm0 2.207a5.787 5.787 0 100 11.574 5.787 5.787 0 000-11.574zm0 1.898a3.889 3.889 0 110 7.778 3.889 3.889 0 010-7.778zm6.406-1.567a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">
            © 2024 NetflixGPT, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
