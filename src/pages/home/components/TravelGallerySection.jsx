import React from 'react';

const TravelGallerySection = () => {
  // Generate random margin top values between min and max
  const getRandomMarginTop = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  // Define base images array 
  const baseImages = [
    { id: 1, src: "/images/gallery/Image-1.png", width: 250, height: 280 },
    { id: 2, src: "/images/gallery/Image-2.png", width: 180, height: 280 },
    { id: 3, src: "/images/gallery/Image-3.png", width: 250, height: 280 },
    { id: 4, src: "/images/gallery/Image-4.png", width: 250, height: 250 },
    { id: 5, src: "/images/gallery/Image-5.png", width: 180, height: 240 },
    { id: 6, src: "/images/gallery/Image-6.png", width: 270, height: 220 },
    { id: 7, src: "/images/gallery/Image-7.png", width: 150, height: 220 },
    { id: 8, src: "/images/gallery/Image.png", width: 250, height: 244 },
  ];
  
  // Create first set of images with random margin tops
  const galleryImages1 = baseImages.map(img => ({
    ...img,
    marginTop: getRandomMarginTop(0, 100),
    id: `set1-${img.id}`
  }));
  
  // Create second set of images with different random margin tops
  const galleryImages2 = baseImages.map(img => ({
    ...img,
    marginTop: getRandomMarginTop(0, 100),
    id: `set2-${img.id}`
  }));
  
  // Create third set for extra smoothness
  const galleryImages3 = baseImages.map(img => ({
    ...img,
    marginTop: getRandomMarginTop(0, 100),
    id: `set3-${img.id}`
  }));
  
  // Combine all sets
  const galleryImages = [...galleryImages1, ...galleryImages2, ...galleryImages3];

  return (
    <section className="w-full max-w-[1920px] mx-auto flex flex-col items-center py-14 gap-20" style={{ height: '836px' }}>
      {/* Header Container */}
      <div className="flex flex-col justify-center items-center gap-8 w-[667px]">
        {/* Title Container */}
        <div className="flex flex-col items-center gap-2 w-full relative">
          <h2 className="text-[56px] font-bold font-['Work_Sans'] leading-[66px] text-center text-[#222222] w-full">
            Ready to Start Your{' '}
            <span className="relative inline-block">
              Next Adventure?
              {/* Vector underline - using a div with background instead of absolute positioning */}
              <div 
                className="h-[16px] w-[472px] absolute left-0 bottom-[-5px]" 
                style={{ 
                  background: '#F2994A',
                  transform: 'matrix(1, 0, -0.4, 0.92, 0, 0)'
                }}
              />
            </span>
          </h2>
          
          <p className="text-2xl font-medium font-['Work_Sans'] leading-9 text-center text-[#535353] mt-2">
            The world is waiting. Let Travelio turn your travel dream into reality — seamlessly, beautifully, and affordably.
          </p>
        </div>
        
        {/* Button Container */}
        <button className="flex items-center bg-[#014E82] text-white rounded-full px-4 py-0 h-[56px]">
          <span className="font-['Work_Sans'] font-semibold text-base mr-3">Plan My Trip</span>
          <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full border border-[#0099D2]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
      
      {/* Gallery Container with infinite scroll animation */}
      <div className="w-full " style={{ height: '344px' }}>
        <div className="gallery-scroll flex gap-6">
          {/* First set of images with random margin-top values */}
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="flex flex-col" 
              style={{ 
                marginTop: `${image.marginTop}px`,
              }}
            >
              <div 
                className="flex rounded-[24px] overflow-hidden" 
                style={{ 
                  width: `${image.width}px`, 
                  height: `${image.height}px` 
                }}
              >
                <img 
                  src={image.src}
                  alt={`Travel gallery image ${image.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add custom CSS for infinite scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .gallery-scroll {
          animation: scroll 80s linear infinite;
          width: calc(250px * 24 + 24px * 23); /* Approximate width to ensure enough content for smooth scrolling */
        }
        
        /* Make the animation pause on hover for better user experience */
        .gallery-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TravelGallerySection;
