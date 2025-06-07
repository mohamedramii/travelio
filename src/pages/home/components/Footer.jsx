import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#014E82] text-white pt-14  overflow-hidden ">
      {/* Main footer container */}
      <div className="w-full max-w-[1920px] mx-auto flex flex-col relative">
        {/* Decorative elements - these will be positioned absolute */}
        <div className="absolute opacity-20 right-0 -top-40 -z-0 hidden md:block rotate-180">
          <img 
            src="/images/illustrations/Background.svg" 
            alt="Decorative background" 
            className="h-[760px] object-contain"
          />
        </div>
        <div className="absolute opacity-20 -left-40 -top-20 -z-0 hidden md:block">
          <img 
            src="/images/illustrations/Background.svg" 
            alt="Decorative background" 
            className="h-[800px] object-contain"
          />
        </div>
        
        {/* Newsletter section */}
        <div className="px-4 md:px-8 lg:px-12 xl:px-[200px] relative z-10">
          <div className="flex flex-col lg:flex-row border-b border-white pb-6 gap-8">
            <div className="flex flex-col gap-2 flex-grow">
              <h2 className="font-['Work_Sans'] font-bold text-2xl">Stay in the Loop with Travelio</h2>
              <p className="font-['Work_Sans'] font-medium text-base">Get travel tips, destination highlights, and exclusive offers delivered straight to your inbox every month.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:w-[443px]">
              <div className="flex-grow">
                <div className="flex flex-col gap-2">
                  <div className="bg-white rounded-lg h-12 flex items-center px-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full h-full text-gray-600 focus:outline-none font-['Work_Sans']"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1.33334C4.32 1.33334 1.33334 4.32 1.33334 8C1.33334 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33334 8 1.33334ZM8 13.3333C5.06 13.3333 2.66667 10.94 2.66667 8C2.66667 5.06 5.06 2.66667 8 2.66667C10.94 2.66667 13.3333 5.06 13.3333 8C13.3333 10.94 10.94 13.3333 8 13.3333ZM9.33334 10.6667H7.33334V6.66667H8.66667V9.33334H9.33334V10.6667ZM8.66667 4.66667H7.33334V6H8.66667V4.66667Z" fill="white"/>
                    </svg>
                    <span className="font-['Work_Sans'] text-sm">Your email is safe with us. Privacy policy.</span>
                  </div>
                </div>
              </div>
              <button className="bg-white text-[#014E82] font-semibold rounded-lg h-12 px-4 flex items-center justify-center whitespace-nowrap font-['Work_Sans']">Subscribe</button>
            </div>
          </div>
        </div>
        
        {/* Footer links section */}
        <div className="px-4 md:px-8 lg:px-12 xl:px-[200px] py-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Company logo and description */}
            <div className="flex flex-col gap-6 md:w-1/4">
              <div className="w-full flex items-center">
                {/* Company logo */}
                <img 
                  src="/images/white-logo.png" 
                  alt="Travelio Logo" 
                  className="h-12 object-contain"
                />
              </div>
              <p className="font-['Work_Sans'] font-medium text-base">
                Travelio is a Turkey-Based Destination Management Company Offering Personalized Travel Experiences, Expert Logistics, And Cultural Depth Across The Country's Top Destinations.
              </p>
            </div>
            
            {/* About Travelio navigation column */}
            <div className="flex flex-col gap-4 md:w-1/5">
              <h3 className="font-['Work_Sans'] font-bold text-sm underline text-[#E6E6E6]">About Travelio</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="font-['Work_Sans'] font-medium text-base">Our Story</a>
                <a href="#" className="font-['Work_Sans'] font-medium text-base">Our Team</a>
                <a href="#" className="font-['Work_Sans'] font-medium text-base">Sustainability</a>
                <a href="#" className="font-['Work_Sans'] font-medium text-base">Careers</a>
                <a href="#" className="font-['Work_Sans'] font-medium text-base">Privacy Policy</a>
                <a href="#" className="font-['Work_Sans'] font-medium text-base">Terms of Service</a>
                <a href="#" className="font-['Work_Sans'] font-medium text-base">Refund Policy</a>
                <a href="#" className="font-['Work_Sans'] font-medium text-base">Cookie Preferences</a>
              </div>
            </div>
            
            {/* Helpful Links navigation column */}
            <div className="flex flex-col gap-4 md:w-1/5">
              <h3 className="font-['Work_Sans'] font-bold text-sm underline text-[#E6E6E6]">Helpful Links</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="font-['Work_Sans'] font-medium text-base">Destinations</a>
                <a href="#" className="font-['Work_Sans'] font-medium text-base">Tours</a>
                <a href="#" className="font-['Work_Sans'] font-medium text-base">Blog</a>
                <a href="#" className="font-['Work_Sans'] font-medium text-base">FAQs</a>
                <a href="#" className="font-['Work_Sans'] font-medium text-base">Partner with Us</a>
              </div>
            </div>
            
            {/* Contact information column */}
            <div className="flex flex-col gap-4 md:w-1/5">
              <h3 className="font-['Work_Sans'] font-bold text-sm underline text-[#E6E6E6]">Contact Info</h3>
              <div className="flex flex-col gap-3">
                {/* Email */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center border-r border-white pr-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 6.66675L9.0755 10.5589C9.63533 10.8823 10.3647 10.8823 10.9245 10.5589L17.5 6.66675M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83341C17.5 4.91294 16.7538 4.16675 15.8333 4.16675H4.16667C3.24619 4.16675 2.5 4.91294 2.5 5.83341V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-['Work_Sans'] font-medium text-base">hello@travelio.com</span>
                </div>
                
                {/* Phone */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center border-r border-white pr-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 4.16675H6.66667L8.33333 8.33341L6.25 9.58341C7.14774 11.4862 8.68014 13.0186 10.5833 13.9167L11.8333 11.8334L16 13.5001V17.6667C16 18.1088 15.8244 18.5327 15.5118 18.8453C15.1993 19.1578 14.7754 19.3334 14.3333 19.3334C11.1431 19.1061 8.1269 17.6498 5.87707 15.3563C3.62724 13.0629 2.2373 10.0178 2.08333 6.81675C2.08333 6.37471 2.25893 5.95079 2.57149 5.63824C2.88405 5.32568 3.30797 5.15008 3.75 5.15008" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-['Work_Sans'] font-medium text-base">+1 800 123 4567</span>
                </div>
                
                {/* Hours */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center border-r border-white pr-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 5.83325V9.99992L12.5 12.4999M17.5 9.99992C17.5 14.1421 14.1421 17.4999 10 17.4999C5.85786 17.4999 2.5 14.1421 2.5 9.99992C2.5 5.85778 5.85786 2.49992 10 2.49992C14.1421 2.49992 17.5 5.85778 17.5 9.99992Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-['Work_Sans'] font-medium text-base">Mon–Sat, 9AM–6PM</span>
                </div>
              </div>

              {/* Social Media section */}
              <div className="mt-4">
                <h3 className="font-['Work_Sans'] font-bold text-sm underline text-[#E6E6E6] mb-4">SOCIAL media</h3>
                <div className="flex gap-2">
                  {/* Facebook */}
                  <a href="#" className="w-11 h-11 flex items-center justify-center bg-[#C7E9FF] rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="#014E82"/>
                    </svg>
                  </a>
                  
                  {/* YouTube */}
                  <a href="#" className="w-11 h-11 flex items-center justify-center bg-[#C7E9FF] rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z" fill="#014E82"/>
                    </svg>
                  </a>
                  
                  {/* Instagram */}
                  <a href="#" className="w-11 h-11 flex items-center justify-center bg-[#C7E9FF] rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="#014E82"/>
                    </svg>
                  </a>
                  
                  {/* TikTok */}
                  <a href="#" className="w-11 h-11 flex items-center justify-center bg-[#C7E9FF] rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6 5.82C16.6 5.82 17.4 6.67 17.4 8.77H19.5C19.5 8.77 19.28 6.04 16.6 5.82ZM16.6 5.82V9.87C16.6 9.87 14.94 9.07 12 10.67V19.77C12 19.77 8 21.13 6 16.77C4 12.4 7 11.87 7 11.87V14.87C7 14.87 6.8 18.47 9 17.17C11.2 15.87 10 11.87 10 11.87H12C12 11.87 11.5 4.07 16.6 5.82Z" fill="#014E82"/>
                    </svg>
                  </a>
                  
                  {/* Pinterest */}
                  <a href="#" className="w-11 h-11 flex items-center justify-center bg-[#C7E9FF] rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.04 21.54C10 21.83 10.97 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.25 4.67 19.9 8.44 21.34C8.35 20.56 8.26 19.27 8.44 18.38L9.59 13.44C9.59 13.44 9.3 12.86 9.3 11.94C9.3 10.56 10.16 9.53 11.14 9.53C12 9.53 12.4 10.16 12.4 10.97C12.4 11.83 11.83 13.06 11.54 14.24C11.37 15.22 12.06 16.08 13.06 16.08C14.84 16.08 16.22 14.18 16.22 11.5C16.22 9.1 14.5 7.46 12.03 7.46C9.21 7.46 7.55 9.56 7.55 11.77C7.55 12.63 7.83 13.5 8.29 14.07C8.38 14.13 8.38 14.21 8.35 14.36L8.06 15.45C8.06 15.62 7.95 15.68 7.78 15.56C6.5 15 5.76 13.18 5.76 11.71C5.76 8.55 8 5.68 12.32 5.68C15.76 5.68 18.44 8.15 18.44 11.43C18.44 14.87 16.31 17.63 13.26 17.63C12.29 17.63 11.34 17.11 11 16.5L10.33 18.87C10.1 19.73 9.47 20.88 9.04 21.57V21.54Z" fill="#014E82"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="px-4 md:px-8 lg:px-12 xl:px-[200px] py-6">
          <div className="border-t border-white pt-6 flex justify-center items-center">
            <div className="flex items-center gap-2">
              <span className="text-white w-4 h-4 flex items-center justify-center">©</span>
              <span className="font-['Work_Sans'] font-medium text-base">2024 TRAVELIO. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
