import React, { useRef } from 'react';

// Internal CSS for custom styling
const styles = {
  hideScrollbar: {
    msOverflowStyle: 'none', /* IE and Edge */
    scrollbarWidth: 'none',  /* Firefox */
  },
  hideScrollbarWebkit: {
    '::-webkit-scrollbar': {
      display: 'none', /* Chrome, Safari, Opera */
    },
  }
};

const KeyDestinationsSection = () => {
  // Reference for the scroll container
  const scrollContainerRef = useRef(null);
  
  // Handle scroll navigation
  const scrollToDirection = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  // Destination data
  const destinations = [
    {
      name: 'Istanbul',
      image: '/public/images/destinations/istanbul.png',
      description: 'Where East meets West — explore centuries of history in the Hagia Sophia, shop in the Grand Bazaar, cruise the Bosphorus, and savor world-class cuisine in this vibrant city that never sleeps.'
    },
    {
      name: 'Antalya',
      image: '/public/images/destinations/antalya.png'
    },
    {
      name: 'Pamukkale',
      image: '/public/images/destinations/pamukkale.png'
    },
    {
      name: 'Bursa',
      image: '/public/images/destinations/bursa.png'
    },
    {
      name: 'Konya',
      image: '/public/images/destinations/konya.png'
    }
  ];

  return (
    <section className="flex flex-col items-center pt-14 pb-0 md:px-8 lg:px-12 xl:px-24 gap-8 w-full max-w-[1920px] mx-auto relative">
      {/* Title section with underline decoration */}
      <div className="relative flex flex-col items-center w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#222222]">
          Key Destinations <span className="relative inline-block text-[#014E82]">We Serve
            {/* SVG shape under text */}
            <img 
              src="/public/images/shape under word.svg" 
              alt="Decorative shape" 
              className="absolute w-[255px] h-[18px] -bottom-2 left-0 -z-10" />
          </span>
        </h2>
      </div>

      {/* Main destination hero image with overlay */}
      <div className="w-full h-auto relative rounded-3xl overflow-hidden z-10">
        <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] relative">
          {/* Main hero image */}
          <img 
            src="/public/images/destinations/istanbul.png"
            alt="Istanbul"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          
          {/* Text container */}
          <div className="absolute bottom-46 left-6 md:left-12 max-w-[600px] text-white p-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Istanbul</h3>
            <p className="text-base md:text-lg font-medium">
              Where East meets West — explore centuries of history in the Hagia Sophia, shop in the Grand Bazaar, cruise the Bosphorus, and savor world-class cuisine in this vibrant city that never sleeps.
            </p>
          </div>
        </div>
      </div>

      {/* Destination cards carousel */}
      <div className="relative w-full -mt-32 sm:-mt-36 md:-mt-44 lg:-mt-52 xl:-mt-60 z-20 px-2 md:px-6 lg:px-8">
        <div 
          className="grid grid-cols-5 gap-4 pb-10 pt-6 overflow-x-auto" 
          ref={scrollContainerRef}
          style={{ 
            scrollBehavior: 'smooth', 
            ...styles.hideScrollbar,
            WebkitOverflowScrolling: 'touch',
            gridAutoFlow: 'column',
            gridAutoColumns: 'calc(20% - 14px)'
          }}
        >
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="w-full aspect-[3/4] rounded-3xl overflow-hidden relative shadow-xl transform transition-transform hover:scale-105 duration-300"
            >
              {/* Card image */}
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-full object-cover"
              />
              {/* Card content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              
              {/* Card name */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button 
          className="absolute top-1/2 left-1 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 active:bg-gray-100 transition-colors"
          aria-label="Previous destination"
          onClick={() => scrollToDirection('left')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#014E82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button 
          className="absolute top-1/2 right-1 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 active:bg-gray-100 transition-colors"
          aria-label="Next destination"
          onClick={() => scrollToDirection('right')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="#014E82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default KeyDestinationsSection;
