import React from 'react';
import { TrendingUp, Clock, Target, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '3x',
      label: 'Better ROI',
      description: 'Average increase in campaign performance'
    },
    {
      icon: Clock,
      value: '5hrs',
      label: 'Time Saved',
      description: 'Per campaign setup with AI automation'
    },
    {
      icon: Target,
      value: '94%',
      label: 'Success Rate',
      description: 'Of campaigns reach profitability'
    },
    {
      icon: Award,
      value: '1000+',
      label: 'Active Users',
      description: 'Trust Kaivan Digital for their ads'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kaivan Digital Cut Our Setup Time in Half
            <br />
            <span className="text-orange-500">And Hit ROI in Week One</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of businesses that transformed their advertising with AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-orange-500 transition-all duration-300 hover:shadow-xl group depth-shadow"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <p className="text-lg font-semibold text-orange-500 mb-1">{stat.label}</p>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
