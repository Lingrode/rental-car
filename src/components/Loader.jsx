import React, { useEffect } from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50 overflow-hidden">
      <PuffLoader />
    </div>
  );
};

export default Loader;
