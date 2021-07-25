import React from "react";
import "./header.css";

export const Header: React.FC = () => {
  return (
    <div className="lg:text-3xl text-2xl font-extrabold sticky flex top-0">
      <span className="flex-grow flex justify-center header_content bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        BROCOCOLI & CO.
      </span>
      <span className="lg:flex-grow flex-grow-0 header_spacer" />
      <span className="lg:flex-grow flex-grow-0 header_icon lg:mr-3 hidden lg:block">
        <img
          className="m3-6 rounded-full w-8 h-8 mr-0 ml-auto"
          src="/broccoli.png"
          alt="img"
        />
      </span>
    </div>
  );
};
