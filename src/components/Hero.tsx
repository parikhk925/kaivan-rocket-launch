import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("custom-package")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto text-center relative z-10 animate-fade-in">
        <div className="relative inline-block mb-4">
          <Rocket className="w-12 h-12 text-primary animate-rocket-float mx-auto" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Kaivan Digital
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          Engineering Brand Growth
        </p>
        
        <p className="text-2xl md:text-3xl font-bold mb-12 max-w-3xl mx-auto">
          We don't manage socials.<br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            We engineer brand growth.
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 rounded-full shadow-[var(--shadow-glow)] transition-all hover:scale-105"
          >
            Get My Free Brand Audit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
