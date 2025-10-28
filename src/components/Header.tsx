import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToForm = () => {
    document.getElementById("custom-package")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Kaivan Digital" 
            className="w-12 h-12 object-contain"
          />
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Kaivan Digital
            </h1>
            <p className="text-xs text-muted-foreground">Engineering Brand Growth</p>
          </div>
        </div>
        
        <Button 
          onClick={scrollToForm}
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
