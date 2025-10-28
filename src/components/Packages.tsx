import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Starter Lab",
    price: "₹6,999",
    period: "/month",
    tagline: "For startups & small brands wanting consistent social presence",
    features: [
      "12 high-converting posts (reels + static)",
      "Brand identity revamp (color, font & content style guide)",
      "AI-generated content ideas tailored to your niche",
      "7-day Ad Boost Campaign (Meta or Google)",
      "Growth roadmap for the next 30 days"
    ],
    bonuses: [
      "Free 15-min Growth Consultation",
      "Social Media Audit Report"
    ],
    goal: "Build your foundation, start visibility.",
    popular: false
  },
  {
    name: "Growth Accelerator",
    price: "₹10,999",
    period: "/month",
    tagline: "For businesses that want engagement + leads, not just likes.",
    features: [
      "20 custom reels/posts designed for engagement",
      "Meta + Google Ads setup & management (₹2K ad spend)",
      "Conversion-focused copywriting",
      "Story & Highlight strategy",
      "Audience research + competitor tracking",
      "Monthly Growth Dashboard (visual report)"
    ],
    bonuses: [
      "One-on-one Strategy Call",
      "AI-optimized Ad Targeting Suggestions"
    ],
    goal: "Drive engagement, traffic & qualified leads.",
    popular: true
  },
  {
    name: "Domination Suite",
    price: "₹17,999",
    period: "/month",
    tagline: "For brands serious about turning followers into paying customers.",
    features: [
      "30+ posts/reels (including trends + storytelling)",
      "Meta + Google + WhatsApp Ad Funnel setup",
      "Influencer collaboration & retargeting ads",
      "Weekly Analytics Report + Strategy Call",
      "UGC-style video support",
      "AI content + keyword planner"
    ],
    bonuses: [
      "Dedicated Account Manager",
      "Brand Growth Tracker (ROI Dashboard)",
      "WhatsApp Automation Setup"
    ],
    goal: "Scale leads, boost conversions & dominate your niche.",
    popular: false
  }
];

const Packages = () => {
  const scrollToForm = () => {
    document.getElementById("custom-package")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our Packages
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Choose the growth plan that fits your ambition
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`p-8 relative hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 animate-fade-up ${
                pkg.popular ? "border-2 border-primary" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{pkg.tagline}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {pkg.price}
                </span>
                <span className="text-muted-foreground">{pkg.period}</span>
              </div>
              
              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 mb-4">
                {pkg.bonuses.map((bonus, i) => (
                  <div key={i} className="flex items-start gap-2 mb-2">
                    <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">{bonus}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg mb-6">
                <p className="text-sm">
                  <span className="font-bold">🎯 Goal:</span> {pkg.goal}
                </p>
              </div>
              
              <Button 
                onClick={scrollToForm}
                className={`w-full ${
                  pkg.popular 
                    ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90" 
                    : "bg-primary hover:bg-primary/90"
                } transition-all hover:scale-105`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 max-w-2xl mx-auto text-center bg-gradient-to-br from-muted/50 to-muted/30 border-2 border-dashed">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
          <p className="text-muted-foreground mb-6">
            Every brand is unique. Let's create a plan tailored to your specific goals and budget.
          </p>
          <Button 
            onClick={scrollToForm}
            variant="outline"
            className="bg-background hover:bg-muted transition-all hover:scale-105"
          >
            Create My Own Plan
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Packages;
