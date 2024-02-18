import React from "react";
import { MdArrowUpward } from "react-icons/md";

const BackToTop = () => {
  const handleBackToTop = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="fixed bottom-3 right-3 z-50">
      <div
        onClick={handleBackToTop}
        className="p-3 bg-teal-500 rounded-lg shadow-lg cursor-pointer "
      >
        <MdArrowUpward className="text-xl font-semibold text-white flex" />
      </div>
    </div>
  );
};

export default BackToTop;
