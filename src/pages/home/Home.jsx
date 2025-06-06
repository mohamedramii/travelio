import React from 'react'
import HeroSection from './components/HeroSection'
import KeyDestinationsSection from './components/KeyDestinationsSection'
import WhyChooseTravelioSection from './components/WhyChooseTravelioSection'
import CoreServicesSection from './components/CoreServicesSection'
import FeaturedPackagesSection from './components/FeaturedPackagesSection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <KeyDestinationsSection />
      <WhyChooseTravelioSection />
      <CoreServicesSection />
      <FeaturedPackagesSection />
    </div>
  )
}

export default Home