import React, { useEffect, useState } from "react";
import loading from "../animations/loading.mp4";
function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setShow(false), 3000); // 3s
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-blue-900 flex flex-col items-center justify-center z-50">
      {/* Video as loader */}
      <video
        src={loading}
        autoPlay
        loop
        muted
        className="w-64 h-64 object-contain rounded-lg shadow-xl"
      />

      <h1 className="text-3xl text-yellow-400 font-bold mt-4">X-Axis Institute</h1>
      <p className="text-white/80 mt-1">Excellence in Mathematics</p>
    </div>
  );
}

export default LoadingScreen;
