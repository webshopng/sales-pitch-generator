import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const handleCTAClick = () => {
    window.open("https://aifreeforever.com/tools/ai-sales-pitch-generator", "_blank");
  };

  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Sales Approach?
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-3xl mx-auto">
            Don't let another opportunity slip away. Create compelling sales pitches 
            that convert prospects into customers with our AI-powered generator.
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            onClick={handleCTAClick}
            className="group bg-background text-foreground hover:bg-background/90"
          >
            Get Started with Sales Pitch Generator
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3">Quick Access</h3>
              <ul className="space-y-2 text-background/80">
                <li>
                  <button 
                    onClick={handleCTAClick}
                    className="hover:text-background transition-colors"
                  >
                    Sales Pitch Generator
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleCTAClick}
                    className="hover:text-background transition-colors"
                  >
                    Try Free Tool
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="space-y-2 text-background/80">
                <li>AI-Powered Generation</li>
                <li>Multiple Formats</li>
                <li>Instant Results</li>
                <li>Professional Quality</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Benefits</h3>
              <ul className="space-y-2 text-background/80">
                <li>100% Free to Use</li>
                <li>No Signup Required</li>
                <li>95% Success Rate</li>
                <li>Save Time & Money</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-background/20">
            <p className="text-background/60 mb-4">
              © 2024 AI Sales Pitch Generator. Transform your sales approach today.
            </p>
            <Button 
              variant="ghost" 
              onClick={handleCTAClick}
              className="text-background/80 hover:text-background hover:bg-background/10"
            >
              Visit Tool →
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;