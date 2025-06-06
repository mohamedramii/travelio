import React, { useRef, useEffect, useCallback } from 'react';

const WhyChooseTravelioSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Function to play video - wrapped in useCallback to maintain reference stability
  const playVideo = useCallback(() => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => console.error('Error playing video:', error));
    }
  }, [isPlaying]);

  // Handle play button click
  const handlePlayButtonClick = () => {
    playVideo();
  };

  // Set up intersection observer to detect when video is in viewport
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // When 50% of the video is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          // Pause video when not in view (optional)
          // videoRef.current?.pause();
        }
      });
    }, options);

    // Save current ref value for cleanup
    const currentVideoRef = videoRef.current;

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, [playVideo]);
  // Features data for the 6 boxes
  const features = [
    {
      title: "Deep local knowledge & logistical expertise",
      iconSrc: "/public/images/icons/local-knowledge-icon.png"
    },
    {
      title: "Global network: 500+ trusted travel agents",
      iconSrc: "/public/images/icons/global-network-icon.png"
    },
    {
      title: "Powerful B2B booking system",
      iconSrc: "/public/images/icons/booking-system-icon.png"
    },
    {
      title: "24/7 multilingual customer support",
      iconSrc: "/public/images/icons/customer-support-icon.png"
    },
    {
      title: "Competitive pricing via partnerships",
      iconSrc: "/public/images/icons/pricing-icon.png"
    },
    {
      title: "Tailored itineraries for your audience",
      iconSrc: "/public/images/icons/tailored-icon.png"
    }
  ];

  return (
    <section ref={sectionRef} className="flex flex-col items-center pt-14 pb-20 px-4 md:px-8 lg:px-12 xl:px-24 w-full max-w-[1920px] mx-auto relative">
      {/* Title section with SVG underline */}
      <div className="relative flex flex-col items-center w-full mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#222222]">
          Why Choose <span className="relative inline-block text-[#014E82]">Travelio?
            {/* SVG shape under text */}
            <img 
              src="/public/images/shape under word.svg" 
              alt="Decorative shape" 
              className="absolute w-[233px] h-[18px] -bottom-2 left-0 -z-10" />
          </span>
        </h2>
      </div>

      {/* Main content container */}
      <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12">
        {/* Left side - Video/Image with border */}
        <div className="w-full lg:w-[45%] h-[414px]">
          <div className="relative w-full h-full rounded-3xl overflow-hidden border-[15px] border-[#014E82]">
            {/* Video container */}
            <div className="w-full h-full relative">
              <video 
                ref={videoRef} 
                src="/public/video/Generated File May 25, 2025 - 3_42PM.mp4"
                className="w-full h-full object-cover"
                playsInline
                muted
                loop
                preload="auto"
              />
              {/* Play button overlay - only shown before video plays */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="w-20 h-20 flex items-center justify-center rounded-full bg-white bg-opacity-70 text-[#014E82]"
                    onClick={handlePlayButtonClick}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5.14v14l11-7-11-7z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right side - Features grid */}
        <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-2 bg-white rounded-3xl "
            >
              {/* Icon container */}
              <div className="mb-6 relative">
                {/* Blue background shape */}
                <div className="w-14 h-14 bg-[rgba(0,153,210,0.1)] rounded-[18px_5px_10px] absolute -bottom-2 -right-2 transform scale-x-[-1]"></div>
                
                {/* Feature icon */}
                <div className="w-16 h-16 relative z-10">
                  <img 
                    src={feature.iconSrc} 
                    alt={feature.title}
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              
              {/* Feature title */}
              <h3 className="text-center text-lg font-semibold text-[#1E1D4C] px-2">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTravelioSection;
