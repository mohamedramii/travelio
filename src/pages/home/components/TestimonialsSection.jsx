import React, { useState } from 'react';

const TestimonialsSection = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Maya H',
      location: 'Dubai, United Arab Emirates',
      review: '"Our group trip to Turkey was perfectly organized. Every detail was handled with care. Highly recommend Travelio!"',
      date: '26May, 2025',
      profileColor: '#FFDBB8', // Yellow profile background
      profileImage: '/images/profiles/maya.png'
    },
    {
      id: 2,
      name: 'Jakob L',
      location: 'Berlin, Germany',
      review: '"From the airport pickup to our Istanbul guide, everything was top-tier. We\'ll definitely be back!"',
      date: '20May, 2025',
      profileColor: '#BBDEFB', // Light blue profile background
      profileImage: '/images/profiles/jakob.png'
    },
    {
      id: 3,
      name: 'Fatima A',
      location: 'Travel Agent',
      review: '"I booked a custom wellness retreat through Travelio for a VIP client. They were amazed, 5 stars!"',
      date: '29May,2025',
      profileColor: '#FFA576', // Orange profile background
      profileImage: '/images/profiles/fatima.png'
    },
  ];

  // Visible testimonials state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation functions
  const handlePrevClick = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex(prev => Math.min(prev + 1, testimonials.length - 3));
  };

  // Calculate which testimonials to show (3 at a time on desktop)
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="flex flex-col items-center py-14 px-4 md:px-8 lg:px-12 w-full max-w-[1920px] mx-auto relative">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold font-['Work_Sans'] text-[#222222] mb-8 text-center">
        What Travelers <span className="text-[#014e82]">Are Saying</span>
      </h2>
      
      {/* Testimonials Container */}
      <div className="flex flex-col lg:flex-row w-full gap-6 relative">
        {/* Testimonial Cards */}
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1520px] mx-auto overflow-x-auto pb-4">
          {visibleTestimonials.map(testimonial => (
            <div 
              key={testimonial.id}
              className="flex-1 w-full lg:w-[490px] h-[352px] flex flex-col p-6 rounded-[24px] bg-[rgba(0,153,210,0.1)] relative overflow-hidden"
            >
              {/* Profile and Content Container */}
              <div className="flex flex-col gap-12 h-full">
                {/* User Info Container */}
                <div className="flex flex-col gap-4">
                  {/* Profile Picture and User Info */}
                  <div className="flex flex-col gap-4">
                    {/* Profile Picture */}
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden"
                      style={{ backgroundColor: testimonial.profileColor }}
                    >
                      <img 
                        src={testimonial.profileImage} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/profiles/default-avatar.png";
                        }}
                      />
                    </div>
                    
                    {/* Name and Location */}
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-lg text-[#222222] font-['Work_Sans']">
                        {testimonial.name}
                      </h3>
                      <p className="text-base text-[#535353] font-['Work_Sans']">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-lg text-[#222222] font-['Work_Sans']">
                    {testimonial.review}
                  </p>
                </div>
                
                {/* Date */}
                <p className="text-base text-[#535353] font-['Work_Sans'] mt-auto">
                  {testimonial.date}
                </p>
                
                {/* Airplane illustration at bottom right */}
                <div className="absolute bottom-0 right-0">
                  <img 
                    src="/images/icons/airplan-illus.png" 
                    alt="Airplane illustration" 
                    className="w-[214px] "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
      {/* Navigation Controls - Positioned half inside/half outside */}
      <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-50 z-10 pointer-events-none">
        {/* Previous Button */}
        <button 
          className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transform -translate-x-1/2 pointer-events-auto `}
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="#014E82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Next Button */}
        <button 
          className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transform translate-x-1/2 pointer-events-auto `}
          onClick={handleNextClick}
          disabled={currentIndex >= testimonials.length - 3}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="#014E82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
