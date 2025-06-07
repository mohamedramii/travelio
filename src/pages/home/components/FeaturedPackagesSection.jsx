import React from 'react';

const FeaturedPackagesSection = () => {
  // Package data
  const packages = [
    {
      id: 1,
      name: "Classic Istanbul Explorer",
      duration: "5 Days",
      description: "Historic sites • Bosphorus cruise • Turkish cuisine experience",
      image: "/images/custom/istanbul.png"
    },
    {
      id: 2,
      name: "Antalya Luxury Escape",
      duration: "6 Days",
      description: "All-inclusive resort • Yacht day trip • Pampering spa treatments",
      image: "/images/custom/antalya.png"
    },
    {
      id: 3,
      name: "Cappadocia Adventure",
      duration: "4 Days",
      description: "Hot-air balloon ride • Fairy chimneys • Cave hotel stay",
      image: "/images/custom/cappadocia.png"
    },
    {
      id: 4,
      name: "Halal & Spiritual Tour",
      duration: "7 Days",
      description: "Mosque visits • Halal dining • Islamic heritage sites",
      image: "/images/custom/halal-tour.png"
    }
  ];

  return (
    <section className="flex flex-col justify-center md:flex-row items-center py-14 px-4 md:px-8 lg:px-12 w-full max-w-[1920px] mx-auto gap-8 md:gap-20">
      {/* Left side - Title and CTA */}
      <div className="flex flex-col gap-6 w-full md:w-1/3 lg:w-[343px]">
        {/* Title and subtitle container */}
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl font-bold font-['Work_Sans'] text-[#222222] leading-[54px]">
            Featured Packages
            <br />
            <span className="relative text-[#014E82]">
              & Custom Tours
              {/* SVG underline positioned under 'Custom Tours' only */}
              <span className="absolute left-0 -bottom-2 w-full">
                <img 
                  src="/images/shape under word.svg" 
                  alt="Decorative underline" 
                  className="h-4 w-auto"
                />
              </span>
            </span>
          </h2>
          <p className="text-lg font-medium font-['Work_Sans'] text-[#535353] leading-[27px]">
            Explore our most popular travel packages
          </p>
        </div>
        
        {/* CTA Button */}
        <button className="flex items-center px-4 py-3 bg-[#014E82] text-white rounded-full w-fit">
          <span className="font-semibold mr-3 font-['Work_Sans']">Explore All Packages</span>
          <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full border border-[#0099D2]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
      
      {/* Right side - Package cards */}
      <div className="flex flex-nowrap justify-center overflow-x-auto gap-6 w-full md:w-2/3 pb-4 hide-scrollbar">
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className="flex-shrink-0 w-[256px] h-[400px] rounded-[24px] overflow-hidden relative group cursor-pointer"
          >
            {/* Package image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img 
                src={pkg.image} 
                alt={pkg.name} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80"></div>
            </div>
            
            {/* Package content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-white text-center font-['Work_Sans']">{pkg.name}</span>
                <span className="font-bold text-[#A3E859] text-2xl text-center font-['Work_Sans'] transition-transform duration-700 ease-in-out group-hover:scale-150">{pkg.duration}</span>
              </div>
              
              <p className="text-center text-white font-medium text-base font-['Work_Sans']">
                {pkg.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturedPackagesSection;
