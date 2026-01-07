import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

const CaseStudySection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Case Study Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
              Success Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From ₹50,000 Loss to ₹2 Lakh Profit in 30 Days
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              How an e-commerce startup transformed their Meta ads performance with Kaivan Digital's AI-powered campaigns.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">AI-Optimized Targeting</p>
                  <p className="text-gray-400">Reached 3x more qualified leads with precision audience selection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Budget Optimization</p>
                  <p className="text-gray-400">Reduced cost per acquisition by 65% with smart budget allocation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Campaign Structure</p>
                  <p className="text-gray-400">Professional ad sets generated in 60 seconds vs 6 hours manually</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white group"
            >
              Read Full Case Study
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right: Metrics Cards */}
          <div className="space-y-6">
            {/* Before Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-red-400 font-semibold">Before Kaivan Digital</span>
                <span className="text-sm text-gray-400">Manual Campaigns</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Cost Per Acquisition</span>
                  <span className="text-red-400 font-bold">₹2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Setup Time</span>
                  <span className="text-red-400 font-bold">6 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Monthly Profit</span>
                  <span className="text-red-400 font-bold">-₹50,000</span>
                </div>
              </div>
            </div>

            {/* After Card */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm border-2 border-orange-500/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-orange-400 font-semibold">After Kaivan Digital</span>
                <span className="text-sm text-gray-400">AI Campaigns</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost Per Acquisition</span>
                  <span className="text-green-400 font-bold">₹875</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Setup Time</span>
                  <span className="text-green-400 font-bold">60 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monthly Profit</span>
                  <span className="text-green-400 font-bold">+₹2,00,000</span>
                </div>
              </div>
            </div>

            {/* Results Badge */}
            <div className="bg-orange-500 rounded-2xl p-6 text-center">
              <p className="text-6xl font-bold mb-2">285%</p>
              <p className="text-lg font-semibold">ROI Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
