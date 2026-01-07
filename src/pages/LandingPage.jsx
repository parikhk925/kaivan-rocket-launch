import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import BenefitsSection from '../components/BenefitsSection';
import CaseStudySection from '../components/CaseStudySection';
import ComparisonSection from '../components/ComparisonSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <StatsSection />
        <FeaturesSection />
        <HowItWorks />
        <BenefitsSection />
        <CaseStudySection />
        <ComparisonSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
