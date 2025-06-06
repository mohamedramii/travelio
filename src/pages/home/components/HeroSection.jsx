import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // State for slider background images
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  // Background images array with useMemo to prevent recreating on each render
  const backgroundImages = useMemo(() => [
    "/public/images/Layer 1.png",
    "/public/images/layer 2.png",
    "/public/images/layer 3.png"
  ], []);
  
  // References for airplane animations
  const visibleAirplaneRef = useRef(null);
  const incomingAirplaneRef = useRef(null);
  
  // Function to handle background image transition with useCallback to avoid infinite renders
  const transitionToNextBg = useCallback(() => {
    if (animating) return; // Prevent multiple transitions at once
    
    setAnimating(true);
    
    // Simple two-phase animation:
    // 1. Current plane exits to the right and slightly upward to simulate takeoff
    if (visibleAirplaneRef.current) {
      visibleAirplaneRef.current.style.transform = 'translateX(200%) translateY(-25rem)'; 
      visibleAirplaneRef.current.style.opacity = '0';
    }
    
    // After exit animation completes, change background and bring in new plane
    setTimeout(() => {
      // Change background
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      
      // Show new plane immediately after background changes
      setTimeout(() => {
        // 2. New plane comes in from left to center in ONE SMOOTH MOTION
        if (incomingAirplaneRef.current) {
          incomingAirplaneRef.current.style.transform = 'translateX(-50%)';
          incomingAirplaneRef.current.style.left = '50%';
          incomingAirplaneRef.current.style.opacity = '1';
        }
        
        // After all animations complete, reset for next transition
        setTimeout(() => {
          // Swap references
          const temp = visibleAirplaneRef.current;
          visibleAirplaneRef.current = incomingAirplaneRef.current;
          incomingAirplaneRef.current = temp;
          
          // Reset offscreen plane to starting position without animation
          if (incomingAirplaneRef.current) {
            incomingAirplaneRef.current.style.transition = 'none'; // Temporarily disable transitions
            incomingAirplaneRef.current.style.transform = 'translateX(-100%)';
            incomingAirplaneRef.current.style.left = '0';
            incomingAirplaneRef.current.style.opacity = '0';
            
            // Force browser to process these changes before re-enabling transitions
            setTimeout(() => {
              incomingAirplaneRef.current.style.transition = 'transform 1.5s ease-in-out, opacity 1.5s ease-in-out, left 1.5s ease-in-out';
              setAnimating(false);
            }, 50);
          } else {
            setAnimating(false);
          }
        }, 2000);
      }, 300);
    }, 1000);
  }, [backgroundImages, animating]);
  
  // Auto transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      transitionToNextBg();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [transitionToNextBg]);
  
  return (
    <div className="w-full flex justify-center px-4 md:px-8 mt-4 overflow-hidden">
      {/* Main container with rounded corners - Using flexbox instead of absolute positioning */}
      <div className="relative w-full max-w-[1856px] h-[850px] rounded-3xl overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,78,130,0.5)] to-transparent z-10"></div>
          <div className="relative w-full h-full">
            {backgroundImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Hero Background ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentBgIndex === index ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>

        {/* Cloud elements - Always positioned at bottom of section regardless of screen width */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto z-[7]">
          <img 
            src="/public/images/Cloud 7 copy 3.png" 
            alt="Cloud" 
            className="w-full h-auto transform -rotate-8 translate-y-[65%]"
          />
        </div>

        {/* Airplanes with animation - Lower z-index to keep below content */}
        <div className="flex justify-center items-center w-full h-full absolute inset-0" style={{ zIndex: 5 }}>
          {/* Current visible airplane - positioned at center bottom */}
          <div 
            ref={visibleAirplaneRef}
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: '-10%',
              width: '60%',
              height: 'auto',
              zIndex: 6,
              opacity: 1,
              transition: 'transform 1.5s ease-in-out, opacity 1.5s ease-in-out'
            }}
          >
            <img 
              src="/public/images/AIR.png" 
              alt="Airplane" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Incoming airplane - initially positioned off-screen left */}
          <div 
            ref={incomingAirplaneRef}
            style={{
              position: 'absolute',
              left: '0',
              transform: 'translateX(-100%)',
              bottom: '-10%',
              width: '60%',
              height: 'auto',
              zIndex: 5,
              opacity: 0,
              transition: 'transform 1.5s ease-in-out, opacity 1.5s ease-in-out, left 1.5s ease-in-out'
            }}
          >
            <img 
              src="/public/images/AIR.png" 
              alt="New Airplane" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Page indicators on the left - Using flexbox for alignment */}
        <div className="hidden lg:flex flex-col items-center justify-center absolute left-14 top-1/2 -translate-y-1/2 z-20">
          <div className="relative flex flex-col items-center h-[292px] w-[26px]">
            {/* Vertical line */}
            <div className="absolute h-[246px] w-[1px] bg-white/10"></div>
            
            {/* Page indicators container */}
            <div className="absolute top-[43px] flex flex-col items-center gap-12 h-[154px]">
              {/* Map through background images to create indicators */}
              {backgroundImages.map((_, index) => (
                <div 
                  key={index}
                  className={`flex justify-center items-center ${currentBgIndex === index ? 'w-[26px] h-[26px]' : 'w-4 h-4'} rounded-full bg-white/12 border border-white/10 backdrop-blur-lg transition-all duration-300`}
                >
                  {currentBgIndex === index && (
                    <span className="text-white text-xs font-normal">{index + 1}</span>
                  )}
                </div>
              ))}
            </div>
            
            {/* Slide count indicator */}
            <div className="absolute bottom-0">
              <span className="text-white text-sm font-medium block transform -rotate-90">
                {`0${currentBgIndex + 1}/0${backgroundImages.length}`}
              </span>
            </div>
          </div>
        </div>

        {/* Main content container - Using flexbox for centered alignment with high z-index to ensure visibility */}
        <div className="flex flex-col items-center justify-start pt-16 relative h-full" style={{ zIndex: 50, position: 'relative' }}>
          {/* Content wrapper - max width container */}
          <div className="w-full max-w-[993px] flex flex-col items-center gap-6">
            {/* Subtitle in transparent container */}
            <div className="flex justify-center items-center px-3 py-2   w-auto max-w-auto bg-white/10 border border-white/10 backdrop-blur-xl rounded-lg">
              <p className="text-white text-center text-sm md:text-lg font-medium">
                More Than A trip – It's A Travelio Experience
              </p>
            </div>
            
            {/* Main heading and description container */}
            <div className="flex flex-col items-center w-full max-w-[993px]">
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white text-center leading-tight mb-2">
                Your Trusted Destination<br />Management Partner in Turkey
              </h1>
              <p className="text-white text-center max-w-[748px] text-base md:text-lg font-medium">
                Travelio DMC crafts personalized travel experiences across Turkey, combining local expertise with global reach through 500+ agents for smooth, authentic journeys.
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <Link 
            to="/journeys" 
            className="flex items-center mt-6 bg-[#014E82] text-white font-semibold px-4 pr-1 py-2 w-auto h-14 rounded-full"
          >
            <span className="text-base font-semibold mr-3">Discover Unforgettable Journeys</span>
            <div className="flex justify-center items-center w-10 h-10 bg-white border border-[#0099D2] rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
