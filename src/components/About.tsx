import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-12 text-center bg-gradient-to-br from-muted/30 to-background">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About the Founder
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Founded by <span className="font-bold text-foreground">Kaivan Parikh</span> — an engineer-turned-marketer passionate about data-driven brand growth. 
            Combining technical precision with creative strategy to help brands scale systematically.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
