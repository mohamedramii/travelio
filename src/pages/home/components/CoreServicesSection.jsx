import React from 'react';

const CoreServicesSection = () => {
  // Services data with title, description, and badge color
  const services = [
    {
      id: "01",
      title: "Tailor-Made Travel Packages",
      description: "Individual or group travel, personalized to every interest and budget.",
      badgeColor: "#8BC5E0" // Blue
    },
    {
      id: "02",
      title: "Stay booking & management",
      description: "Discover top-rated hotels, charming boutique stays, and unbeatable exclusive deals.",
      badgeColor: "#F67F57" // Orange
    },
    {
      id: "03",
      title: "Luxury & VIP Travel",
      description: "Indulge in first-class experiences with private guides, premium luxury vehicles, and so much more.",
      badgeColor: "#5DC17A" // Green
    },
    {
      id: "04",
      title: "MICE Services",
      description: "Expert planning for Meetings, Incentives, Conferences, and Events.",
      badgeColor: "#AE78FF" // Purple
    },
    {
      id: "05",
      title: "Excursions & Cultural Tours",
      description: "Immerse yourself in authentic local experiences led by expert professional guides.",
      badgeColor: "#E9A614" // Yellow
    },
    {
      id: "06",
      title: "Medical, Wellness & Halal Tourism",
      description: "Tailored travel packages curated for your unique interests, passions, and needs.",
      badgeColor: "#FF5D80" // Pink
    },
    {
      id: "07",
      title: "Transportation & Airport Transfers",
      description: "Enjoy reliable, on-time, and comfortable transportation services throughout Turkey.",
      badgeColor: "#FF4BD8" // Pink/Purple
    },
    {
      id: "08",
      title: "Visa support & documents",
      description: "Seamless processing of travel visas and documentation for individuals and groups.",
      badgeColor: "#C377D3" // Light Purple
    }
  ];

  return (
    <section className="flex flex-col items-center py-14 px-4 md:px-8 lg:px-12   w-full max-w-[1920px] mx-auto">
      {/* Title with SVG underline */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-['Work_Sans'] text-[#222222] mb-2 relative">
          Our Core <span className="text-[#014E82] relative">
            Services
            {/* SVG underline positioned under 'Services' only */}
            <span className="absolute left-0 -bottom-3 w-full flex justify-center">
              <img 
                src="/public/images/shape under word.svg" 
                alt="Decorative underline" 
                className="h-4 w-auto"
              />
            </span>
          </span>
        </h2>
      </div>
      
      {/* Services container */}
      <div className="flex flex-col w-full gap-6">
        {/* First row of services */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 w-full">
          {services.slice(0, 4).map((service) => (
            <div 
              key={service.id}
              className="flex-1 min-w-[280px] flex flex-col bg-white rounded-[24px] p-6 "
              style={{ minHeight: '213px' }}
            >
              {/* Badge with number */}
              <div className="flex mb-6">
                <div 
                  className="flex justify-center items-center px-3 py-1 rounded-full" 
                  style={{ backgroundColor: service.badgeColor }}
                >
                  <span className="text-sm font-medium text-white font-['Work_Sans']">{service.id}</span>
                </div>
              </div>
              
              {/* Service content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-[#222222] font-['Work_Sans']">{service.title}</h3>
                <p className="text-[#535353] font-['Work_Sans']">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row of services */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 w-full">
          {services.slice(4).map((service) => (
            <div 
              key={service.id}
              className="flex-1 min-w-[280px] flex flex-col bg-white rounded-[24px] p-6 "
              style={{ minHeight: '213px' }}
            >
              {/* Badge with number */}
              <div className="flex mb-6">
                <div 
                  className="flex justify-center items-center px-3 py-1 rounded-full" 
                  style={{ backgroundColor: service.badgeColor }}
                >
                  <span className="text-sm font-medium text-white font-['Work_Sans']">{service.id}</span>
                </div>
              </div>
              
              {/* Service content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-[#222222] font-['Work_Sans']">{service.title}</h3>
                <p className="text-[#535353] font-['Work_Sans']">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
