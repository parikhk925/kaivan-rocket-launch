import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Complete loading after fade out animation
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-all duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/30 via-orange-100/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo/Brand with fade-in animation */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-gray-900">Kaivan</span>
            <span className="text-orange-500"> Digital</span>
          </h1>
          <div className="flex items-center justify-center space-x-2 text-orange-500">
            <Sparkles className="w-5 h-5 animate-spin-slow" />
            <p className="text-lg font-medium text-gray-600">AI-Powered Ad Platform</p>
            <Sparkles className="w-5 h-5 animate-spin-slow" />
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-loading-bar"></div>
        </div>

        {/* Loading text */}
        <p className="mt-6 text-gray-500 text-sm animate-pulse">Preparing your experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
