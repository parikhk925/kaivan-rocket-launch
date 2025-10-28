import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Social Media Management",
  "Paid Ads (Meta/Google/YouTube)",
  "Branding & Logo Design",
  "Website Development",
  "Content Strategy",
  "Influencer Marketing",
  "WhatsApp Automation"
];

const CustomPackageForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    email: "",
    phone: "",
    category: "",
    services: [] as string[],
    budget: "",
    goals: "",
    startDate: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend or email service
    console.log("Form submitted:", formData);
    
    setSubmitted(true);
    toast({
      title: "Request Submitted! 🚀",
      description: "We'll reach out within 24 hours to craft your custom growth plan.",
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  if (submitted) {
    return (
      <section id="custom-package" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-12 text-center animate-scale-in">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank You! 🎉</h2>
            <p className="text-muted-foreground mb-6">
              Your custom package request has been received. Our team will analyze your requirements and reach out within 24 hours with a tailored growth strategy.
            </p>
            <Button 
              onClick={() => setSubmitted(false)}
              variant="outline"
            >
              Submit Another Request
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="custom-package" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Create Your Custom Plan
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Tell us about your brand, and we'll engineer a growth strategy just for you
        </p>
        
        <Card className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Your Name *</Label>
                <Input 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <Label htmlFor="brandName">Brand Name *</Label>
                <Input 
                  id="brandName"
                  required
                  value={formData.brandName}
                  onChange={(e) => setFormData(prev => ({ ...prev, brandName: e.target.value }))}
                  placeholder="Your Brand"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input 
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="category">Business Category / Niche *</Label>
              <Input 
                id="category"
                required
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                placeholder="E.g., Fashion, Tech, Food & Beverage"
              />
            </div>
            
            <div>
              <Label className="mb-3 block">What services do you need? *</Label>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox 
                      id={service}
                      checked={formData.services.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                    />
                    <label
                      htmlFor={service}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="budget">Monthly Marketing Budget *</Label>
              <select 
                id="budget"
                required
                value={formData.budget}
                onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                className="w-full rounded-lg border border-input bg-background px-3 py-2"
              >
                <option value="">Select budget range</option>
                <option value="5k-10k">₹5,000 - ₹10,000</option>
                <option value="10k-20k">₹10,000 - ₹20,000</option>
                <option value="20k-50k">₹20,000 - ₹50,000</option>
                <option value="50k+">₹50,000+</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="goals">Brand Goals *</Label>
              <Textarea 
                id="goals"
                required
                value={formData.goals}
                onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                placeholder="Tell us what you want to achieve... (e.g., increase followers, generate leads, boost sales)"
                rows={4}
              />
            </div>
            
            <div>
              <Label htmlFor="startDate">Preferred Start Date</Label>
              <Input 
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6 transition-all hover:scale-105"
            >
              Submit My Custom Request
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default CustomPackageForm;

// Add missing import
import { Check } from "lucide-react";
