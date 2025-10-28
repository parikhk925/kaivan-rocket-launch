import { Users, Target, Palette, Code, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Users,
    title: "Social Media Marketing & Management",
    description: "Strategic content that converts followers into customers"
  },
  {
    icon: Target,
    title: "Paid Ads (Meta, Google & YouTube)",
    description: "Data-driven campaigns optimized for maximum ROI"
  },
  {
    icon: Palette,
    title: "Branding & Logo Design",
    description: "Visual identities that make your brand unforgettable"
  },
  {
    icon: Code,
    title: "Website & Landing Page Development",
    description: "High-converting pages built for growth"
  },
  {
    icon: Lightbulb,
    title: "Content & Creative Strategy",
    description: "Storytelling that resonates with your audience"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Core Services
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Full-stack digital growth solutions
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-primary to-secondary w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
