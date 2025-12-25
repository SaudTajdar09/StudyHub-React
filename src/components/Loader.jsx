import React from "react";

const Loader = () => {
  return (
    // 'fixed inset-0' fills the whole screen; 'flex items-center justify-center' centers content
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#16203b] px-4">
      
      {/* Container for the Spinner and Text to keep them aligned */}
      <div className="flex flex-col items-center max-w-sm w-full">
        
        {/* Animated Icon: Responsive sizing using sm: (small screens) */}
        <div className="relative w-16 h-16 sm:w-24 sm:h-24 mb-6">
          <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-blue-600 rounded-full animate-spin"></div>
        </div>

        {/* Text Section: Responsive text sizes */}
        <div className="text-center space-y-3">
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white">
            STUDY <span className="text-blue-600 inline-block animate-bounce">TO</span> EXCEL
          </h2>
          
          <p className="text-sm sm:text-base text-gray-500 font-medium tracking-wide">
            Organizing your path to success...
          </p>

          {/* Responsive Progress Bar */}
          <div className="w-40 sm:w-64 h-1.5 bg-gray-100 rounded-full mt-4 overflow-hidden mx-auto">
            <div className="h-full bg-blue-600 animate-loading-bar"></div>
          </div>
        </div>
      </div>

      {/* Adding the custom keyframe for the bar directly in the component */}
      <style>{`
        @keyframes loading-bar {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 70%; transform: translateX(20%); }
          100% { width: 100%; transform: translateX(100%); }
        }
        .animate-loading-bar {
          animation: loading-bar 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;