import React from 'react';
import { Button } from './ui/button';
import { Play, Sparkles, Target, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Ad Platform
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Launch Profitable Ads in{' '}
              <span className="text-orange-500">One Click</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Kaivan Digital uses AI to create, target, and structure Meta ad campaigns for you — no marketing knowledge required.
            </p>

            <p className="text-lg text-gray-500">
              Just enter your product, budget, and location. Kaivan Digital handles everything else.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToPricing}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-orange-500 hover:text-orange-500 px-8 py-6 text-lg transition-all duration-200 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:text-orange-500 transition-colors" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            {/* Subtle glow effect behind mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 via-orange-100/10 to-transparent rounded-2xl blur-2xl transform scale-105"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden depth-shadow-hover transition-all duration-500">
              {/* Mockup Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-sm text-gray-500 font-medium">Campaign Dashboard</div>
              </div>

              {/* Mockup Content */}
              <div className="p-6 space-y-6">
                {/* Campaign Status */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">AI Campaign Generator</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                      Active
                    </span>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Sparkles className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Campaign Generated</p>
                        <p className="text-xs text-gray-600 mt-1">3 ad sets created with optimal budget allocation</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interest Targeting */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-orange-500" />
                    <h4 className="font-semibold text-gray-900">Interest Targeting</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
                      Digital Marketing
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
                      E-commerce
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
                      Small Business
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-200">
                      Entrepreneurship
                    </div>
                  </div>
                </div>

                {/* Budget Widget */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                    <h4 className="font-semibold text-gray-900">Budget Performance</h4>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Daily Budget</span>
                      <span className="text-lg font-bold text-gray-900">₹500</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">68% of budget allocated</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl px-4 py-2 shadow-lg animate-fade-in depth-shadow">
              <p className="text-xs font-medium">AI Powered</p>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-200 animate-fade-in depth-shadow">
              <p className="text-xs text-gray-600">Campaign Ready</p>
              <p className="text-lg font-bold text-gray-900">in 60 seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
