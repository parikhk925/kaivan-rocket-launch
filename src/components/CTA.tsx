import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const CTA = () => {
  const scrollToForm = () => {
    document.getElementById("custom-package")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      <div className="container mx-auto text-center relative z-10">
        <Rocket className="w-16 h-16 text-primary-foreground mx-auto mb-6 animate-rocket-float" />
        
        <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
          Ready to Engineer<br />Your Brand Growth?
        </h2>
        
        <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
          Stop guessing. Start growing. Get your personalized brand audit and growth roadmap — completely free.
        </p>
        
        <Button 
          size="lg"
          onClick={scrollToForm}
          className="bg-background text-foreground hover:bg-background/90 text-lg px-12 py-7 rounded-full shadow-2xl transition-all hover:scale-105"
        >
          Get My Free Brand Audit
        </Button>
      </div>
    </section>
  );
};

export default CTA;
