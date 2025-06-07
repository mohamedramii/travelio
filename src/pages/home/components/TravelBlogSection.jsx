import React from 'react';

const TravelBlogSection = () => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Must-Visit Places in Turkey (2025 Edition)',
      image: '/images/blogs/istanbul-city.png',
      imageCount: '1/10',
    },
    {
      id: 2,
      title: "A Food Lover's Guide to Istanbul's Street Eats",
      image: '/images/blogs/istanbul-food.png',
      imageCount: '1/8',
    },
    {
      id: 3,
      title: 'How to Make the Most of a Hot Air Balloon Ride in Cappadocia',
      image: '/images/blogs/cappadocia-balloons.png',
      imageCount: '1/12',
    },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto">
      {/* Main blue background container */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 bg-[#014E82] px-4 md:px-8 lg:px-12 xl:px-[200px] py-20 2xl:h-[660px]">
        {/* Left side - Text and CTA button */}
        <div className="flex flex-col gap-4 w-full lg:w-[343px]">
          {/* Title and subtitle container */}
          <div className="flex flex-col gap-2 relative">
            <h2 className="text-3xl md:text-4xl font-bold font-['Work_Sans'] text-white leading-[54px]">
              Travel Blog &<br />
              Inspiration
            </h2>
            
            {/* SVG underline shape - positioned specifically under "Inspiration" */}
            <div className="relative h-4 w-[231px] ml-1">
              <img 
                src="/images/shape under word.svg" 
                alt="Decorative underline" 
                className="absolute top-[-15px] w-full"
              />
            </div>
            
            <p className="text-lg text-white font-medium font-['Work_Sans'] mt-0">
              Browse insider tips, travel guides, and cultural deep-dives from our local experts:
            </p>
          </div>
          
          {/* Discover All Blogs button */}
          <button className="flex items-center justify-between bg-white text-[#014E82] rounded-full w-fit py-2 px-4">
            <span className="font-semibold text-base px-3 font-['Work_Sans']">Discover All Blogs</span>
            <div className="w-10 h-10 rounded-full bg-[#014E82] border border-[#0099D2] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
           {/* Decorative suitcase illustration - positioned outside the main flex container */}
      <div className="relative lg:block hidden">
        <img 
          src="/images/illustrations/travel-suitcase.png" 
          alt="Travel suitcase illustration" 
          className="   w-[305px] h-[259px]"
        />
      </div>
        </div>
        
        {/* Right side - Blog post cards */}
        <div className="flex flex-col md:flex-row gap-6 overflow-x-auto hide-scrollbar w-full lg:w-auto lg:flex-1">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="flex-1 min-w-[280px] md:min-w-[320px] lg:w-[350px] h-[500px] rounded-[24px] overflow-hidden relative"
            >
              {/* Blog post image */}
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Image counter badge */}
              <div className="absolute bottom-4 right-4 bg-black/50 rounded-full py-1 px-2 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="12" height="12" rx="1" stroke="white" strokeWidth="1.33333"/>
                </svg>
                <span className="text-white text-xs font-medium font-['Poppins']">{post.imageCount}</span>
              </div>
              
              {/* Gradient overlay and title */}
              <div className="absolute bottom-0 left-0 w-full flex justify-center items-end">
                <div className="w-full h-[140px] bg-gradient-to-t from-black via-black/80 to-transparent absolute bottom-0"></div>
                <h3 className="text-white text-2xl font-semibold font-['Work_Sans'] p-4 leading-9 relative z-10 max-w-[318px]">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
          
          {/* Navigation arrow */}
          <div className="absolute right-4 xl:right-[176px] top-1/2 transform -translate-y-1/2 hidden lg:block">
            <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="#014E82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
     
    </section>
  );
};

export default TravelBlogSection;
