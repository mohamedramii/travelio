import React from 'react';

const PartnershipSection = () => {
  // Array of partnership features
  const partnershipFeatures = [
    {
      id: 1,
      title: "Agent-only B2B tools",
      icon: "/images/icons/agent-tools.png"
    },
    {
      id: 2,
      title: "Dedicated account managers",
      icon: "/images/icons/account-managers.png"
    },
    {
      id: 3,
      title: "Customized marketing support",
      icon: "/images/icons/marketing-support.png"
    },
    {
      id: 4,
      title: "Easy package adjustments",
      icon: "/images/icons/package-adjustments.png"
    }
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto flex justify-center items-center py-14 px-4 lg:px-12 xl:px-[200px]" style={{ height: '389px' }}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20 w-full">
        {/* Left column - Text and CTA */}
        <div className="flex flex-col gap-6 w-full lg:w-[343px]">
          {/* Title container with orange underline */}
          <div className="flex flex-col gap-2 relative">
            <h2 className="text-3xl lg:text-4xl font-bold font-['Work_Sans'] leading-[54px] text-[#222222]">
              Let's Partner
              <br />
              <span className="relative inline-block">
                Together
                {/* Orange underline - positioned with relative/absolute only where necessary */}
                <div className="relative h-0 w-[231px] ml-1">
              <img 
                src="/images/shape under word.svg" 
                alt="Decorative underline" 
                className="absolute top-[-10px] w-full"
              />
            </div>
              </span>
            </h2>
            
            <p className="text-lg font-medium font-['Work_Sans'] leading-[27px] text-[#535353] mt-2">
              Are you a travel agent or tour operator looking to offer your clients an unforgettable experience in Turkey?
            </p>
          </div>
          
          {/* Contact us button */}
          <button className="flex items-center bg-[#014E82] text-white rounded-full px-4 pr-1 py-0 h-[56px] w-fit">
            <span className="font-['Work_Sans'] font-semibold text-base mr-3">Contact us</span>
            <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full border border-[#0099D2]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
        
        {/* Right column - Feature cards */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 w-full lg:flex-1">
          {partnershipFeatures.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col gap-6 p-6 bg-white rounded-[24px] w-full sm:w-[calc(50%-12px)] lg:w-[256px] h-[190px]"
            >
              {/* Icon container */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[rgba(0,153,210,0.1)]">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12"
                />
              </div>
              
              {/* Feature title */}
              <h3 className="text-lg font-semibold font-['Work_Sans'] leading-[27px] text-[#222222]">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
