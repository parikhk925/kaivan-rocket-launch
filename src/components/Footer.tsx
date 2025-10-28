import { Mail, Phone, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Kaivan Digital
            </h3>
            <p className="text-background/80 mb-4">
              Engineering Brand Growth
            </p>
            <p className="text-background/60">
              Data-driven marketing strategies that transform brands into market leaders.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:parikhk925@gmail.com" className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                parikhk925@gmail.com
              </a>
              <a href="tel:+917041167759" className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                +91 70411 67759
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Connect With Us</h4>
            <div className="flex gap-4">
              <Button 
                size="icon" 
                variant="outline" 
                className="bg-background/10 border-background/20 hover:bg-primary hover:border-primary text-background hover:text-primary-foreground transition-all"
                asChild
              >
                <a href="https://instagram.com/kaivandigital" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="bg-background/10 border-background/20 hover:bg-primary hover:border-primary text-background hover:text-primary-foreground transition-all"
                asChild
              >
                <a href="https://twitter.com/kaivandigital" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="bg-background/10 border-background/20 hover:bg-secondary hover:border-secondary text-background hover:text-secondary-foreground transition-all"
                asChild
              >
                <a href="https://wa.me/917041167759" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Kaivan Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
