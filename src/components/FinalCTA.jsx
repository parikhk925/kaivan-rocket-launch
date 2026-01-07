import React from 'react';
import { Button } from './ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-orange-400 font-medium mb-8 animate-fade-in">
          <Sparkles className="w-5 h-5 mr-2" />
          Limited Time Offer
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Ready to Launch Your
          <br />
          <span className="text-orange-500">First Profitable Campaign?</span>
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join Kaivan Digital today and create your first AI-powered Meta ad campaign in the next 60 seconds
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <p className="text-3xl font-bold text-orange-500 mb-2">60 sec</p>
            <p className="text-gray-300">Campaign setup time</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <p className="text-3xl font-bold text-orange-500 mb-2">₹0</p>
            <p className="text-gray-300">Setup fees or hidden costs</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <p className="text-3xl font-bold text-orange-500 mb-2">24/7</p>
            <p className="text-gray-300">Expert support included</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 group"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-7 text-lg font-semibold backdrop-blur-sm"
          >
            Schedule Demo
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>1000+ active users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
