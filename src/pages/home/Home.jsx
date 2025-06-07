import React from 'react'
import HeroSection from './components/HeroSection'
import KeyDestinationsSection from './components/KeyDestinationsSection'
import WhyChooseTravelioSection from './components/WhyChooseTravelioSection'
import CoreServicesSection from './components/CoreServicesSection'
import FeaturedPackagesSection from './components/FeaturedPackagesSection'
import TestimonialsSection from './components/TestimonialsSection'
import TravelBlogSection from './components/TravelBlogSection'
import TravelGallerySection from './components/TravelGallerySection'
import PartnershipSection from './components/PartnershipSection'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <KeyDestinationsSection />
      <WhyChooseTravelioSection />
      <CoreServicesSection />
      <FeaturedPackagesSection />
      <TestimonialsSection />
      <TravelBlogSection />
      <TravelGallerySection />
      <PartnershipSection />
      <Footer />
    </div>
  )
}

export default Home