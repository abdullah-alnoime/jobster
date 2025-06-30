import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-6 bg-gray-900 text-gray-300 rounded-t-md text-center text-sm">
      &copy; {new Date().getFullYear()} JobTrack. All rights reserved.
    </footer>
  );
};

export default Footer;
