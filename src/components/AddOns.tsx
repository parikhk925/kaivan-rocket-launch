import { Card } from "@/components/ui/card";
import { Video, Users, Bot, FileText } from "lucide-react";

const addons = [
  {
    icon: Video,
    title: "Ad Video Editing",
    price: "₹999",
    description: "per reel"
  },
  {
    icon: Users,
    title: "Influencer Tie-up Execution",
    price: "₹1,499",
    description: "complete setup"
  },
  {
    icon: Bot,
    title: "AI Chatbot / WhatsApp Automation",
    price: "₹2,499",
    description: "one-time setup"
  },
  {
    icon: FileText,
    title: "Custom Landing Page",
    price: "₹3,999",
    description: "lead capture optimized"
  }
];

const AddOns = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Power-Up Your Growth
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Add-ons to supercharge your marketing
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {addons.map((addon, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <addon.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{addon.title}</h3>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                {addon.price}
              </div>
              <p className="text-sm text-muted-foreground">{addon.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOns;
