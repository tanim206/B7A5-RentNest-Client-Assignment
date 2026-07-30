import React from "react";

const GlobalLoading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-md">
      <div className="relative flex items-center justify-center">
        {/* Outer Pulsing Ring */}
        <div className="absolute h-16 w-16 animate-ping rounded-full bg-indigo-500/30"></div>
        {/* Spinning Border */}
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-indigo-200/20 border-t-indigo-500"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-4 text-sm font-medium tracking-widest text-indigo-200 uppercase animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default GlobalLoading;
